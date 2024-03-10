import React from "react";
import { DiscoverCards } from "../../Small/DiscoverCard/DiscoverCard.component";
import InteractiveMap from "../../../WordPress/InteractiveMap";

import './contentHome.style.css';

export const HomeContent = () => {

    return (
        <>
            <div className="h-[90%] flex flex-col gap-3 homeContainer p-3">
                <article className="basis-2/6">
                    <DiscoverCards title=" DÉCOUVRIR LE FESTIVAL"/>
                </article>
                <article className="basis-2/6">
                    <DiscoverCards title="PROGRAMMATION" linkText="Découvrir les artistes"/>
                </article>
                <article className="basis-2/6">
                    <DiscoverCards title="BILLETTERIE" linkText="Acheter un billet"/>
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