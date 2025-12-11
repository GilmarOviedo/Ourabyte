import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import { useLanguage } from '../../context/LanguageContext';

function Dashboard() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      alert(t('dashboard.unauthorized'));
      navigate('/login');
    }
  }, [navigate, t]);

  const handleLogout = () => {
    const token = localStorage.getItem('authToken');

    if (!token) {
      alert(t('dashboard.alerts.noSession'));
      return;
    }

    fetch('https://coral-app-mi8hh.ondigitalocean.app/logout/', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert(t('dashboard.alerts.logoutSuccess'));
          localStorage.removeItem('authToken');
          navigate('/login');
        } else {
          alert(t('dashboard.alerts.logoutError'));
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert(t('dashboard.alerts.logoutError'));
      });
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-page__topbar">
        <button className="dashboard-page__logout-button" onClick={handleLogout}>
          {t('dashboard.logout')}
        </button>
      </div>

      <div className="dashboard-page__content">
        <div className="dashboard-page__embed">
          <iframe
            title="report_presiente_vista_general"
            src="https://app.powerbi.com/view?r=eyJrIjoiM2I0YmY0YzctNDExMS00YzgzLWI0ZmQtOTMwY2ZkYThlNjgwIiwidCI6IjM3ZTBiMDVkLTQxZGEtNDE3Mi05YzVmLWIwZmM1ZTE1NjY3ZSIsImMiOjR9"
            allowFullScreen={true}
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
