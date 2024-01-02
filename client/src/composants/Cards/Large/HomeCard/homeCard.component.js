import React from "react";
import "./homeCard.style.css";
import "./../../cards.style.css";




export const MainContent = ({children=""}) => {
    return (
        <main className="w-screen h-screen flex justify-center align-middle">
            <div className="test">
            {children}
            </div>
        </main>

    )
}
