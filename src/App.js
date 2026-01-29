import './App.css';
import React, { useRef } from 'react';
import Header from './Component/Header/Header';
import Banner from './Component/Banner/Banner';
import AboutMe from './Component/AboutMe/AboutMe';
import Spotlight from './Component/Spotlight/Spotlight';
import Works from './Component/Works/Works';
import Contact from './Component/Contact/Contact';

function App() {
  const aboutMeRef = useRef(null);
  const spotlightRef = useRef(null);
  const worksRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App overflow-x-hidden">
      <div className="h-screen md:h-auto overflow-hidden flex flex-col md:block">
        <Header 
          scrollToAboutMe={() => scrollToSection(aboutMeRef)}
          scrollToSpotlight={() => scrollToSection(spotlightRef)}
          scrollToWorks={() => scrollToSection(worksRef)}
          scrollToContact={() => scrollToSection(contactRef)}
        />
        <Banner />
      </div>
      <AboutMe ref={aboutMeRef} />
      <Spotlight ref={spotlightRef} />
      <Works ref={worksRef} />
      <Contact ref={contactRef} />
    </div>
  );
}

export default App;
