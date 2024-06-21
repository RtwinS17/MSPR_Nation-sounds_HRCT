import React from "react";
import "./partenairesComponent.style.css";
import partenairesListe from "./partenairesListe";

const PartenairesComponent = () => {
    return (
            <section className= " h-full grid grid-cols-1 gap-4 p-2 overflow-y-auto [&>*]:h-full [&>*]:flex [&>*]:flex-col [&>*]:justify-between [&>*]:gap-4">
        <div className="text-left">
            <h1 className="mb-6 font-extrabold text-4xl">Partenaires</h1>
            <div className="grid grid-cols-1 gap-4">
            {partenairesListe.map((partenaire) => (
                <Partenaire
                key={partenaire.id}
                id={partenaire.id}
                nom={partenaire.nom}
                logo={partenaire.logo}
                desc={partenaire.desc}
                lien={partenaire.lien}
                />
            ))}
            </div>
        </div>
        </section>
    );
    }

    const Partenaire = ({ id, nom, logo, lien, desc }) => {
        return (
            <a href={lien} target="_blank" rel="noreferrer" className="">
                <div className="border bg-white text-gray-800 flex flex-col md:flex-row items-center justify-center md:justify-start rounded-xl p-4 hover:shadow-inner hover:shadow-slate-800 w-full">
                
                    <img src={logo} alt="logo" className="w-32 h-32 object-scale-down" />
                
                <div className="flex flex-col items-center w-full md:w-auto text-center md:text-left md:items-start md:px-4">
                    <p className="font-bold text-xl">{nom}</p>
                    <p className="hidden md:block">{desc}</p>
                </div>
                
            </div>
            </a>
        );
    }
    


export default PartenairesComponent;

