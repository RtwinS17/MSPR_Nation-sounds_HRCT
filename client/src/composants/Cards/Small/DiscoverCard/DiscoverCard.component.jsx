import React from "react";

import './DiscoverCard.style.css';

export const DiscoverCards = ({ title = "Titre à ajouter", text = "texte à ajouter", link = "fournir un chemin", imageSrc = "" }) => {
    return (
        <>
            <div className="flex flex-col h-full cardDiscover-container">

                <article className="flex flex-col sm:flex-row h-full ">
                    <article className="basis-2/6 sm:basis-4/6 flex flex-col justify-center sm:justify-between sm:pl-2">
                        <h2 className="block text-center my-1"> {title} </h2>
                        <span className="hidden sm:block sm:h-full"> {text} </span>
                    </article>

                    <div className="basis-2/6">
                        <img src={imageSrc} alt="Description" />
                    </div>
                </article>

                <button className="flex justify-center pt-2"> {link} </button>
            </div>
        </>
    )
} 