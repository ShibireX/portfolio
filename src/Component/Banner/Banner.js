import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import rgbTrinity from "../../Asset/img/rgbTrinity.avif"

function Banner() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const onAppearAnimations = useSpring({
      opacity: inView & isLoaded ? 1 : 0,
      transform: inView & isLoaded ? "translateY(0px)" : "translateY(20px)",
      config: { tension: 100, friction: 20 },
  });

  const AnimatedImage = ({ src, alt }) => {
    
    const animationProps = useSpring({
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
      config: { tension: 100, friction: 20 },
    });
  
    return (
      <animated.img
        src={src}
        alt={alt}
        style={animationProps}
        onLoad={() => setIsLoaded(true)}
        className="w-full"
      />
    );
  };

  return (
    <animated.div 
      className="flex-1 md:flex-none md:h-[95vh] flex flex-col md:flex-row items-center justify-center md:justify-evenly px-6 md:px-12 gap-6 md:gap-4"
      style={onAppearAnimations} 
      ref={inViewRef}
    >
      
      <div className="max-w-full md:max-w-[37vw] text-center md:text-left order-2 md:order-1">
        <h1 className="text-4xl sm:text-5xl md:text-[5vw] font-medium m-0">
          Hi! I am Andreas.
        </h1>
        <h2 className="text-base sm:text-lg md:text-[1.55vw] font-normal mt-4 md:mt-6 mb-0 leading-relaxed">
        I’m a software engineer focused on building thoughtful, human-centred systems across native 
        Apple platforms and the web. My work spans iOS and visionOS development, frontend architecture for 
        AI-driven products, and end-to-end application engineering in real production environments. 
        I’m drawn to work that sits at the intersection of technology, design, and human experience.
        </h2>
      </div>

      <div className={`w-48 sm:w-64 md:w-[27vw] max-w-xs md:max-w-none order-1 md:order-2 transition-transform duration-[1.6s] ease-in-out ${isLoaded ? "rotate-0" : "-rotate-[160deg] scale-0"}`}>
          <AnimatedImage src={rgbTrinity} alt="RGB Trinity Logo"></AnimatedImage>
      </div>

    </animated.div>
  );
  }
  
  export default Banner;
