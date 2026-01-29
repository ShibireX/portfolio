import { forwardRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import rentzPromo from "../../Asset/img/rentzPromo.avif"
import faceRecog from "../../Asset/img/faceRecog.avif"
import gaffBannerQR from "../../Asset/img/gaffBannerQR.avif"
import nusWallpaper from "../../Asset/img/nusWallpaper.avif"
import spatialHackathon from "../../Asset/img/spatialHackathon.avif"
import fikaBanner from "../../Asset/img/fikaBanner.avif"
import s3Conference from "../../Asset/img/s3Conference.avif"

const images = [
    { src: s3Conference, title: "S3 Conference", description: "During the S3 Conference 2025 in Singapore, I had the opportunity to present my work on ImmersiFit, a project that I developed in collaboration with SingHealth. ImmersiFit is a spatial computing based clinical intervention that aims to combat adolescent obesity through mindfulness, immersion and artificial intelligence.", link: "https://www.singhealthdukenus.com.sg/conference/s3-2025"},
    { src: spatialHackathon, title: "visionOS Hackathon", description: "During the summer of 2025, I taught and mentored students participating in the world's first visionOS Hackathon, equipping them with the Swift skills they needed to excell. The event was hosted at National University of Singapore, and ended with a presentation and award ceremony at the Apple Developer Center. Seeing how much the students were able to achieve in such a short amount of time was truly inspiring!", link: "https://hackspatialcomputing.com"},
    { src: fikaBanner, title: "fika ai has launched!", description: "fika ai is a startup that is all about AI recruitment, streamlining the process of finding the right candidates for your company. We want to make the process of recruiting less stressful for candidates, and more efficient for companies. I am responsible for the entire frontend development of the platform.", link: "https://www.joinfika.ai/"},
    { src: nusWallpaper, title: "Exchange at NUS!", description: "Throughout 2025, I was conducting exchange studies at the National University of Singapore, where I sharpened my computer science and media technology skills. I met a lot of interesting people and broadened my cultural knowledge, whilst networking with ambitious individuals. It was an unforgettable experience, and I am looking forward to returning to Singapore soon!", link: "https://www.nus.edu.sg/" },
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
            className="w-full h-full absolute object-cover rounded-lg"
          />
        );
      };

    const handleNavButtonClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div ref={ref}>
            {/* Section Header */}
            <div className="w-full sm:w-72 md:w-80 lg:w-96 h-16 md:h-20 bg-gradient-to-r from-accent-green to-bg-dark flex items-center">
                <p className="ml-4 md:ml-6 text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#005618] to-bg-dark gradient-text">
                    spotlight
                </p>
            </div>
            
            {/* Content */}
            <animated.div 
                className="py-12 md:py-0 px-4 md:px-8 md:h-[90vh] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12"
                style={onAppearAnimations} 
                ref={inViewRef}
            >
                {/* Image Carousel */}
                <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl relative aspect-video rounded-lg">
                    <AnimatedImage src={images[currentIndex].src} alt={images[currentIndex].title}></AnimatedImage>
                    
                    {/* Navigation Dots */}
                    <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2.5 h-2.5 rounded-full transition-opacity duration-300 cursor-pointer ${
                                    currentIndex === index 
                                        ? 'bg-text-light opacity-100' 
                                        : 'bg-text-light opacity-50 hover:opacity-100'
                                }`}
                                onClick={() => handleNavButtonClick(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Text Content */}
                <animated.div style={textTransitions} className="w-full lg:w-2/5 text-center lg:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.75vw] font-medium mb-2 md:mb-4">
                        {images[currentIndex].title}
                    </h1>
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-[1.7vw] font-normal mb-4 md:mb-6 leading-relaxed">
                        {images[currentIndex].description}
                    </h2>
                    <h3 
                        onClick={() => openSpotlightRef(images[currentIndex].link)}
                        className="text-sm sm:text-base md:text-lg lg:text-[1.7vw] font-medium underline cursor-pointer hover:brightness-125 transition-all duration-300 inline-block"
                    >
                        Learn more
                    </h3>
                </animated.div>
            </animated.div>
        </div>
)});

export default Spotlight;
