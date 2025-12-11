// src/components/Footer/Footer.jsx
import gmailIcon from '../../assets/icons/gmail.svg';
import telephoneIcon from '../../assets/icons/telephone.svg';
import locationIcon from '../../assets/icons/location.svg';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.css';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      {/* 🔹 NUEVO: Wrapper con sistema de container unificado */}
      <div className="page-container page-container--full">
        <div className="footer__container">
          <div className="footer__left">
            <div className="footer__item">
              <img src={gmailIcon} alt="Gmail" className="footer__item-icon" />
              <p className="footer__item-text">
                <a href="mailto:ourabyte@gmail.com" className="footer__item-link">
                  ourabyte@gmail.com
                </a>
              </p>
            </div>

            <div className="footer__item">
              <img src={telephoneIcon} alt="Telephone" className="footer__item-icon" />
              <p className="footer__item-text">
                <a href="https://wa.me/51951265124" className="footer__item-link">
                  +51951265124
                </a>
              </p>
            </div>

            <div className="footer__item">
              <img src={locationIcon} alt="Location" className="footer__item-icon" />
              <p className="footer__item-text">
                <a 
                  href="https://maps.google.com/?q=URB.SAN+EUGENIO+CAL.ORQUIDEAS+2619" 
                  className="footer__item-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  URB. SAN EUGENIO CAL. ORQUIDEAS 2619
                </a>
              </p>
            </div>
          </div>

          <div className="footer__right">
            <p className="footer__item-text">{t('footer.rightsReserved')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
