import React, { forwardRef } from 'react';
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import musicIcon from "../../Asset/img/musicIcon.png"
import languageIcon from "../../Asset/img/languageIcon.png"
import codeIcon from "../../Asset/img/codeIcon.png"
import educationIcon from "../../Asset/img/educationIcon.png"

const AboutMe = forwardRef((props, ref) => {

    const openRentzSpotify = () => {
        window.open("https://open.spotify.com/artist/7vzyj0u6QMnKkN60TEaLqx")
    };

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
        <div ref={ref}>
            {/* Section Header */}
            <div className="w-full sm:w-72 md:w-80 lg:w-96 h-16 md:h-20 bg-gradient-to-r from-accent-red to-bg-dark flex items-center">
                <p className="ml-4 md:ml-6 text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#560000] to-bg-dark gradient-text">
                    about me
                </p>
            </div>
            
            {/* Content */}
            <div className="py-12 md:py-0 px-4 md:px-8 md:h-[90vh] md:flex md:items-center">
                <animated.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto"
                    style={onAppearAnimations} 
                    ref={inViewRef}
                >
                    {/* Music */}
                    <div className="flex items-start gap-4">
                        <div className="w-16 md:w-20 lg:w-24 flex-shrink-0 flex justify-center">
                            <img src={musicIcon} alt="Music" className="w-10 md:w-14 lg:w-16" />
                        </div>
                        <p className="text-sm md:text-base lg:text-lg">
                            Music has always been a great passion of mine. Since the age of 14 
                            I have been producing music of my own together with a childhood friend, 
                            under the alias <u onClick={openRentzSpotify} className="cursor-pointer hover:brightness-125 transition-all duration-300">Rentz</u>
                        </p>
                    </div>
                    
                    {/* Language */}
                    <div className="flex items-start gap-4">
                        <div className="w-16 md:w-20 lg:w-24 flex-shrink-0 flex justify-center">
                            <img src={languageIcon} alt="Languages" className="w-10 md:w-14 lg:w-16" />
                        </div>
                        <p className="text-sm md:text-base lg:text-lg">
                            I would describe myself as a cosmopolitan who loves to travel and learn about new cultures 
                            and languages. As of today, I speak Swedish, English, 
                            Spanish, Portuguese and some Korean
                        </p>
                    </div>
                    
                    {/* Code */}
                    <div className="flex items-start gap-4">
                        <div className="w-16 md:w-20 lg:w-24 flex-shrink-0 flex justify-center">
                            <img src={codeIcon} alt="Code" className="w-14 md:w-18 lg:w-20" />
                        </div>
                        <p className="text-sm md:text-base lg:text-lg">
                            I have always been around computer technology, but it wasn't until after I developed my first 
                            Java game that I realized how fun (and challenging) software development could be. 
                            Programming languages I build with include Swift, Python, JavaScript, 
                            TypeScript, C# and more
                        </p>
                    </div>
                    
                    {/* Education */}
                    <div className="flex items-start gap-4">
                        <div className="w-16 md:w-20 lg:w-24 flex-shrink-0 flex justify-center">
                            <img src={educationIcon} alt="Education" className="w-10 md:w-14 lg:w-16" />
                        </div>
                        <p className="text-sm md:text-base lg:text-lg">
                            My education consists of an engineering degree within computer science, with a masters in 
                            interactive media technology. My studies were conducted at KTH Royal Institute of 
                            Technology in Stockholm, Sweden
                        </p>
                    </div>
                </animated.div>
            </div>
        </div>
)});

export default AboutMe
