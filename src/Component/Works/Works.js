import { forwardRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { projects } from "../../Constant/project_const"

const openWorksRef = (link) => {
    window.open(link);
};

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
        <div ref={ref}>
            {/* Section Header */}
            <div className="w-full sm:w-72 md:w-80 lg:w-96 h-16 md:h-20 bg-gradient-to-r from-accent-blue to-bg-dark flex items-center">
                <p className="ml-4 md:ml-6 text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#030172] to-bg-dark gradient-text">
                    works
                </p>
            </div>
            
            {/* Content */}
            <animated.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-8 lg:px-12 py-8 md:py-12"
                style={onAppearAnimations} 
                ref={inViewRef}
            >
                {projects.map((project, index) => (
                    <div key={index} className="py-4">
                        {/* Project Title */}
                        <h2 className="text-xl sm:text-2xl md:text-[1.95vw] font-medium mb-2">
                            {project.title}
                        </h2>
                        
                        {/* Project Type */}
                        <div className="flex items-center gap-2 mb-4">
                            <h3 className="text-lg sm:text-xl md:text-[1.75vw] font-medium opacity-50 m-0">
                                {project.language}
                            </h3>
                            <img 
                                src={project.srcImage} 
                                alt={project.language}
                                className="w-5 h-5 md:w-6 md:h-6"
                            />
                        </div>
                        
                        {/* Project Description */}
                        <h4 className="text-sm sm:text-base md:text-[1.19vw] font-normal mb-3 leading-relaxed">
                            {project.description}
                        </h4>
                        
                        {/* Learn More Link */}
                        <h5 
                            onClick={() => openWorksRef(project.link)}
                            className="text-sm sm:text-base md:text-[1.19vw] font-medium underline cursor-pointer hover:brightness-125 transition-all duration-300 inline-block"
                        >
                            Learn more
                        </h5>
                    </div>
                ))}
            </animated.div>
        </div>
)});

export default Works;
