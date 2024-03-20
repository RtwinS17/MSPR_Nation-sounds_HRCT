import React, { useEffect } from "react";
import { DiscoverCards } from "./DiscoverCard.component";
import DiscoverImage from '../../ressources/discover.jpg';
import ProgrammationImage from '../../ressources/ArtistesCard.jpeg';
import BilletterieImage from '../../ressources/billetterie.jpg';

import { useDispatch, useSelector } from "react-redux";
import { getAlertes } from "../../appStore/slices/alertes.slice";

const textDiscover = {
    Question : "Découvrez Nations Sounds, le festival de musique incontournable de Paris ! Plongez dans une expérience musicale unique au cœur de la Ville Lumière. Pour toutes questions pratiques, c'est par ici !",

    Programmation: "Découvrez la diversité musicale de Nations Sounds ! Des artistes de tous les horizons se réunissent pour vous offrir une expérience inoubliable. Consultez notre programmation maintenant ! ",
    
    Billetterie: "La billetterie pour Nations Sounds est ouverte jusqu'au 30/07/2026 ! Ne manquez pas l'opportunité de vivre une expérience musicale exceptionnelle au cœur de Paris."
}

export const HomeContent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAlertes());
    }, [dispatch]);

    const alertes = useSelector((state) => state.alertes.data);
    console.log(alertes);

    return (
        <>
            <div className="h-full flex flex-col gap-3 overflow-y-auto">
                <article >
                    <DiscoverCards title="AIDES ET QUESTIONS" text={textDiscover.Question} linkTo="/infos-pratiques" imageSrc={DiscoverImage}/>
                </article>
                <article>
                    <DiscoverCards title="PROGRAMMATION" text={textDiscover.Programmation} linkText="Découvrir notre festival" linkTo="/decouverte" imageSrc={ProgrammationImage}/>
                </article>
                <article>
                    <DiscoverCards title="BILLETTERIE" text={textDiscover.Billetterie} linkText="Acheter un billet" linkTo="/billeterie" imageSrc={BilletterieImage}/>
                </article>
            </div>
        </>
    );
};
