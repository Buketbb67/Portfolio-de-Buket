import React, { useEffect } from "react";
import { defineElement } from "lord-icon-element";
import lottie from "lottie-web";

function LordiconMouse() {
  useEffect(() => {
    defineElement(lottie); // Initialise lord-icon avec lottie
  }, []);

  return (
    <lord-icon
      src="https://cdn.lordicon.com/cqaznhoh.json"
      trigger="loop"
      colors="primary:#121331,secondary:#ebe6ef,tertiary:#c69cf4"
      style={{ width: "250px", height: "250px" }}
    ></lord-icon>
  );
}

export default LordiconMouse;
