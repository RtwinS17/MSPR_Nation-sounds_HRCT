import React from "react";

import './DiscoverCard.style.css';
import { Link } from "react-router-dom";

export const DiscoverCards = ({ title = "Titre à ajouter", linkText = "En savoir plus", imageSrc = "", linkTo = "" }) => {
    return (

        <div className="cardDiscover-container grow h-full flex flex-col sm:flex-row rounded-lg overflow-hidden">
            <div className="flex flex-col shrink justify-around h-full sm:w-[50%] ">
                <h3 className="font-bold text-xl text-center cardDiscoverTitle p-2"> {title} </h3>
                <div className="flex justify-center">
                    <Link className="text-center p-3 btn-primary" to={linkTo}>{linkText}</Link>
                </div>

            </div>
            <div className="h-full sm:max-w-[50%] hidden sm:block"><img src={imageSrc} alt="festival photography" /> </div>
        </div>

    )
} 