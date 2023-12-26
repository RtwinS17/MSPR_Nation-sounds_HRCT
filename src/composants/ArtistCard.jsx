import React from "react";
import { Link } from "react-router-dom";

function ArtistCard({ }) {  
  return (
    <div className="grid grid-cols-1 gap-8 m-10 md:m-8 md:grid-cols-4">
      <Link to="/ArtisteDetails">
        <div className="rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out hover:shadow-2xl">
          <div className="relative">
            <img className="w-full" src="../ArtistesCard.jpeg" alt="Profile" />
            <div className="absolute inset-0 transition-opacity duration-300 ease-in-out hover:bg-opacity-50 bg-gray-900 bg-opacity-10">
              <div className="flex h-full items-end">
                <div className="bg-gray-900 bg-opacity-50 w-full">
                  <div className="uppercase font-bold text-xl mb-2 text-Orange px-4 pt-2">Barry Scott</div>
                  <p className="text-base text-white px-4 pb-2">
                    Rock
                  </p>
                  <div className="h-2 bg-gradient-to-r from-Bleu via-Jaune to-Orange"></div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </Link>
    </div>
  );
};
  
export default ArtistCard;