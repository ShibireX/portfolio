import { forwardRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import githubLogo from "../../Asset/img/githubLogo.png";
import linkedinLogo from "../../Asset/img/linkedinLogo.png";

const openSocialsLink = (link) => {
    window.open(link);
};

const Contact = forwardRef((props, ref) => {

    const { ref: inViewRef, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const onAppearAnimations = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(20px)",
        config: { tension: 200, friction: 20 },
    });

    return (
        <div ref={ref} className="py-8 md:pb-8 md:pt-0">
            <animated.div 
                className="h-full flex flex-col md:flex-row justify-between items-center md:items-end px-6 md:px-12 gap-12 md:gap-0"
                style={onAppearAnimations} 
                ref={inViewRef}
            >
                {/* Left Content */}
                <div className="text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4vw] font-medium mb-0">
                        Still got questions?<br/>Contact me.
                    </h2>
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-[1.8vw] font-light opacity-50 mt-4">
                        andreasgarcia_business@hotmail.com
                    </h4>
                </div>
                
                {/* Right Content - Socials */}
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[4vw] font-medium mb-4">
                        Socials
                    </h2>
                    <div className="flex gap-4">
                        <img 
                            src={githubLogo} 
                            alt="GitHub"
                            onClick={() => openSocialsLink("https://github.com/ShibireX")}
                            className="w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:brightness-75 transition-all duration-300"
                        />
                        <img 
                            src={linkedinLogo} 
                            alt="LinkedIn"
                            onClick={() => openSocialsLink("https://www.linkedin.com/in/andreas-garcia-9516a5155/")}
                            className="w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:brightness-75 transition-all duration-300"
                        />
                    </div>
                </div>
            </animated.div>
        </div>
)});

export default Contact;
