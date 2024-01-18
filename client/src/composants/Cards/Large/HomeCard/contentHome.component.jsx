import React from "react";
import { DiscoverCards } from "../../Small/DiscoverCard/DiscoverCard.component";

import './contentHome.style.css';

export const HomeContent = () => {

    return (
        <>
            <div className="h-[80%] flex flex-col gap-3 homeContainer p-3">
                <article className="basis-2/6 hover:basis-4/6">
                    <DiscoverCards/>
                </article>
                <article className="basis-2/6 hover:basis-4/6">
                <DiscoverCards/>
                </article>
                <article className="basis-2/6 hover:basis-4/6">
                <DiscoverCards/>
                </article>
            </div>
            <div className="h-[20%] flex justify-center">
                <span> Carte de l'événement </span>
            </div>

        </>
    )
}