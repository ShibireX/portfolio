import './App.css';
import React, { useRef } from 'react';
import Header from './Component/Header/Header';
import Banner from './Component/Banner/Banner';
import AboutMe from './Component/AboutMe/AboutMe';
import Spotlight from './Component/Spotlight/Spotlight';
import Works from './Component/Works/Works';

function App() {
  const aboutMeRef = useRef(null);
  const spotlightRef = useRef(null);
  const worksRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Header 
        scrollToAboutMe={() => scrollToSection(aboutMeRef)}
        scrollToSpotlight={() => scrollToSection(spotlightRef)}
        scrollToWorks={() => scrollToSection(worksRef)}
      />
      <Banner />
      <AboutMe ref={aboutMeRef} />
      <Spotlight ref={spotlightRef} />
      <Works ref={worksRef} />
    </div>
  );
}

export default App;
