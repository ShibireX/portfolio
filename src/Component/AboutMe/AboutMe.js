import "./AboutMe.css"
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
        <div className="AboutMe" ref={ref}>
            <div className="AboutMeSectionHeader">
                <p>about me</p>
            </div>
            <div className="AboutMeContainer">
                <animated.div className="AboutMeGrid" style={onAppearAnimations} ref={inViewRef}>
                    <div className="AboutMeGridItem">
                        <img src={musicIcon} id="music"></img>
                        <p>Music has always been a great passion of mine. Since the age of 14 
                            I have been producing music of my own together with a childhood friend, 
                            under the alias <u onClick={openRentzSpotify}>Rentz</u></p>
                    </div>
                    <div className="AboutMeGridItem">
                        <img src={languageIcon} id="language"></img>
                        <p>I would describe myself as a cosmopolitan who loves to travel and learn about new cultures 
                            and languages. As of today, I speak Swedish, English, 
                            Spanish, Portuguese and some Korean</p>
                    </div>
                    <div className="AboutMeGridItem">
                        <img src={codeIcon} id="code"></img>
                        <p>I have always been around computer technology, but it wasn’t until after I developed my first 
                            Java game that I realized how fun (and challenging) software development could be. 
                            Programming languages I build with include Swift, Python, JavaScript, 
                            TypeScript, C# and more</p>
                    </div>
                    <div className="AboutMeGridItem">
                        <img src={educationIcon} id="education"></img>
                        <p>My education consists of an engineering degree within computer science, with a masters in 
                            interactive media technology. My studies were conducted at KTH Royal Institute of 
                            Technology in Stockholm, Sweden</p>
                    </div>
                </animated.div>
            </div>
        </div>

)});

export default AboutMe