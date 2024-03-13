import React from "react";
import { DiscoverCards } from "../../Small/DiscoverCard/DiscoverCard.component";
import InteractiveMap from "../../../WordPress/InteractiveMap";

import './contentHome.style.css';

const textDiscover = {
    Discover : "Découvrez Nations Sounds, le festival de musique incontournable de Paris ! Plongez dans une expérience musicale unique au cœur de la Ville Lumière",

    Programmation: "Découvrez la diversité musicale de Nations Sounds ! Des artistes de tous les horizons se réunissent pour vous offrir une expérience inoubliable. Consultez notre programmation maintenant ! ",
    
    Billetterie: "La billetterie pour Nations Sounds est ouverte jusqu'au 30/07/2026 ! Ne manquez pas l'opportunité de vivre une expérience musicale exceptionnelle au cœur de Paris."
}

export const HomeContent = () => {

    return (
        <>
            <div className="h-[90%] flex flex-col gap-3 p-3">
                <article className="basis-2/6">
                    <DiscoverCards title=" DÉCOUVRIR LE FESTIVAL" text={textDiscover.Discover} linkTo="/infos-pratiques" imageSrc="./../../../../ressources/discover"/>
                </article>
                <article className="basis-2/6">
                    <DiscoverCards title="PROGRAMMATION" text={textDiscover.Programmation} linkText="Découvrir les artistes" linkTo="/programmation" imageSrc="./../../../../ressources/programmation"/>
                </article>
                <article className="basis-2/6">
                    <DiscoverCards title="BILLETTERIE" text={textDiscover.Billetterie} linkText="Acheter un billet" linkTo="/billeterie" imageSrc="./../../../../ressources/billetterie"/>
                </article>
            </div>
            <div className="hidden sm:flex h-[10%] w-full justify-center">
            <article className="basis-2/6">
                    <InteractiveMap />
                </article>
            </div>
            <div className="hidden sm:flex h-[10%] w-full justify-center">
                <button className="btn-accent p-2 font-bold">
                    <span>Carte de l'événement</span>
                </button>
            </div>

        </>
    )
}