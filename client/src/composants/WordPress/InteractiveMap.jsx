import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InteractiveMap = () => {
    const [mapContent, setMapContent] = useState('');

    useEffect(() => {
        axios.get('https://nationsounds.online/carte-du-concert/')
            .then(response => {
                const pageContent = response.data;
                const regex = /\[google_map_easy id="(\d+)"\]/g;
                const match = regex.exec(pageContent);
                if (match && match[1]) {
                    setMapContent(`<iframe src="https://www.google.com/maps/d/embed?mid=${match[1]}" width="640" height="480"></iframe>`);
                }
            })
            .catch(error => {
                console.error('Erreur lors de la récupération du contenu de la carte :', error);
            });
    }, []);

    return (
        <div>
            <h1>Carte interactive du concert</h1>
            <div dangerouslySetInnerHTML={{ __html: mapContent }} />
        </div>
    );
};

export default InteractiveMap;
