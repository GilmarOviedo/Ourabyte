// src/components/Hero/Hero.jsx
import heroImage from '@assets/images/home/Ourabyte_Ceo3.jpg';
import { useLanguage } from '../../context/LanguageContext';
import './Hero.css';

function Hero() {
  const { t } = useLanguage();
  const heroTitle = t('hero.title');

  return (
    <section className="hero">
      <div className="hero_content">
          <div className="hero_text">
            <h1 className="hero_content--title">
              {heroTitle.split('\n').map((line, index, arr) => {
                const isLastLine = index === arr.length - 1;
                return (
                  <span
                    key={`${line}-${index}`}
                    className={`hero_content--title-line${isLastLine ? ' hero_content--title-line--nowrap' : ''}`}
                  >
                    {line}
                    {index < arr.length - 1 && <br />}
                  </span>
                );
              })}
            </h1>
            <p className="hero_content--text">
              {t('hero.description')}
            </p>
            <a href="#contact" className="hero_content--button">
              {t('hero.cta')}
            </a>
          </div>

        <div className="hero_image-wrapper">
          <img 
            src={heroImage} 
            alt="OuraByte Team" 
            className="hero_content--image" 
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
