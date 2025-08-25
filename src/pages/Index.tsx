
import { useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { ClientsSlider } from '@/components/sections/ClientsSlider';
import { Stats } from '@/components/sections/Stats';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Team } from '@/components/sections/Team';
import { Contact } from '@/components/sections/Contact';

// Utility for reveal animations
const RevealOnScroll = () => {
  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    const elements = document.querySelectorAll('.reveal-animation');
    elements.forEach(element => observer.observe(element));

    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return null;
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <RevealOnScroll />
      <Navbar />
      <Hero />
      <ClientsSlider />
      <Stats />
      <Services />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
