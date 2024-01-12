import React, { useEffect, useState } from 'react';
import TopBanner from './components/TopBanner/TopBanner';
import MainBanner from './components/MainBanner/MainBanner';
import './App.css';

function App() {
  const [showMainBanner, setShowMainBanner] = useState(false);
  const [bannerClosed, setBannerClosed] = useState(false);
  const [topBannerClosed, setTopBannerClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBannerClosed = localStorage.getItem('bannerClosed');
      setBannerClosed(isBannerClosed === 'true');

      if (bannerClosed) { 
        return;
      }
      const bannerThreshold = 100;

      if (window.scrollY > bannerThreshold) {
        setShowMainBanner(true);
        const mainBannerElement = document.getElementsByClassName("mainBanner")[0] as HTMLElement;
        if (mainBannerElement) {
          mainBannerElement.classList.add('mainBanner--visible');
        }
        window.removeEventListener('scroll', handleScroll);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeBanner = () => {
    localStorage.setItem('bannerClosed', 'true');
    setBannerClosed(true);
  }

  const closeTopBanner = () => {
    localStorage.setItem('bannerClosed', 'true');
    setTopBannerClosed(true);
  }

  return (
    <div className="App">
      {!topBannerClosed && <TopBanner onClose={closeTopBanner}/>}
      {!topBannerClosed &&!bannerClosed && <MainBanner isVisible={showMainBanner} onClose={closeBanner}/>}
    </div>
  );
}

export default App;
