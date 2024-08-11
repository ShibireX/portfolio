import "./Header.css"

function Header({ scrollToAboutMe, scrollToSpotlight }) {
    return (
      <div className="Header">
        <div className="HeaderLinks">
            <p onClick={scrollToAboutMe}>about me</p>
            <p onClick={scrollToSpotlight}>spotlight</p>
            <p>works</p>
            <p>contact</p>
        </div>
      </div>
    );
  }
  
  export default Header;