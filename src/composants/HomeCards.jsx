import React from "react";
import { Link } from "react-router-dom";


function HomeCards() {
  return (
    <div className="grid grid-cols-1 gap-8 m-10 md:m-8 md:grid-cols-4">
    
    <div className="flex flex-col rounded-l-full shadow hover:shadow-md overflow-hidden">
      <Link to="/LineUp" className="flex flex-row" >
      <img src="../ArtistesCard.jpeg" alt="image du festival" className=" w-3/4 object-cover"/>
      <div className="flex flex-col ">
      <div className="flex justify-center uppercase text-Bleufonce font-bold p-3 border-b ">LineUp</div>
      <p className="flex mt-2 p-3">Découvrez les artistes présents</p>
    </div></Link>
    </div>

    <div className="flex flex-col rounded-l-full shadow hover:shadow-md overflow-hidden">
      <Link to="/festival" className="flex flex-row" >
      <img src="../FestivalCard.jpeg" alt="image du festival" className=" w-3/4 object-cover"/>
      <div className="flex flex-col ">
      <div className="flex justify-center uppercase bg-Bleufonce text-white font-bold p-3">Le festival</div>
      <p className="flex mt-2 p-3">Découvrez l'histoire du festival</p>
    </div></Link>
    </div>
    
    <div className="flex flex-col rounded-2xl shadow hover:shadow-md overflow-hidden">
    <Link to="/billeterie" className="flex flex-row" >
    <img src="../FestivalCard.jpeg" alt="image du festival" className=" w-3/4 object-cover"/>
      <div className="flex flex-col ">
      <div className="flex justify-center bg-Bleufonce uppercase text-Jaune font-bold p-3">billeterie</div>
      <p className="flex mt-2 p-3">Achetez vos billets en ligne ici </p>
    </div>
    </Link>
    </div>

    <div className="rounded-2xl shadow hover:shadow-md overflow-hidden">
    <Link to="/billeterie" className="flex flex-col" >
    <img src="../FestivalCard.jpeg" alt="image du festival" className=" w-full h-32 object-cover"/>
      <div className="flex flex-row">
      <div className="flex justify-center bg-Bleufonce uppercase text-Jaune font-bold p-3">billeterie</div>
      <p className="flex mt-2 p-3">Achetez vos billets en ligne ici </p>
    </div>
    </Link>
    </div>
    
  </div>
  );
    }
export default HomeCards;