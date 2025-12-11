//src/pages/Home/Home.jsx
import Hero from '../../components/Hero/Hero';
import ServicesCards from '../../components/ServicesCards/ServicesCards';
import Testimonials from '../../components/Testimonials/Testimonials';
import ContactForm from '../../components/ContactForm/ContactForm';
import OurabyteFooter from '../../components/OurabyteFooter/OurabyteFooter';
import './Home.css';

function Home() {
  return (
    <main className="home-page">
      <Hero />
      <ServicesCards />
      <Testimonials />
      <ContactForm />
      <OurabyteFooter />
    </main>
  );
}

export default Home;
