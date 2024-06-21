import React from "react";
import './artistCard.style.css'
import ArtistesCard from "./../../../ressources/ArtistesCard.jpeg";

export const ArtistCard = () => {
    return (

    <div>
       <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="relative bg-white h-10">
            <h1 className="text-xl text-center uppercase font-bold"> Programmation 2024 </h1>
            </div>
  
    <div className="mx-2 rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out hover:shadow-2xl">
      <div className="relative">
        <img className="w-full" src={ArtistesCard} alt="Profile" />
        <div className="absolute inset-0 transition-opacity duration-300 ease-in-out hover:bg-opacity-50 bg-gray-900 bg-opacity-10">
          <div className="flex h-full items-end">
            <div className="bg-gray-900 bg-opacity-50 w-full">
              <div className="artistes-card-title uppercase font-bold text-xl mb-2  px-4 pt-2">Barry Scott</div>
              <p className="artistes-card-name text-base px-4 pb-2">
                Rock
              </p>
              <div className="artistes-card-gradient h-2 "></div>
            </div>
          </div>
        </div>
      </div>
      
    
 
</div>
        
    </div>
    </div>
    
)
}
export default ArtistCard;