import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import ImpactChart from './components/ImpactChart';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <ImpactChart />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;