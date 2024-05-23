import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NewPartners() {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        // Récupération des partenaires depuis WordPress
        fetchPartners();
    }, []);

    const fetchPartners = () => {
        const categoryId = 8; // ID de votre catégorie WordPress
        axios.get(`https://nationsounds.online/wp-json/wp/v2/posts?categories=${categoryId}`)
            .then(response => {
                const mappedPartners = response.data.map(post => ({
                    id: post.id,
                    name: post.title.rendered,
                    description: post.excerpt.rendered,
                    website: post.link,
                    logoUrl: post.jetpack_featured_media_url
                }));
                setPartners(mappedPartners);
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>New Partners</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {partners.map(partner => (
                    <li key={partner.id} style={{ marginBottom: '10px' }}>
                        <img src={partner.logoUrl} alt={partner.name} style={{ height: '50px', marginRight: '10px' }} />
                        {partner.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NewPartners;
