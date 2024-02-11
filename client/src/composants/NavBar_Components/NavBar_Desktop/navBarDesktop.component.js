import React, { useState } from "react";
import { Link } from 'react-router-dom';
import HomeIcon from "../../Molecule/Icon/homePicture-component";
import CloseMenuIcon from "../../Molecule/Icon/closeNavBarArrow-component";
import './navBarDesktop.style.css';
import BurgerIcon from "../../Molecule/Icon/burgerIcon-component";

export const NavBarDesktop = () => {
    let [expand, setExpand] = useState(false);
    const expandOnCLick = () => { setExpand(!expand) }

    return (
        <>
            <div className={"navBarDesk-container fixed flex flex-col justify-center h-screen top-0 z-50 items-start" + (expand ? "" : " hide")} >
                <div className="navBarDesk flex flex-col justify-between gap-16 items-center py-4 px-2">
                    {!expand ?
                        <div className="expand-btn absolute top-[45%] left-[90%] flex justify-center h-16 w-8 rounded-xl">
                            <button onClick={expandOnCLick}>
                                +
                            </button>
                        </div> : ""}
                    <div className="flex flex-col justify-around text-center h-full w-full">
                        <Link to="/" className="flex justify-center"><HomeIcon id={idIcons[0]} /> </Link>
                        <Link to="/billeterie">Billeterie</Link>
                        <Link to="/programmation">Programmation</Link>
                        <Link to="/carte">Carte</Link>
                        <Link to="/infos-pratiques">Infos pratiques</Link>
                        <Link to="/partenaires">Partenaires</Link>
                    </div>
                    <button onClick={expandOnCLick} className="w-full flex justify-center animation">
                        <CloseMenuIcon id={"navBarDesktop_closeMenu"} />
                    </button>
                </div>
            </div>
        </>
    )
}

let idIcons = [
    "navBarDesktop_icon0",
    "navBarDesktop_icon1",
    "navBarDesktop_icon2",
    "navBarDesktop_icon3",
    "navBarDesktop_icon4"
];
