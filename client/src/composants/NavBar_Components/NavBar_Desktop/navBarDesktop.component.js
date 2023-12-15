import React from "react";
import HomeIcon from "../../Molecule/Icon/homePicture-component";
import CloseMenuIcon from "../../Molecule/Icon/closeNavBarArrow-component";
import './navBarDesktop.style.css';

export const NavBarDesktop = () => {
    return (
        <>
         <div className='navBarDesk fixed flex flex-col justify-between w-[70px] h-screen top-0 left-0 z-50 items-center my-2 py-2'>
            <div className="expandMenu-nav my-2">
            <HomeIcon id={idIcons[0]}/>
            <HomeIcon id={idIcons[1]}/>
            <HomeIcon id={idIcons[2]}/>
            <HomeIcon id={idIcons[3]}/>
            <HomeIcon id={idIcons[4]}/>
            </div>
            <CloseMenuIcon id={"navBarDesktop_closeMenu"}/>
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
