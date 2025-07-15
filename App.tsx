
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import JobSearchForm from './components/JobSearchForm';
import IntroSection from './components/IntroSection';
import JobCategories from './components/JobCategories';
import CTA from './components/CTA';
import Footer from './components/Footer';
import NursingPage from './components/NursingPage';
import TalentNetworkPage from './components/TalentNetworkPage';
import CareerPathPage from './components/CareerPathPage';
import AllVacanciesPage from './components/AllVacanciesPage';
import BenefitsPage from './components/BenefitsPage';
import CulturePage from './components/CulturePage';

// Define a more specific type for the navigation payload
export type NavigationPayload = {
  location?: string;
  keyword?: string;
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [initialLocation, setInitialLocation] = useState<string | null>(null);
  const [initialKeyword, setInitialKeyword] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = (page: string, payload?: NavigationPayload) => {
    setCurrentPage(page);
    setInitialLocation(payload?.location ?? null);
    setInitialKeyword(payload?.keyword ?? null);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  // Close the mobile menu automatically after navigation occurs.
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [currentPage]);

  return (
    <div className="bg-white text-gray-800 antialiased">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} navigate={navigate} />
      
      {currentPage === 'home' && (
        <main>
          <ImageSlider />
          <JobSearchForm navigate={navigate} />
          <IntroSection />
          <JobCategories navigate={navigate} />
          <CTA navigate={navigate} />
        </main>
      )}

      {currentPage === 'nursing' && <NursingPage navigate={navigate} />}
      {currentPage === 'talent' && <TalentNetworkPage />}
      {currentPage === 'careerPath' && <CareerPathPage navigate={navigate} />}
      {currentPage === 'vacancies' && <AllVacanciesPage navigate={navigate} initialLocation={initialLocation} initialKeyword={initialKeyword} />}
      {currentPage === 'benefits' && <BenefitsPage navigate={navigate} />}
      {currentPage === 'culture' && <CulturePage navigate={navigate} />}


      <Footer />
    </div>
  );
}

export default App;
