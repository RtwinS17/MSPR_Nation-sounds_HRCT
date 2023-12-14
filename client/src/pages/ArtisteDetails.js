import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Breadcrumbs from "../composants/Breadcrumbs";
import ArtistDetail from "../composants/ArtistDetail";


const ArtistesDetails = () => {
    return (
        
        <div>
            
           <Breadcrumbs />
           <ArtistDetail />
        </div>
        
    );
    }

export default ArtistesDetails;
    