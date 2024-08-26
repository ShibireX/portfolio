import { forwardRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import "./Works.css"

const Works = forwardRef((props, ref) => {

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
        <div className="Works" ref={ref}>
            <div className="WorksSectionHeader">
                <p>works</p>
            </div>
            <animated.div className="WorksContainer" style={onAppearAnimations} ref={inViewRef}>
                
            </animated.div>
        </div>
)});

export default Works;