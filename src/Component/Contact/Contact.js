import { forwardRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import githubLogo from "../../Asset/img/githubLogo.png";
import linkedinLogo from "../../Asset/img/linkedinLogo.png";
import "./Contact.css"

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
        <div className="Contact" ref={ref}>
            <animated.div className="ContactContainer" style={onAppearAnimations} ref={inViewRef}>
                <div className="ContactLeftContainer">
                    <h2>Still got questions?<br/>Contact me.</h2>
                    <h4>andreasgarcia_business@hotmail.com</h4>
                </div>
                <div className="ContactRightContainer">
                    <h2>Socials</h2>
                    <div className="ContactIcons">
                        <img className="ContactIcon" src={githubLogo} onClick={() => openSocialsLink("https://github.com/ShibireX")}/>
                        <img className="ContactIcon" src={linkedinLogo} onClick={() => openSocialsLink("https://www.linkedin.com/in/andreas-garcia-9516a5155/")}/>
                    </div>
                </div>
            </animated.div>
        </div>
)});

export default Contact;