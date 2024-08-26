import "./Banner.css"
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import rgbTrinity from "../../Asset/img/rgbTrinity.png"

function Banner() {
  
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const onAppearAnimations = useSpring({
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0px)" : "translateY(20px)",
      config: { tension: 100, friction: 20 },
  });


  return (
    <animated.div className="Banner" style={onAppearAnimations} ref={inViewRef}>
      
      <div className="BannerTextContainer">
      <h1>Hi! I am Andreas.</h1>
      <h2>
      Welcome to my portfolio! I am glad you found your way here. I am currently doing my masters 
      in Interactive Media Technology at KTH in Stockholm, whilst being a founding iOS engineer 
      at a startup company. I have a passion for visual aesthetics, music production and code, 
      and many other different areas of interest. If you want to get to know me better, 
      feel free to scroll down or press the shortcuts up above!
      </h2>
      </div>

      <div className="BannerImageContainer">
          <img src={rgbTrinity}></img>
      </div>

    </animated.div>
  );
  }
  
  export default Banner;