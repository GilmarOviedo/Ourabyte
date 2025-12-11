import OurabyteFooter from "../../components/OurabyteFooter/OurabyteFooter";
import "./ProjectPrisma.css";

//  Imágenes 
import prisma1 from "../../assets/images/prisma1.jpg";
import prisma2 from "../../assets/images/prisma2.jpg";
import prisma3 from "../../assets/images/prisma3.jpg";
import prisma4 from "../../assets/images/prisma4.png";
import prisma5 from "../../assets/images/prisma5.jpg";
import prisma6 from "../../assets/images/prisma6.jpg";
import prisma7 from "../../assets/images/prisma7.png";
import { useLanguage } from '../../context/LanguageContext';

export default function ProjectPrisma() {
  const { t } = useLanguage();
  const paragraphs = t('projectPrisma.paragraphs') || [];
  const results = t('projectPrisma.results') || [];
  const resultImages = [prisma2, prisma3, prisma4, prisma5, prisma6, prisma7];

  return (
    <>
      {/* ===== CONTENIDO PRINCIPAL ===== */}
      <main className="prisma-page">
        {/* === SECCIÓN PRINCIPAL === */}
        <section className="prisma__header">
          <div className="prisma__text-block">
            <h2 className="prisma__title">{t('projectPrisma.title')}</h2>
            <h3 className="prisma__subtitle">{t('projectPrisma.subtitle')}</h3>

            {Array.isArray(paragraphs) &&
              paragraphs.map((paragraph, index) => (
                <p key={`${paragraph}-${index}`} className="prisma__text">
                  {paragraph}
                </p>
              ))}
          </div>

          <div className="prisma__image-main">
            <img src={prisma1} alt={t('projectPrisma.title')} className="prisma__image" />
          </div>
        </section>

        {/* === SECCIÓN DE RESULTADOS === */}
        <section className="prisma__results">
          <h3 className="prisma__section-title">{t('projectPrisma.resultsTitle')}</h3>

          <div className="prisma__grid">
            {Array.isArray(results) &&
              results.map((item, index) => (
                <div className="prisma__pair" key={item.title}>
                  <h4 className="prisma__pair-title">{item.title}</h4>
                  <div className="prisma__image-frame">
                    <img src={resultImages[index]} alt={item.title} className="prisma__image" />
                  </div>
                  <p className="prisma__pair-text">{item.text}</p>
                </div>
              ))}
          </div>
        </section>
      </main>

      {/* ===== FOOTER AISLADO (fuera del main) ===== */}
      <div className="prisma-footer-wrapper">
        <OurabyteFooter />
      </div>
    </>
  );
}
