import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import { useEffect, useRef } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Projects = () => {
  const canvasRef = useRef(null);
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

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

  return (
    <section className="project" id="project" style={{ position: "relative" }}>
      <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}></canvas>
              <div className="proj-bx">
                <h2>Projects</h2>
                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme project-slider">
                            <div className="item">
                                <h5>Facial Expression Recognition</h5>
                                <p>A live machine learning model that can make real-time predictions on expressions through your webcam. The project was realized 
                                  in the beginning of 2023.
                                </p>
                                <a href="https://github.com/ShibireX/facial-expression-recognition" target="_blank"><p className="git">Github Repository</p></a>
                            </div>
                            <div className="item">
                                <h5>Haptic Music</h5>
                                <p>This project was conducted as part of a HCI project aiming to address accessibility issues at the Tekniska Museum of Stockholm. The
                                  prototype explores how musical sound frequencies can be mapped to oscillating vibration motors, and whether or not these are perceptable
                                  to hearing impaired individuals. The prototype utilizes core haptics within the taptic engine of the Iphone.  
                                </p>
                                <a href="https://github.com/ShibireX/haptic-music" target="_blank"><p className="git">Github Repository</p></a>
                            </div>
                            <div className="item">
                                <h5>Molecule Syntax</h5>
                                <p>A computer science project that provides a structure for checking if a molecule is on the correct format, with the help of a syntax tree.
                                  The structure also enables drawing of the input molecules. The project was realized during the fall of 2022.
                                </p>
                                <a href="https://github.com/ShibireX/molecule-syntax" target="_blank"><p className="git">Github Repository</p></a>
                            </div>
                            <div className="item">
                                <h5>ParkSafe</h5>
                                <p>A car parking management system extended with a GUI as part of an individual project in a python programming course.
                                  The project was realized in the spring of 2022.
                                </p>
                                <a href="https://github.com/ShibireX/parksafe-gui" target="_blank"><p className="git">Github Repository</p></a>
                            </div>
                            <div className="item">
                                <h5>Bulletin Board</h5>
                                <p>A bulletin board app prototype that was created as part of a HCI project, aiming to alleviate communication bottlenecks at 
                                  a local preschool. The project was realized in the spring of 2022.
                                </p>
                                <a href="https://www.figma.com/proto/7WJRo3Y6vEtJ8zxQd6g3Rd/HCI-Project?node-id=604-1975&starting-point-node-id=604%3A1975" target="_blank"><p className="git">Figma Prototype</p></a>
                            </div>
                </Carousel>
            </div>
    </section>
  )
}
