import React from 'react';
import './News.css';
import OurabyteFooter from '../../components/OurabyteFooter/OurabyteFooter';
import { useLanguage } from '../../context/LanguageContext';

export default function News() {
  const { t } = useLanguage();
  const streamlitUrl = t('newsPage.barcodeCard.link');

  return (
    <main className="news-page">
      <section className="news">
        <div className="news__content">
          <span className="news__badge">{t('newsPage.badge')}</span>
          <h1 className="news__title">{t('newsPage.title')}</h1>
          <p className="news__description">{t('newsPage.description')}</p>
          <div className="news__divider"></div>
          <p className="news__subtitle">{t('newsPage.subtitle')}</p>

          <div className="news__card">
            <span className="news__card-tag">{t('newsPage.barcodeCard.tag')}</span>
            <h3 className="news__card-title">{t('newsPage.barcodeCard.title')}</h3>
            <p className="news__card-text">{t('newsPage.barcodeCard.description')}</p>
            <a
              href={streamlitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="news__card-button"
            >
              {t('newsPage.barcodeCard.button')}
            </a>
          </div>
        </div>
      </section>
      <OurabyteFooter />
    </main>
  );
}
