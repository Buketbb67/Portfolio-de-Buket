import React, { useEffect } from "react";
import { defineElement } from "lord-icon-element";
import lottie from "lottie-web";

function Callme () {

    useEffect(() => {
    defineElement(lottie); // Initialise lord-icon avec lottie
  }, []);

return (
    
<lord-icon
    src="https://cdn.lordicon.com/vcdutftw.json"
    trigger="loop"
    delay="1500"
    stroke="light"
    state="in-reveal"
    colors="primary:#121331,secondary:#c69cf4"
    style={{ width: "250px", height: "250px" }}>
</lord-icon>
); 
}
export default Callme; 
