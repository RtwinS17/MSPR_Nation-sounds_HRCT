import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './navBarDesktop.style.css';

import HomeIcon from './../../../Molecule/Icon/homePicture-component';
import CloseMenuIcon from './../../../Molecule/Icon/closeNavBarArrow-component';

export const NavBarDesktop = () => {
    let [expand, setExpand] = useState(false);
    const expandOnCLick = () => { setExpand(!expand) }

    return (
        <>
            <div className={"navBarDesk-container fixed flex flex-col justify-center h-screen top-0 z-50 items-start" + (expand ? "" : " hide")} >
                <div className="navBarDesk flex flex-col justify-between gap-16 items-center py-4 px-2">
                    {!expand ?
                        
                            <button className="expand-btn absolute top-[45%] left-[90%] h-16 w-8 rounded-xl" onClick={expandOnCLick}>
                                +
                            </button>
                         : ""}
                    <div className="flex flex-col justify-around text-center h-full w-full">
                        <Link to="/" id={idIcons[0]} className="flex justify-center"> <HomeIcon/> </Link>
                        <Link to="/billeterie" id={idIcons[1]}>Billeterie</Link>
                        <Link to="/discover/artists" id={idIcons[2]}>Programmation</Link>
                        <Link to="/carte" id={idIcons[3]}>Carte</Link>
                        <Link to="/infos-pratiques" id={idIcons[4]}>Infos pratiques</Link>
                        <Link to="/partenaires" id={idIcons[5]}>Partenaires</Link>
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
    "navBarDesktop_icon4",
    "navBarDesktop_icon5",
    "navBarDesktop_icon6"
];
