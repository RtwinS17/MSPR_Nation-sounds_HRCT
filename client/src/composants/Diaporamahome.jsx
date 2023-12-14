import React, { useState, useEffect} from "react";


function Diaporamahome() {
    const [indexActuel, setIndexActuel] = useState(0);

  // Votre tableau d'images
  const images = [
    '/AdobeStock_267287293.jpeg',
    '/AdobeStock_115209041.jpeg',
    '/AdobeStock_476009856.jpeg',
    // Ajoutez d'autres images si nécessaire
  ];

  // Utilisation de useEffect pour changer l'image après un délai
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndexActuel((indexActuel + 1) % images.length);
    }, 10000); // Change l'image toutes les 3 secondes

    return () => clearTimeout(timer);
  }, [indexActuel, images.length]);

  return (
    <div className="w-full h-96 shadow-lg overflow-hidden mb-8">
      <img src={images[indexActuel]} alt={`Diapositive ${indexActuel + 1}`} className="w-full h-full object-cover" />
    </div>
  );
}
export default Diaporamahome;