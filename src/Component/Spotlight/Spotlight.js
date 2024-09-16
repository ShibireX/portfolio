import { forwardRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import "./Spotlight.css"
import rentzPromo from "../../Asset/img/rentzPromo.png"
import faceRecog from "../../Asset/img/faceRecog.png"
import gaffBannerQR from "../../Asset/img/gaffBannerQR.png"

const images = [
    { src: gaffBannerQR, title: "Gaff has launched!", description: "Gaff is a social app I have been working on as a founding engineer for the past year. Gaff is all about changing the psychology of calling, making it easier and more fun to talk to your friends on a daily basis. In short, Gaff is the future of calling!", link: "https://apps.apple.com/se/app/gaff-talk-with-friends-daily/id1644599803" },
    { src: faceRecog, title: "Recognize your emotions!", description: "A facial expression recognition model capable of live emotion classification through web camera. The model leverages the Google FaceMesh pipeline to accurately map different points of interest on the human face to different emotions", link: "https://github.com/ShibireX/facial-expression-recognition" },
    { src: rentzPromo, title: "Listen to our music!", description: "We have been producing music under the alias Rentz for almost 10 years now. If you enjoy EDM or simply are curious about us, feel free to have a listen or two", link: "https://open.spotify.com/artist/7vzyj0u6QMnKkN60TEaLqx" },
];

const openSpotlightRef = (link) => {
    window.open(link);
};

const Spotlight = forwardRef((props, ref) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const { ref: inViewRef, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const onAppearAnimations = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(20px)",
        config: { tension: 200, friction: 20 },
    });

    const textTransitions = useSpring({
        opacity: 1,
        transform: "translateY(0px)",
        from: { opacity: 0, transform: "translateY(20px)" },
        reset: true,
        reverse: false,
    });

    const AnimatedImage = ({ src, alt }) => {
        const [isLoaded, setIsLoaded] = useState(false);

        const imageTransitions = useSpring({
            opacity: isLoaded ? 1 : 0,
            from: { opacity: 0 },
            reset: true 
         });
        
        return (
          <animated.img
            src={src}
            alt={alt}
            style={imageTransitions}
            onLoad={() => setIsLoaded(true)}
          />
        );
      };

    const handleNavButtonClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="Spotlight" ref={ref}>
            <div className="SpotlightSectionHeader">
                <p>spotlight</p>
            </div>
            <animated.div className="SpotlightContainer" style={onAppearAnimations} ref={inViewRef}>
                <div className="SpotlightCarouselContainer">
                    <AnimatedImage src={images[currentIndex].src}></AnimatedImage>
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
                    <h3 onClick={() => openSpotlightRef(images[currentIndex].link)}>Learn more</h3>
                </animated.div>
            </animated.div>
        </div>
)});

export default Spotlight;