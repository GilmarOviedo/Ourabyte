import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SentFlow.css';
import { useLanguage } from '../../context/LanguageContext';

function SentFlow() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [activeCard, setActiveCard] = useState('encuesta');
  const [telefono, setTelefono] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [templatePhoneNumber, setTemplatePhoneNumber] = useState('');
  const [currentCredit, setCurrentCredit] = useState(t('common.loading'));
  const [timesFlowUsed, setTimesFlowUsed] = useState(t('common.loading'));

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      alert(t('sentFlow.alerts.unauthorized'));
      navigate('/login');
      return;
    }

    // Fetch credit info
    fetch('https://coral-app-mi8hh.ondigitalocean.app/get_credit/', {
      method: 'GET',
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        const formattedCredit = `$ ${data.current_credit || '0.0000000'}`;
        setCurrentCredit(formattedCredit);
        setTimesFlowUsed(data.times_flow_used || '0');
      })
      .catch(error => {
        console.error('Error:', error);
        alert(t('sentFlow.alerts.creditError'));
      });
  }, [navigate, t]);

  const handleSurveySubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    const surveyData = { cantidad, telefono };

    fetch('https://coral-app-mi8hh.ondigitalocean.app/send_survey/', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(surveyData)
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert(t('sentFlow.alerts.surveySuccess'));
        } else {
          alert(t('sentFlow.alerts.surveyError'));
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert(t('sentFlow.alerts.surveyError'));
      });
  };

  const handleTemplateSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    const templateData = { phoneNumber: templatePhoneNumber };

    fetch('https://coral-app-mi8hh.ondigitalocean.app/send_template/', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(templateData)
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert(t('sentFlow.alerts.templateSuccess'));
        } else {
          alert(t('sentFlow.alerts.templateError'));
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert(t('sentFlow.alerts.templateError'));
      });
  };

  const handleLogout = () => {
    const token = localStorage.getItem('authToken');

    if (!token) {
      alert(t('sentFlow.alerts.noSession'));
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
          alert(t('sentFlow.alerts.logoutSuccess'));
          localStorage.removeItem('authToken');
          navigate('/login');
        } else {
          alert(t('sentFlow.alerts.logoutError'));
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert(t('sentFlow.alerts.logoutError'));
      });
  };

  return (
    <div className="sent-flow-page">
      <header className="sent-flow-header">
        <nav>
          <ul>
            <li>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setActiveCard('plantilla'); }}
              >
                {t('sentFlow.header.sendTemplate')}
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setActiveCard('encuesta'); }}
              >
                {t('sentFlow.header.sendSurvey')}
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {activeCard === 'encuesta' && (
        <div className="form-container">
          <h2>{t('sentFlow.survey.title')}</h2>

          <form onSubmit={handleSurveySubmit}>
            <label htmlFor="telefono">{t('sentFlow.survey.phoneLabel')}</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              pattern="[0-9]{9}"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
              title={t('sentFlow.survey.phoneTitle')}
            />

            <label htmlFor="cantidad">{t('sentFlow.survey.countLabel')}</label>
            <input
              type="number"
              id="cantidad"
              name="cantidad"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              required
              title={t('sentFlow.survey.countTitle')}
            />

            <button type="submit">{t('sentFlow.survey.submit')}</button>
          </form>

          <div id="creditInfoEncuesta">
            <h3>{t('sentFlow.survey.creditInfoTitle')}</h3>
            <h5>{t('sentFlow.survey.refreshHint')}</h5>
            <p>
              <strong>{t('sentFlow.survey.currentCredit')}</strong>{' '}
              <span>{currentCredit}</span>
            </p>
            <p>
              <strong>{t('sentFlow.survey.timesUsed')}</strong>{' '}
              <span>{timesFlowUsed}</span>
            </p>
          </div>

          <button id="logoutBtn" onClick={handleLogout}>
            {t('sentFlow.survey.logout')}
          </button>
        </div>
      )}

      {activeCard === 'plantilla' && (
        <div className="form-container">
          <h2>{t('sentFlow.template.title')}</h2>

          <form onSubmit={handleTemplateSubmit}>
            <label htmlFor="templatePhoneNumber">{t('sentFlow.template.phoneLabel')}</label>
            <input
              type="tel"
              id="templatePhoneNumber"
              name="templatePhoneNumber"
              pattern="[0-9]{9}"
              value={templatePhoneNumber}
              onChange={(e) => setTemplatePhoneNumber(e.target.value)}
              required
              title={t('sentFlow.survey.phoneTitle')}
            />

            <button type="submit">{t('sentFlow.template.submit')}</button>
          </form>

          <div id="creditInfoPlantilla">
            <h3>{t('sentFlow.template.creditInfoTitle')}</h3>
            <h5>{t('sentFlow.template.refreshHint')}</h5>
            <p>
              <strong>{t('sentFlow.template.currentCredit')}</strong>{' '}
              <span>{currentCredit}</span>
            </p>
            <p>
              <strong>{t('sentFlow.template.timesUsed')}</strong>{' '}
              <span>{timesFlowUsed}</span>
            </p>
          </div>

          <button id="logoutBtn2" onClick={handleLogout}>
            {t('sentFlow.template.logout')}
          </button>
        </div>
      )}
    </div>
  );
}

export default SentFlow;
