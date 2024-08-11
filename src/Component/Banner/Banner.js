import "./Banner.css"
import rgbTrinity from "../../Asset/img/rgbTrinity.png"

function Banner() {
    return (
      <div className="Banner">
        
        <div className="BannerTextContainer">
        <h1>Hi! I am Andreas.</h1>
        <h2>
        Welcome to my portfolio! I am glad you found your way here. I am currently doing my masters 
        in Interactive Media Technology at KTH in Stockholm, whilst being a founding iOS engineer 
        at a startup company. I have a passion for visual aesthetics, music production and code, 
        and many other different areas of interest. If you want to get to know me better, 
        feel free to scroll down or press the shortcuts up above!
        </h2>
        </div>

        <div className="BannerImageContainer">
            <img src={rgbTrinity}></img>
        </div>

      </div>
    );
  }
  
  export default Banner;