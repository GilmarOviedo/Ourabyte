import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

function ProtectedRoute({ children, allowedUsers = [] }) {
  const [isAuthorized, setIsAuthorized] = useState(null);
  const token = localStorage.getItem('authToken');
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const { t } = useLanguage();

  useEffect(() => {
    if (!token) {
      setIsAuthorized(false);
      return;
    }

    // Si no hay usuarios específicos permitidos, cualquier usuario autenticado puede acceder
    if (allowedUsers.length === 0) {
      setIsAuthorized(true);
      return;
    }

    // Verificar si el usuario está en la lista de permitidos
    const username = user?.username || user;
    const hasAccess = allowedUsers.includes(username);
    setIsAuthorized(hasAccess);

    if (!hasAccess) {
      alert(t('protectedRoute.noPermission'));
    }
  }, [token, user, allowedUsers, t]);

  // Mientras verifica autorización
  if (isAuthorized === null) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#001f1c',
        color: '#C8E100',
        fontSize: '20px',
        fontFamily: 'Roboto, sans-serif'
      }}>
        {t('common.verifyingAccess')}
      </div>
    );
  }

  // Si no está autorizado, redirigir al login
  if (!isAuthorized) {
    return <Navigate to="/login" replace />;
  }

  // Si está autorizado, mostrar el componente
  return children;
}

export default ProtectedRoute;


