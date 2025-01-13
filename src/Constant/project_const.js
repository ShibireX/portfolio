import swiftLogo from "../Asset/img/swiftLogo.png"
import pythonLogo from "../Asset/img/pythonLogo.png"
import csharpLogo from "../Asset/img/csharpLogo.png"
import javascriptLogo from "../Asset/img/javascriptLogo.png"
import cplusLogo from "../Asset/img/cplusLogo.png"
import typescriptLogo from "../Asset/img/typescriptLogo.png"


export const projects = [
  {
    title: 'Gaff',
    description: 'Gaff is an app that I co-founded and built, aiming to change the psychology of calling. Working on this startup has given me invaluable experience within many different expertises',
    language: 'iOS Development',
    srcImage: swiftLogo,
    link: 'https://apps.apple.com/se/app/gaff-talk-with-friends-daily/id1644599803',
  },
  {
    title: 'Facial Expression Recognition',
    description: 'A live machine learning model that predicts facial expressions in real-time through the webcam, developed in early 2023 as part of a university project at KTH',
    language: 'Machine Learning',
    srcImage: pythonLogo,
    link: 'https://github.com/ShibireX/facial-expression-recognition',
  },
  {
    title: 'Pokémon TCG Scanner',
    description: 'A free, open-source TCG scanner designed to help enthusiasts efficiently manage their collections and monitor card values, with the help of OCR technology',
    language: 'iOS Development',
    srcImage: swiftLogo,
    link: 'https://github.com/ShibireX/pokemon-tcg-scanner',
  },
  {
    title: 'MusiQuiz',
    description: 'An engaging iOS music quiz app powered by the Spotify Web API, where users test their musical knowledge across genres and artists. Developed as a passion project in summer 2023',
    language: 'iOS Development',
    srcImage: swiftLogo,
    link: 'https://www.youtube.com/watch?v=-LdOlLU9EDc',
  },
  {
    title: 'Spotimy',
    description: 'An iOS app utilizing the Spotify Web API to provide user insights like top artists, tracks, genres, and recommendations, with customizable data ranges. Created in summer 2023',
    language: 'iOS Development',
    srcImage: swiftLogo,
    link: 'https://github.com/ShibireX/spotimy',
  },
  {
    title: 'Turf Wars',
    description: 'A video game created as part of a game design project at KTH during spring 2023, featuring all self-composed assets',
    language: 'Game Development',
    srcImage: csharpLogo,
    link: 'https://mowdacious-farmers.mwagner.se/',
  },
  {
    title: 'Artist Predictor',
    description: 'A web app that uses the Spotify API to "guess" which artist a user is thinking about based on prompts',
    language: 'Web Development',
    srcImage: javascriptLogo,
    link: 'https://github.com/ShibireX/artist-predictor',
  },
  {
    title: 'Tide Water Simulation',
    description: 'A CGI project simulating tide water with day and night cycles, using assets modeled in Blender and logic constructed in Unity as part of a CGI course at KTH during spring 2023',
    language: 'Game Development',
    srcImage: csharpLogo,
    link: 'https://github.com/ShibireX/tide-water-simulation',
  },
  {
    title: 'Memory Game',
    description: 'An Arduino and Processing project creating an interactive game installation with sensors and actuators, programmed between server and client nodes. Built as part of a sensor programming course at KTH during spring 2023',
    language: 'Electronics',
    srcImage: cplusLogo,
    link: 'https://github.com/ShibireX/sensor-programming',
  },
  {
    title: 'Chaos Stream Proxy',
    description: 'A proxy used to simulate video player corruptions, allowing streaming companies to test player behavior under different conditions. Contributed as part of a student team at Eyevinn Technology',
    language: 'Backend Development',
    srcImage: typescriptLogo,
    link: 'https://github.com/Eyevinn/chaos-stream-proxy',
  },
  {
    title: 'Sheltered',
    description: 'A game demo showcasing Unreal Engine 5, featuring pipeline technology like NVIDIA Omniverse AUDIO2FACE and Epic Metahuman, with all animations handmade',
    language: 'Game Development',
    srcImage: csharpLogo,
    link: 'https://www.youtube.com/watch?v=N8vYpSQ1zkE',
  },
  {
    title: 'CPS Orchestrator',
    description: 'A microservice designed to orchestrate Eyevinn Chaos Stream Proxy instances within a Kubernetes cluster, enhancing the scalability of testing environments',
    language: 'Backend Development',
    srcImage: typescriptLogo,
    link: 'https://api-chaos-stream.stage.osaas.io/docs/static/index.html',
  },
  {
    title: 'Global History',
    description: 'A dynamic website built with Spline and React for interactive learning of historic events worldwide. Designed for fun and educational engagement. Built as part of a web development course at KTH during fall 2024',
    language: 'Web Development',
    srcImage: javascriptLogo,
    link: 'https://matdrox.github.io/global-history/',
  },
];
