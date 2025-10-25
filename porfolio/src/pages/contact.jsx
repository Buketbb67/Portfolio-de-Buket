import React from "react";

function Contact() {
  return (
    <div className="bg-purple-100 min-h-screen relative pt-16 sm:pt-20 px-4 sm:px-8 md:px-10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-10 sm:mb-16">
        Contact
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 sm:gap-8 lg:gap-10 w-full">

        <div className="bg-white p-6 sm:p-8 rounded-lg border-4 border-[#B68CD1] shadow-md w-full max-w-md flex flex-col items-center">
          
          <p className="text-[#744D8C] font-medium mb-4 text-center">
            Vous avez une idée de projet et vous souhaitez le concrétiser avec moi ? <br />
            Vous voulez me rencontrer pour en discuter ? Travaillons ensemble !
          </p>

          <img
            src="/Buketcut.png"
            alt="Avatar"
            className="w-32 h-32 sm:w-40 sm:h-40 mb-4 object-cover"
          />

          <p className="text-[#744D8C] font-medium mb-4 text-center">
            Contactez-moi : <br /> <br />
            <i className='bx bx-phone' style={{ color: "#5a46e0", width: "24px", height: "24px" }}></i> 07.81.69.60.87 <br />
            <i className='bx bx-at' style={{ color: "#5a46e0", width: "24px", height: "24px" }}></i> buket.bagci@epitech.eu
          </p>

          <div className="flex justify-center gap-6 mt-4">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/buket-bagci/" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.png" alt="LinkedIn" className="w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 transition-transform" />
            </a>

            {/* GitHub */}
            <a href="https://github.com/Buketbb67" target="_blank" rel="noopener noreferrer">
              <img src="/github.png" alt="GitHub" className="w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;

