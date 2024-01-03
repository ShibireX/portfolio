import "animate.css";
import { useEffect, useRef, useState } from "react";
import 'react-multi-carousel/lib/styles.css';
import { projects } from '../constants/project_const';

export const Projects = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let requestId;
    const colors = ['#c100ff'];
    const spots = []; // Array to store current spots and their opacity values
    const maxOpacity = 0.6; // Maximum opacity value for spots
    const opacityChange = 0.001; // Amount by which opacity changes per frame
    const spotInterval = 2000; // Interval at which new spots are added (in ms)

    let then = Date.now();
    const fps = 60;
    const interval = 1000 / fps;

    function draw() {
      requestId = requestAnimationFrame(draw);

      const now = Date.now();
      const elapsed = now - then;

      if (elapsed > interval) {
        then = now - (elapsed % interval);

        // Draw blurred spots
        const fixedRadius = 100;
        if (Math.random() < elapsed / spotInterval) { // Add new spot
          const color = colors[Math.floor(Math.random() * colors.length)];
          spots.push({x: Math.random() * canvas.width, y: Math.random() * canvas.height, radius: fixedRadius, color, opacity: 0});
        }

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw current spots
        for (let i = spots.length - 1; i >= 0; i--) {
          const spot = spots[i];
          if (spot.opacity >= maxOpacity) {
            // Set isFadingOut to true to start the fading out process
            spot.isFadingOut = true;
          }
          if (spot.isFadingOut) {
            // Fade out
            spot.opacity -= opacityChange;
            if (spot.opacity <= 0) {
              // Remove the spot from the array when it disappears
              spots.splice(i, 1);
            }
          } else {
            // Fade in
            spot.opacity += opacityChange;
          }

          const gradient = ctx.createRadialGradient(
            spot.x,
            spot.y,
            0,
            spot.x,
            spot.y,
            spot.radius
          );
          gradient.addColorStop(0, spot.color);
          gradient.addColorStop(1, "rgba(0,0,0,0)");
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(spot.x, spot.y, spot.radius, 0, 2 * Math.PI);
          ctx.globalAlpha = spot.opacity ** 2;
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      }

    }

    draw();

    // Clean up
    return () => {
      cancelAnimationFrame(requestId);
    };

  }, []);

  // Initialize state to keep track of the selected programming language
  const [selectedLanguage, setSelectedLanguage] = useState('spotlight'); // 'spotlight' is the initial value

  // Define a function to handle language selection
  const handleLanguageFilter = (language) => {
    setSelectedLanguage(language.target.value);
  };

  // Filter the projects based on the selected language
  const filteredProjects = selectedLanguage === 'all' ? projects : projects.filter((project) => project.language.includes(selectedLanguage));

  return (
    <section className="project" id="project" style={{ position: "relative" }}>
      <h2>Projects</h2>
      <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}></canvas>
              {/* Filter dropdown */}
      <div className="filter-dropdown">
        <select id="languageSelect" value={selectedLanguage} onChange={handleLanguageFilter}>
          <option value="spotlight">Spotlight</option>
          <option value="iosdev">iOS Development</option>
          <option value="ml">Machine Learning</option>
          <option value="gamedev">Game Development</option>
          <option value="webdev">Web Development</option>
          <option value="electrical">Electronics</option>
          <option value="prototype">Prototyping</option>
          <option value="opensource">Open Source</option>
        </select>
      </div>
      <div className="proj-bx">
        {filteredProjects.map((project, index) => (
          <div key={index} className={`project-item ${project.language}`}>
            <h5>{project.title}</h5>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer"><p className="git">Learn More</p></a>
          </div>
        ))}
      </div>
    </section>
  );
};
