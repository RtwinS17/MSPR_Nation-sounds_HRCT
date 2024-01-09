import React from "react";

import './contentHome.style.css';

export const HomeContent = () => {

    return (
        <>
            <div className="h-[80%] flex flex-col">
                <article className="basis-1/6 hover:basis-4/6">
                    <span> Nous découvrir .... </span>
                </article>
                <article className="basis-1/6 hover:basis-4/6">
                    <span> Programmation .... </span>
                </article>
                <article className="basis-1/6 hover:basis-4/6">
                    <span> Billetterie  .... </span>
                </article>
            </div>
            <div className="h-[20%] flex justify-center">
                <span> Carte de l'événement </span>
            </div>

        </>
    )
}