import { forwardRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./Spotlight.css"
import rentzPromo from "../../Asset/img/rentzPromo.png"
import faceRecog from "../../Asset/img/faceRecog.png"

const images = [
    { src: rentzPromo, title: "Listen to our music!", description: "We have been producing music under the alias Rentz for almost 10 years now. If you enjoy EDM or simply are curious about us, feel free to have a listen or two" },
    { src: faceRecog, title: "Expression Recognition", description: "A facial expression recognition model capable of live classification through a web camera. The model leverages the Google FaceMesh pipeline to accurately map different points of interest on the human face to different emotions" },
    { src: "image3", title: "Spotlight 3", description: "Description for spotlight 3" },
    { src: "image4", title: "Spotlight 4", description: "Description for spotlight 4" },
    { src: "image5", title: "Spotlight 5", description: "Description for spotlight 5" },
  ];

const Spotlight = forwardRef((props, ref) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const textTransitions = useSpring({
        opacity: 1,
        transform: "translateY(0px)",
        from: { opacity: 0, transform: "translateY(20px)" },
        reset: true,
        reverse: false,
    });

    const imageTransitions = useSpring({
       opacity: 1,
       from: { opacity: 0 },
       reset: true 
    });

    const bgImageTransitions = useSpring({
        opacity: 0.5,
        from: { opacity: 0 },
        reset: true 
     });

    const handleNavButtonClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="Spotlight" ref={ref}>
            <div className="SpotlightSectionHeader">
                <p>spotlight</p>
            </div>
            <div className="SpotlightContainer">
                <div className="SpotlightCarouselContainer">
                    <animated.img style={bgImageTransitions} src={images[currentIndex].src} id="backgroundImg"></animated.img>
                    <animated.img style={imageTransitions} src={images[currentIndex].src}></animated.img>
                    <div className="NavButtons">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={`NavButton ${currentIndex === index ? "active" : ""}`}
                                onClick={() => handleNavButtonClick(index)}
                            >
                            </div>
                        ))}
                    </div>
                </div>

                <animated.div style={textTransitions} className="SpotlightTextContainer">
                    <h1>{images[currentIndex].title}</h1>
                    <h2>{images[currentIndex].description}</h2>
                    <h3>Learn more</h3>
                </animated.div>
            </div>
        </div>
)});

export default Spotlight;