import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logoImage from '@assets/images/logo/logo.png';
import facebookIcon from '@assets/icons/fac_icon1.png';
import linkedinIcon from '@assets/icons/link_icon2.png';
import { useLanguage } from '../../context/LanguageContext';
import './Header.css';

function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, toggleLanguage, language } = useLanguage();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className={`header ${isMenuOpen ? 'header--menu-open' : ''}`}>
      <nav className="header__nav">
        {/* LOGO */}
        <Link to="/">
          <img src={logoImage} alt="OuraByte Logo" className="logo" />
        </Link>

        <button
          type="button"
          className="header__menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="primary-navigation"
          className={`header__collapsible ${isMenuOpen ? 'header__collapsible--open' : ''}`}
        >
          {/* MENÚ PRINCIPAL */}
          <ul className="nav-links">
            <li>
              <Link to="/" className={isActive('/') ? 'active' : ''}>
                {t('header.nav.home')}
              </Link>
            </li>
            <li>
              <Link to="/work" className={isActive('/work') ? 'active' : ''}>
                {t('header.nav.work')}
              </Link>
            </li>
            <li>
              <Link to="/services" className={isActive('/services') ? 'active' : ''}>
                {t('header.nav.services')}
              </Link>
            </li>
            <li>
              <Link to="/projects" className={isActive('/projects') ? 'active' : ''}>
                {t('header.nav.projects')}
              </Link>
            </li>
            <li>
              <Link to="/news" className={isActive('/news') ? 'active' : ''}>
                {t('header.nav.news')}
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="lang-switch"
                onClick={toggleLanguage}
                aria-label={t('header.languageAriaLabel')}
              >
                {language === 'en' ? 'ES' : 'EN'}
              </button>
            </li>
          </ul>

          {/* REDES SOCIALES */}
          <div className="header__social-group">
            <a
              href="https://www.facebook.com/ourabyte"
              target="_blank"
              rel="noopener noreferrer"
              className="header__social-link"
            >
              <div className="header__social-icon-bg">
                <img src={facebookIcon} alt={t('header.socialAlt.facebook')} className="header__social-icon" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/ourabyte/"
              target="_blank"
              rel="noopener noreferrer"
              className="header__social-link"
            >
              <div className="header__social-icon-bg">
                <img src={linkedinIcon} alt={t('header.socialAlt.linkedin')} className="header__social-icon" />
              </div>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
