import { useState } from "react";

function Header({ scrollToAboutMe, scrollToSpotlight, scrollToWorks, scrollToContact }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (scrollFn) => {
        scrollFn();
        setIsMenuOpen(false);
    };

    return (
      <header className="h-14 md:h-16 relative z-50">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-around pt-4">
            <p onClick={scrollToAboutMe} className="text-sm lg:text-base cursor-pointer bg-gradient-to-b from-text-light via-text-light to-text-dim gradient-text hover:brightness-200 transition-all duration-300">
                about me
            </p>
            <p onClick={scrollToSpotlight} className="text-sm lg:text-base cursor-pointer bg-gradient-to-b from-text-light via-text-light to-text-dim gradient-text hover:brightness-200 transition-all duration-300">
                spotlight
            </p>
            <p onClick={scrollToWorks} className="text-sm lg:text-base cursor-pointer bg-gradient-to-b from-text-light via-text-light to-text-dim gradient-text hover:brightness-200 transition-all duration-300">
                works
            </p>
            <p onClick={scrollToContact} className="text-sm lg:text-base cursor-pointer bg-gradient-to-b from-text-light via-text-light to-text-dim gradient-text hover:brightness-200 transition-all duration-300">
                contact
            </p>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden absolute top-4 right-4 z-50 flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            aria-label="Toggle menu"
        >
            <span className={`w-6 h-0.5 bg-text-light transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-text-light transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-text-light transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Navigation Menu */}
        <nav className={`md:hidden fixed inset-0 bg-bg-dark/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <p onClick={() => handleNavClick(scrollToAboutMe)} className="text-2xl cursor-pointer text-text-light hover:text-white transition-colors duration-300">
                about me
            </p>
            <p onClick={() => handleNavClick(scrollToSpotlight)} className="text-2xl cursor-pointer text-text-light hover:text-white transition-colors duration-300">
                spotlight
            </p>
            <p onClick={() => handleNavClick(scrollToWorks)} className="text-2xl cursor-pointer text-text-light hover:text-white transition-colors duration-300">
                works
            </p>
            <p onClick={() => handleNavClick(scrollToContact)} className="text-2xl cursor-pointer text-text-light hover:text-white transition-colors duration-300">
                contact
            </p>
        </nav>
      </header>
    );
  }
  
  export default Header;
