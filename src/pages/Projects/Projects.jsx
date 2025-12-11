// src/pages/Projects/Projects.jsx
import "./Projects.css";
import OurabyteFooter from "../../components/OurabyteFooter/OurabyteFooter";
import prismaImage from "../../assets/images/Proyect_Prisma.jpg";
import { Link } from "react-router-dom";
import { useLanguage } from '../../context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  const prismaParagraphs = t('projectsPage.prisma.paragraphs') || [];

  return (
    <main className="projects-page">
      {/* 🔹 Encabezado */}
      <div className="projects__header">
        <h2 className="projects__title">{t('projectsPage.title')}</h2>
        <p className="projects__subtitle">{t('projectsPage.subtitle')}</p>
      </div>

      {/* 🔹 Sección PRISMA */}
      <section className="project__section">
        <h3 className="project__name">{t('projectsPage.prisma.name')}</h3>

        <div className="project__block">
          <div className="project__image-frame">
            <img
              src={prismaImage}
              alt={t('projectsPage.prisma.name')}
              className="project__image"
            />
          </div>

          <div className="project__description">
            {Array.isArray(prismaParagraphs) &&
              prismaParagraphs.map((paragraph, index) => (
                <p key={`${paragraph}-${index}`}>{paragraph}</p>
              ))}
            <p className="project__highlight">
              <strong>{t('projectsPage.prisma.highlight')}</strong>
            </p>

            <Link to="/projects/prisma" className="project__button">
              {t('projectsPage.prisma.cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* 🔹 Footer */}
      <OurabyteFooter />
    </main>
  );
}
