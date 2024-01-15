import React from "react";

import './DiscoverCard.style.css';

export const DiscoverCards = ({ title = "Titre à ajouter", text = "texte à ajouter", linkText = "En savoir plus", imageSrc = "" }) => {
    return (
        <>
            <div className="flex flex-col h-full p-2 rounded-xl cardDiscover-container">

                <article className="flex flex-col sm:flex-row h-full">
                    <article className=" sm:basis-4/6 flex flex-col justify-center sm:justify-between sm:pl-2">
                        <h2 className="block text-center my-1"> {title} </h2>
                        <span className="hidden sm:block sm:h-full text-sm"> {text} </span>
                        <div className="flex justify-center sm:justify-end pt-2 mt-4 sm:mt-0">
                            <button className=" px-4 py-2 btn-primary mr-3 text-xs"> {linkText} </button>
                        </div>
                    </article>

                    <div className=" hidden sm:block">
                        <img src={imageSrc} alt="Description" />
                    </div>
                </article>
            </div>
        </>
    )
} 