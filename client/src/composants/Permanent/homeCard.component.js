import React from "react";
import "./homeCard.style.css";

export const MainContent = ({children=""}) => {
    return (
        <main className="w-screen h-screen flex justify-center align-middle homeContainer">
            <div className="mainContent-container p-3 rounded-xl flex flex-col justify-center">
            {children}
            </div>
        </main>

    )
}
