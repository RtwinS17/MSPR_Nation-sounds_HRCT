import React from "react";
import { Link } from "react-router-dom";
import RoundedButton from "./RoundedButton";

function ArtistDetail({ }) {
 return (
    <div className="m-10 md:mx-52 md:my-24 grid grid-row md:grid-cols-2 gap-6 md:gap-10 ">
        <div className="mb-4 col-span-2 md:col-span-1">
            <img src="../ArtistesCard.jpeg" alt="Photo artisite" className="rounded-lg object-cover"/>
        </div>
        <div className="col-span-2 md:col-span-1">
            <h1 className="flex text-xl md:text-3xl text-Jaune uppercase font-bold mb-4 "> Nom de l'artiste</h1>
            <h2 className="flex mb-2 text-lg md:text-2xl font-bold">Date de passage</h2>
            <h2 className="flex mb-2 text-base md:text-xl">Scène</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam beatae assumenda ex? Suscipit veritatis fuga vero natus ipsum quae ea et doloribus eum eaque necessitatibus, reprehenderit sint optio laborum dolorem.
            Ex, qui suscipit? Voluptatum ipsum illo aut minima nihil! Sint tempore quis, et magnam, quia at recusandae unde iste, neque magni laboriosam ad accusamus doloremque qui in dignissimos voluptatum nihil.</p>
        </div>
        <RoundedButton href="/LineUp">Retour à la liste</RoundedButton>
    </div>
   

    );
    }

export default ArtistDetail;


