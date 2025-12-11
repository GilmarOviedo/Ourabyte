import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Chatbot.css';
import { useLanguage } from '../../context/LanguageContext';

function Chatbot() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      alert(t('chatbot.unauthorized'));
      navigate('/login');
    }
  }, [navigate, t]);

  const handleLogout = () => {
    const token = localStorage.getItem('authToken');

    if (!token) {
      alert(t('chatbot.alerts.noSession'));
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
          alert(t('chatbot.alerts.logoutSuccess'));
          localStorage.removeItem('authToken');
          navigate('/login');
        } else {
          alert(t('chatbot.alerts.logoutError'));
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert(t('chatbot.alerts.logoutError'));
      });
  };

  return (
    <div className="chatbot-page">
      <div className="chatbot-page__topbar">
        <button className="chatbot-page__logout-button" onClick={handleLogout}>
          {t('chatbot.logout')}
        </button>
      </div>

      <div className="chatbot-page__content">
        <div className="chatbot-page__embed">
          <iframe
            title="report_presiente"
            src="https://app.powerbi.com/view?r=eyJrIjoiMzJhMTExNTEtN2NmOS00ZWRiLWEwMjEtOTQ4NTM3YThjMmNmIiwidCI6IjM3ZTBiMDVkLTQxZGEtNDE3Mi05YzVmLWIwZmM1ZTE1NjY3ZSIsImMiOjR9"
            allowFullScreen={true}
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
