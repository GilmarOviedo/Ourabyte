// src/pages/Work/Work.jsx
import './Work.css';
import logoImage from '@assets/images/logo/logo.png';
import pauloImg from '@assets/images/home/OurabytePaulo.jpg';
import alonsoImg from '@assets/images/home/OurabyteAlonso.jpg';
import lewisImg from '@assets/images/home/OurabyteLewis.jpg';
import missionImg from '@assets/images/home/OurabyteMission.jpg';
import visionImg from '@assets/images/home/OurabyteVission.jpg';
import OurabyteFooter from '@components/OurabyteFooter/OurabyteFooter';
import { useLanguage } from '../../context/LanguageContext';

function Work() {
  const { t } = useLanguage();

  return (
    <main className="work-page">
      {/* 🔹  page-container */}
      <div className="page-container">
        
        {/* ====== SECCIÓN INTRODUCTORIA ====== */}
        <section className="work-intro">
          <div className="work-intro__text">
            <h1 className="work-intro__title">{t('workPage.intro.title')}</h1>
            <p className="work-intro__desc">{t('workPage.intro.description')}</p>
          </div>
          <div className="work-intro__image">
            <img src={logoImage} alt="OuraByte logo" />
          </div>
        </section>

        {/* ====== SECCIÓN EQUIPO ====== */}
        <section className="work-team">
          <h2 className="work-section__title">{t('workPage.teamTitle')}</h2>

          <div className="work-team__grid">
            <div className="team-member">
              <h3 className="team-member__name">Paulo Vela</h3>
              <div className="team-member__frame">
                <img src={pauloImg} alt="Paulo Vela" className="team-member__img" />
              </div>
              <p className="team-member__desc">{t('workPage.team.paulo')}</p>
            </div>

            <div className="team-member">
              <h3 className="team-member__name">Alonso Cáceres</h3>
              <div className="team-member__frame">
                <img src={alonsoImg} alt="Alonso Cáceres" className="team-member__img" />
              </div>
              <p className="team-member__desc">{t('workPage.team.alonso')}</p>
            </div>

            <div className="team-member">
              <h3 className="team-member__name">Lewis De La Cruz</h3>
              <div className="team-member__frame">
                <img src={lewisImg} alt="Lewis De La Cruz" className="team-member__img" />
              </div>
              <p className="team-member__desc">{t('workPage.team.lewis')}</p>
            </div>
          </div>
        </section>

        {/* ====== SECCIÓN MISIÓN / VISIÓN ====== */}
        <section className="work-mission-vision">
          
          {/* 🔹 Misión */}
          <div className="work-mission">
            <div className="work-mission__text">
              <h2 className="work-section__subtitle">{t('workPage.mission.title')}</h2>
              <p>{t('workPage.mission.description')}</p>
            </div>

            <div className="work-mission__frame">
              <img src={missionImg} alt="Our Mission" />
            </div>
          </div>

          {/* 🔹 Visión */}
          <div className="work-vision">
            <div className="work-vision__frame">
              <img src={visionImg} alt="Our Vision" />
            </div>

            <div className="work-vision__text">
              <h2 className="work-section__subtitle">{t('workPage.vision.title')}</h2>
              <p>{t('workPage.vision.description')}</p>
            </div>
          </div>
        </section>

      </div>

      {/* ====== FOOTER (fuera del container) ====== */}
      <OurabyteFooter />
    </main>
  );
}

export default Work;
