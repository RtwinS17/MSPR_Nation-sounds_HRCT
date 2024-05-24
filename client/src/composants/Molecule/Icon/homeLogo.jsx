import React from "react";
import homeLogo from "./../../../ressources/Nation-sounds_1.png";
import "./icons.style.css";

function HomeLogo() {
  return (
    <div className="absolute flex w-full justify-center top-5 z-10">
      <div className="">
      
      <img src={homeLogo} alt="Logo Nation Sounds" className="homeLogo rounded-2xl mx-auto" />
      
      </div>
    </div>
  );
}

export default HomeLogo;