import { forwardRef } from "react";
import "./Spotlight.css"
import rentzPromo from "../../Asset/img/rentzPromo.png"


const Spotlight = forwardRef((props, ref) => (
    <div className="Spotlight" ref={ref}>
    <div className="SpotlightSectionHeader">
        <p>spotlight</p>
    </div>
    <div className="SpotlightContainer">
        <div className="SpotlightCarouselContainer">
            <img src={rentzPromo} id="backgroundImg"></img>
            <img src={rentzPromo}></img>
            <div className="NavButtons">
                <div className="NavButton"></div>
                <div className="NavButton"></div>
                <div className="NavButton"></div>
                <div className="NavButton"></div>
                <div className="NavButton"></div>
            </div>
        </div>

        <div className="SpotlightTextContainer">
            <h1>Name of spotlight</h1>
            <h2>lorum ipsum vitae lorum ipsum vitae lorum ipsum vitae lorum
                lorum lorum blab blal bblb bl lorum  
                lorum lorum lorum lorum ipsum vitae lorum 
                ipsum vitae lorum ipsum vitae lorum lorum lorum blab blal 
                bblb bl lorum  lorum lorum lorum lorum ipsum vitae lorum ipsum vitae 
                lorum ipsum vitae lorum lorum lorum blab blal bblb bl lorum  
                lorum lorum lorum</h2>
            <h3>Learn more</h3>
        </div>
    </div>
</div>
));

export default Spotlight;