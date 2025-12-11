// src/components/ContactForm/ContactForm.jsx
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './ContactForm.css';

function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(t('contactForm.alertSuccess'));
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="contact" id="contact">
      {/* 🔹 NUEVO: Envolvemos en page-container */}
      <div className="page-container">
        <div className="contact__form-wrapper">
          <h2 className="contact__title">{t('contactForm.title')}</h2>
          
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__row contact__row--double">
              <div className="contact__field">
                <label htmlFor="firstName" className="contact__label">
                  {t('contactForm.labels.firstName')}
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder={t('contactForm.placeholders.firstName')}
                  className="contact__input contact__input--half"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="lastName" className="contact__label">
                  {t('contactForm.labels.lastName')}
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder={t('contactForm.placeholders.lastName')}
                  className="contact__input contact__input--half"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact__row contact__row--double">
              <div className="contact__field">
                <label htmlFor="email" className="contact__label">
                  {t('contactForm.labels.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder={t('contactForm.placeholders.email')}
                  className="contact__input contact__input--half"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact__row contact__row--message">
              <div className="contact__field contact__field--full">
                <label htmlFor="message" className="contact__label">
                  {t('contactForm.labels.message')}
                </label>
                <textarea
                  id="message"
                  placeholder={t('contactForm.placeholders.message')}
                  className="contact__textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>

            <button type="submit" className="contact__button">
              {t('contactForm.button')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
