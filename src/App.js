import './App.css';
import React, { useRef } from 'react';
import Header from './Component/Header/Header';
import Banner from './Component/Banner/Banner';
import AboutMe from './Component/AboutMe/AboutMe';
import Spotlight from './Component/Spotlight/Spotlight';

function App() {
  const aboutMeRef = useRef(null);
  const spotlightRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Header 
        scrollToAboutMe={() => scrollToSection(aboutMeRef)}
        scrollToSpotlight={() => scrollToSection(spotlightRef)}
      />
      <Banner />
      <AboutMe ref={aboutMeRef} />
      <Spotlight ref={spotlightRef} />
    </div>
  );
}

export default App;
