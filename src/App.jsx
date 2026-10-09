import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
import MapSection from './components/MapSection';
import ReviewSection from './components/ReviewSection';
import Footer from './components/Footer';
import OrderBar from './components/OrderBar';
import { LanguageProvider } from './LanguageContext';
import { OrderProvider } from './OrderContext';

function App() {
  return (
    <LanguageProvider>
      <OrderProvider>
        <div className="min-h-screen relative flex flex-col overflow-x-clip">
          <Header />

          <main className="flex-grow">
            <div className="max-w-6xl w-full mx-auto px-5 md:px-6">
              <HeroSection />
              <MenuSection />
              <GallerySection />
            </div>
            <AboutSection />
            <div className="max-w-6xl w-full mx-auto px-5 md:px-6">
              <MapSection />
              <ReviewSection />
            </div>
          </main>

          <Footer />
          <OrderBar />
        </div>
      </OrderProvider>
    </LanguageProvider>
  );
}

export default App;
