//src/components/ServicesCards/ServicesCards.jsx
import { Link } from 'react-router-dom';
import icon1 from '@assets/icons/icon1.png';
import icon2 from '@assets/icons/icon2.png';
import icon3 from '@assets/icons/icon3.png';
import icon4 from '@assets/icons/icon4.png';
import icon5 from '@assets/icons/icon5.png';
import icon6 from '@assets/icons/icon6.png';
import { useLanguage } from '../../context/LanguageContext';
import './ServicesCards.css';

function ServicesCards() {
  const { t } = useLanguage();
  const services = [
    {
      id: 1,
      icon: icon1,
      translationKey: 'service1',
      link: '/services#consulting'
    },
    {
      id: 2,
      icon: icon2,
      translationKey: 'service2',
      link: '/services#academic-project-development'
    },
    {
      id: 3,
      icon: icon3,
      translationKey: 'service3',
      link: '/services#consulting'
    },
    {
      id: 4,
      icon: icon4,
      translationKey: 'service4',
      link: '/services#academic-project-development'
    },
    {
      id: 5,
      icon: icon5,
      translationKey: 'service5',
      link: '/services#academic-project-development'
    },
    {
      id: 6,
      icon: icon6,
      translationKey: 'service6',
      link: '/services#consulting'
    }
  ];

  return (
    <section className="services">
      {/* 🔹 NUEVO: Envolvemos en page-container */}
      <div className="page-container">
        <div className="services__header">
          <h2 className="services__header-title">{t('servicesCards.heading')}</h2>
          <p className="services__header-text">{t('servicesCards.description')}</p>
        </div>

        <div className="services__container services__container--cards">
          {services.map((service) => (
            <div key={service.id} className="services__item services__card">
              <div className="services__card-icon-wrapper">
                <img 
                  src={service.icon} 
                  alt={t(`servicesCards.cards.${service.translationKey}.title`)} 
                  className="services__card-icon" 
                />
              </div>
              <h3 className="services__card-title">
                {t(`servicesCards.cards.${service.translationKey}.title`)}
              </h3>
              <Link to={service.link} className="services__card-button">
                {t('servicesCards.button')}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesCards;
