import { forwardRef } from "react";
import "./Spotlight.css"

const Spotlight = forwardRef((props, ref) => (
    <div className="Spotlight" ref={ref}>
        <p>hej</p>
    </div>
));

export default Spotlight;