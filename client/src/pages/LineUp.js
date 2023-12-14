import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Breadcrumbs from "../composants/Breadcrumbs";
import ArtistCard from "../composants/ArtistCard";


const ArtistesPage = () => {
    return (
        
        <div>
            
           <Breadcrumbs />
            <ArtistCard />
        </div>
        
    );
    }

export default ArtistesPage;