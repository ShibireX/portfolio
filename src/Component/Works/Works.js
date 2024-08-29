import { forwardRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import "./Works.css"
import { projects } from "../../Constant/project_const"

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
                {projects.map((project, index) => (
                    <div className="WorksProject" key={index}>
                        <h2>{project.title}</h2>
                        <div className="WorksProjectType">
                            <h3>{project.language}</h3>
                            <img src={project.srcImage}></img>
                        </div>
                        <h4>{project.description}</h4>
                        <h5>Learn more</h5>
                    </div>
                ))}
            </animated.div>
        </div>
)});

export default Works;