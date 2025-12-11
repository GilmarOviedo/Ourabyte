// src/components/Testimonials/Testimonials.jsx
import testimonial1 from '../../assets/images/home/Ourabyte27.jpg';
import testimonial2 from '../../assets/images/home/Ourabyte67.jpg';
import { useLanguage } from '../../context/LanguageContext';
import './Testimonials.css';

function Testimonials() {
  const { t } = useLanguage();
  const testimonials = [
    {
      id: 1,
      image: testimonial1,
      translationKey: 'testimonial1'
    },
    {
      id: 2,
      image: testimonial2,
      translationKey: 'testimonial2'
    }
  ];
  const videoCards = t('testimonials.videos') || [];

  return (
    <section className="testimonials">
      {/* 🔹 NUEVO: Envolvemos en page-container */}
      <div className="page-container">
        <h2 className="testimonials__title">{t('testimonials.title')}</h2>
        
        <div className="testimonials__container">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonials__card">
              <div className="testimonials__image-wrapper">
                <img 
                  src={testimonial.image} 
                  alt={`Testimonial ${testimonial.id}`} 
                  className="testimonials__image" 
                />
              </div>
              <p className="testimonials__text">
                {t(`testimonials.cards.${testimonial.translationKey}`)}
              </p>
            </div>
          ))}
        </div>

        {videoCards.length > 0 && (
          <div className="testimonials__videos">
            {videoCards.map((video) => (
              <a
                key={video.link}
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="testimonials__video-card"
              >
                <div className="testimonials__video-icon">▶</div>
                <div className="testimonials__video-content">
                  <h4>{video.title}</h4>
                  <p>{video.description}</p>
                  <span>LinkedIn</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Testimonials;
