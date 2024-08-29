import "./Header.css"

function Header({ scrollToAboutMe, scrollToSpotlight, scrollToWorks, scrollToContact }) {
    return (
      <div className="Header">
        <div className="HeaderLinks">
            <p onClick={scrollToAboutMe}>about me</p>
            <p onClick={scrollToSpotlight}>spotlight</p>
            <p onClick={scrollToWorks}>works</p>
            <p onClick={scrollToContact}>contact</p>
        </div>
      </div>
    );
  }
  
  export default Header;