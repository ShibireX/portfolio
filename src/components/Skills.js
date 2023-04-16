import python from "../assets/img/python_logo_transparent.png";
import csharp from "../assets/img/csharp_logo_transparent.png";
import cplus from "../assets/img/cplus_logo.png";
import javascript from "../assets/img/javascript_logo.png";
import css from "../assets/img/css_logo.png";
import html from "../assets/img/html_logo.png";
import figma from "../assets/img/figma_logo_transparent.png";
import unity from "../assets/img/unity_logo.png";
import photoshop from "../assets/img/photoshop_logo_transparent.png";
import aftereffects from "../assets/img/ae_logo_transparent.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState, useEffect } from 'react';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [showSection, setShowSection] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 50 && window.pageYOffset < 1825) {
      setShowSection(true);
    } else {
      setShowSection(false);
    }
  };

  return (
    <section className={`skill ${showSection ? 'active' : ''}`} id="skills">
                    <div className="skill-bx">
                        <h2>What do I know?</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item" id="python">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item" id="csharp">
                                <img src={csharp} alt="Image" />
                                <h5>C#</h5>
                            </div>
                            <div className="item" id="cplus">
                                <img src={cplus} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item" id="javascript">
                                <img src={javascript} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item" id="css">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item" id="html">
                                <img src={html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item" id="figma">
                                <img src={figma} alt="Image" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item" id="unity">
                                <img src={unity} alt="Image" />
                                <h5>Unity</h5>
                            </div>
                            <div className="item" id="aftereffects">
                                <img src={aftereffects} alt="Image" />
                                <h5>After Effects</h5>
                            </div>
                            <div className="item" id="photoshop">
                                <img src={photoshop} alt="Image" />
                                <h5>Photoshop</h5>
                            </div>
                        </Carousel>
                    </div>
    </section>
  )
}
