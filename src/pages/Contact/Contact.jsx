//  src/pages/Contact/Contact.jsx
import React from 'react';
import './Contact.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import { useLanguage } from '../../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="contact-page">
      <div className="contact-page__wrapper">
        <h1 className="contact-page__title">{t('contactPage.title')}</h1>
        <p className="contact-page__subtitle">{t('contactPage.subtitle')}</p>

        {/* Reutiliza el formulario original */}
        <ContactForm />
      </div>
    </section>
  );
}
