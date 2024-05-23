import React from "react";
import homeLogo from "./../../../ressources/Nation-sounds_1.png";
import "./icons.style.css";

function HomeLogo() {
  return (
    <div className="fixed flex w-full h-28 justify-center z-1 top-10">
      <div className="">
      
      <img src={homeLogo} alt="Logo Nation Sounds" className="homeLogo rounded-2xl mx-auto" />
      
      </div>
    </div>
  );
}

export default HomeLogo;