// src/routes/AppRoutes.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ProtectedRoute from './ProtectedRoute';
import ScrollToTop from '../utils/scrollToTop';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProjectPrisma from "../pages/Projects/ProjectPrisma";
import { useLanguage } from '../context/LanguageContext';



// 🔹 Lazy loading de todas las páginas
const Home = lazy(() => import('../pages/Home/Home'));
const Work = lazy(() => import('../pages/Work/Work'));
const Services = lazy(() => import('../pages/Services/Services'));
const Projects = lazy(() => import('../pages/Projects/Projects')); // ✅ agregado
const Login = lazy(() => import('../pages/Login/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));
const Chatbot = lazy(() => import('../pages/Chatbot/Chatbot'));
const SentFlow = lazy(() => import('../pages/SentFlow/SentFlow'));
const News = lazy(() => import('../pages/News/News'));

// 🔹 Pantalla de carga (fallback)
const LoadingFallback = () => {
  const { t } = useLanguage();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#001f1c',
        color: '#C8E100',
        fontSize: '24px',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      {t('common.loading')}
    </div>
  );
};

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      {/* Contenedor principal de las vistas */}
      <div className="main-content">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* 🔹 Página principal */}
            <Route path="/" element={<Home />} />

            {/* 🔹 Página "Somos / About Us" */}
            <Route path="/work" element={<Work />} />

            {/* 🔹 Página de servicios */}
            <Route path="/services" element={<Services />} />

            {/* 🔹 Página de proyectos */}
            <Route path="/projects" element={<Projects />} /> {/* ✅ NUEVA RUTA */}

            {/* 🔹 Página de noticias */}
            <Route path="/news" element={<News />} />

            {/* 🔹 Login */}
            <Route path="/login" element={<Login />} />

            {/* 🔹 Dashboard protegido */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute allowedUsers={['DASHBOARD']}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* 🔹 Chatbot protegido */}
            <Route
              path="/chatbot"
              element={
                <ProtectedRoute allowedUsers={['CHATBOT']}>
                  <Chatbot />
                </ProtectedRoute>
              }
            />

            {/* 🔹 SentFlow protegido */}
            <Route
              path="/sent-flow"
              element={
                <ProtectedRoute>
                  <SentFlow />
                </ProtectedRoute>
              }
            />

            {/* 🔹 Redirección global */}
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/projects/prisma" element={<ProjectPrisma />} />

          </Routes>
        </Suspense>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
