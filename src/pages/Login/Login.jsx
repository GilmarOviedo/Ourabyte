import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useLanguage } from '../../context/LanguageContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = { username, password };

    try {
      const response = await fetch('https://coral-app-mi8hh.ondigitalocean.app/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      });

      const data = await response.json();

      if (data.token) {
        console.log('Token:', data.token);
        console.log('User:', data.user);

        localStorage.setItem('authToken', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        const usernameValue = data.user?.username || data.user;

        if (usernameValue === 'DASHBOARD') {
          setMessage(t('login.messages.dashboard'));
          setShowMessage(true);
          setTimeout(() => {
            navigate('/dashboard');
          }, 1500);
        } else if (usernameValue === 'CHATBOT') {
          setMessage(t('login.messages.chatbot'));
          setShowMessage(true);
          setTimeout(() => {
            navigate('/chatbot');
          }, 1500);
        } else {
          setMessage(t('login.messages.survey'));
          setShowMessage(true);
          setTimeout(() => {
            navigate('/sent-flow');
          }, 1500);
        }
      } else {
        alert(t('login.alerts.failed'));
      }
    } catch (error) {
      console.error('Error:', error);
      alert(t('login.alerts.error'));
    }
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <h2>{t('login.title')}</h2>

        <form id="loginForm" onSubmit={handleSubmit}>
          <label htmlFor="username">{t('login.labels.username')}:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">{t('login.labels.password')}:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input type="submit" value={t('login.submit')} />
        </form>

        {showMessage && (
          <div id="login-message" style={{ display: 'block' }}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
