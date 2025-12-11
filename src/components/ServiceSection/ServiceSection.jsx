





/*
// src/components/ServiceSection/ServiceSection.jsx
import './ServiceSection.css';

function ServiceSection({ data }) {
  return (
    <div className="services__container">
      <div className="services__item">
        <h2 id={data.id} className="services__item-title">
          {data.title}
        </h2>
        <p className="services__item-text">{data.text}</p>

        {data.sections.map((section, index) => (
          <div key={index}>
            <h2 className="services__item-description">{section.description}</h2>

            <div className="services__item-cards">
              {section.cards.map((card, cardIndex) => (
                <div key={cardIndex} className="services__item-card">
                  <img 
                    src={card.icon} 
                    alt={card.title} 
                    className="services__item-icon" 
                  />
                  <h3 className="services__item-card-title">{card.title}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceSection;
*/

