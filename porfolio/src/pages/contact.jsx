import React from "react";
import Callme from "../components/callme";

function Contact() {
  return (
    <div className="bg-purple-100 min-h-screen relative pt-20 px-10">
      <h1 className="text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-16">
        Contact
      </h1>

    <div className="flex flex-col lg:flex-row justify-center items-start gap-10">
       
       <div className="bg-white p-8 rounded-lg border-4 border-[#B68CD1] shadow-md max-w-md w-full">
        <p className="text-[#744D8C] font-medium mb-1" htmlFor="phraseintro">
          Vous avez une idée de projet et vous souhaitez le concrétiser avec moi ? <br/>
          Vous voulez me rencontrer pour en discuter ? Travaillons ensemble ! 
          </p>
           <img
              src="/Buketcut.png"
              alt="Avatar"
              className="w-full h-auto mb-4 rounded-full"
            />
          <p className="text-[#744D8C] font-medium mb-1" htmlFor="contact">
           Contactez-moi : <br/> <br/>
          <i className='bx  bx-phone'  style={{ color: "#5a46e0", width: "36px", height: "36px" }}></i>
          07.81.69.60.87 <br/>
          <i class='bx  bx-at'  style={{ color: "#5a46e0", width: "36px", height: "36px" }}></i> 
          buket.bagci@epitech.eu <br/>
          </p>
     

          <div className="flex justify-center gap-6 mt-4">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/buket-bagci/" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.png" alt="LinkedIn" className="w-12 h-12 hover:scale-110 transition-transform" />
            </a>

            {/* GitHub */}
            <a href="https://github.com/Buketbb67" target="_blank" rel="noopener noreferrer">
              <img src="/github.png" alt="GitHub" className="w-12 h-12 hover:scale-110 transition-transform" />
            </a>
          </div>
          </div>
    </div>
    </div>
  );
}

export default Contact;
