// src/pages/Services/Services.jsx
import "./Services.css";
import OurabyteFooter from "../../components/OurabyteFooter/OurabyteFooter";
import { useLanguage } from '../../context/LanguageContext';

// Imágenes
import serviceImg1 from "../../assets/images/service1.jpg";
import serviceImg2 from "../../assets/images/service2.jpg";
import serviceImg3 from "../../assets/images/service3.jpg";
import serviceImg4 from "../../assets/images/service4.jpg";
import serviceImg5 from "../../assets/images/service5.png";
import serviceImg6 from "../../assets/images/service6.jpg"; 

export default function Services() {
  const { t } = useLanguage();
  const services = [
    {
      key: "technologyConsulting",
      image: serviceImg1,
      align: "left",
    },
    {
      key: "researchers",
      image: serviceImg2,
      align: "right",
    },
    {
      key: "startups",
      image: serviceImg3,
      align: "left",
    },
    {
      key: "prototyping",
      image: serviceImg4,
      align: "right",
    },
    {
      key: "development",
      image: serviceImg5,
      align: "left",
    },
    {
      key: "dataCollection",
      image: serviceImg6,
      align: "right",
    },
  ];

  return (
    <main className="services-page">

      {/* 🔹 Secciones alternadas */}
      <section className="services__section">
        <div className="page-container">
          <div className="services__container">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service__block ${
                  service.align === "right" ? "service__block--reverse" : ""
                }`}
              >
                <div className="service__text">
                  <h3 className="service__title">
                    {t(`servicesPage.sections.${service.key}.title`)}
                  </h3>
                  <p className="service__description">
                    {t(`servicesPage.sections.${service.key}.description`)}
                  </p>
                </div>
                <div className="service__image-frame">
                  <img
                    src={service.image}
                    alt={t(`servicesPage.sections.${service.key}.title`)}
                    className="service__image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Footer  */}
      <OurabyteFooter />
    </main>
  );
}
