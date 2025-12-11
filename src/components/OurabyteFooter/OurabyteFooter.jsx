
// src/components/OurabyteFooter/OurabyteFooter.jsx
import logoImage from '../../assets/images/logo/logo.png';
import facebookIcon from '../../assets/icons/fac_icon1.png';
import linkedinIcon from '../../assets/icons/link_icon2.png';
import { useLanguage } from '../../context/LanguageContext';
import './OurabyteFooter.css';

function OurabyteFooter() {
  const { t } = useLanguage();
  const columnKeys = ['about', 'services', 'projects'];
  const columns = columnKeys.map((key) => ({
    title: t(`ourabyteFooter.columns.${key}.title`),
    items: t(`ourabyteFooter.columns.${key}.items`)
  }));

  return (
    <section className="ourabyte-footer">
      {/* 🔹 NO usar page-container aquí - el CSS lo maneja internamente */}
      <div className="ourabyte-footer__container">
        <div className="ourabyte-footer__left">
          <div className="ourabyte-footer__logo">
            <img src={logoImage} alt="OuraByte Logo" />
          </div>
          <h3 className="ourabyte-footer__title">OuraByte</h3>

          <div className="ourabyte-footer__text">
            <p className="ourabyte-footer__description">
              {t('ourabyteFooter.description')}
            </p>
          </div>

          <div className="footer__social">
            <a href="https://www.facebook.com/ourabyte" target="_blank" rel="noopener noreferrer">
              <div className="footer__social-icon-bg">
                <img src={facebookIcon} alt={t('header.socialAlt.facebook')} className="footer__social-icon" />
              </div>
            </a>
            <a href="https://www.linkedin.com/company/ourabyte/" target="_blank" rel="noopener noreferrer">
              <div className="footer__social-icon-bg">
                <img src={linkedinIcon} alt={t('header.socialAlt.linkedin')} className="footer__social-icon" />
              </div>
            </a>
          </div>
        </div>

        <div className="ourabyte-footer__right">
          <div className="ourabyte-info">
            <div className="ourabyte-info__content">
              {columns.map((column, index) => (
                <div key={column.title} className="ourabyte-info__column">
                  <h3 className="ourabyte-info__title">{column.title}</h3>
                  <ul>
                    {Array.isArray(column.items) &&
                      column.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurabyteFooter;
