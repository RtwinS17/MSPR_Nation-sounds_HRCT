import React from "react";
import homeLogo from "./../../../ressources/Nation-sounds_1.png";
import "./icons.style.css";

function HomeLogo() {
  return (
    <div className="">
      <img src={homeLogo} alt="Logo Nation Sounds" className="homeLogo rounded-2xl mx-auto" />
    </div>
  );
}

export default HomeLogo;