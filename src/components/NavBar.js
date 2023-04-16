import { Navbar, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/git_icon.png';
import navIcon3 from '../assets/img/spotify_icon.svg';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  return (
    <Router>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/andreas-garcia-9516a5155/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a id="github" href="https://github.com/ShibireX" target="_blank"><img src={navIcon2} alt="" /></a>
                <a id="spotify" href="https://open.spotify.com/artist/7vzyj0u6QMnKkN60TEaLqx?si=lxzpD_mfQBaaj2zhJlPyfQ" target="_blank"><img src={navIcon3} alt="" /></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
