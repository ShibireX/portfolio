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
      className="flex-1 md:flex-none md:h-[95vh] flex flex-col md:flex-row items-center justify-center md:justify-evenly px-6 md:px-12 gap-8 md:gap-4 overflow-hidden"
      style={onAppearAnimations} 
      ref={inViewRef}
    >
      
      <div className="max-w-full md:max-w-[37vw] text-center md:text-left order-2 md:order-1">
        <h1 className="text-4xl sm:text-5xl md:text-[5vw] font-medium m-0">
          Hi! I am Andreas.
        </h1>
        <h2 className="text-base sm:text-lg md:text-[1.55vw] font-normal mt-4 md:mt-6 mb-0 leading-relaxed">
          Welcome to my portfolio! I am glad you found your way here. I am currently doing my masters 
          in Interactive Media Technology at KTH in Stockholm, whilst being a founding iOS engineer 
          at a startup company. I have a passion for visual aesthetics, music production and code, 
          and many other different areas of interest. If you want to get to know me better, 
          feel free to scroll down or press the shortcuts up above!
        </h2>
      </div>

      <div className={`w-48 sm:w-64 md:w-[27vw] max-w-xs md:max-w-none order-1 md:order-2 transition-transform duration-[1.6s] ease-in-out ${isLoaded ? "rotate-0" : "-rotate-[160deg] scale-0"}`}>
          <AnimatedImage src={rgbTrinity} alt="RGB Trinity Logo"></AnimatedImage>
      </div>

    </animated.div>
  );
  }
  
  export default Banner;
