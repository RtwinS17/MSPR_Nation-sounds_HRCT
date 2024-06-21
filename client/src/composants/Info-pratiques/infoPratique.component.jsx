import './infoPratique.style.css';

import { Link } from "react-router-dom";
import AlertesIcon from './../../ressources/alertesIcon.jpg';
import FAQIcon from './../../ressources/FAQIcon.jpg';
import contactIcon from './../../ressources/contactIcon.jpg';
import partenaireIcon from './../../ressources/partenaireIcon.jpg';

export const InfoPratiques = ({deviceUsed = 'mobile'}) => {
    return (
              <div className="flex flex-col h-full p-4 gap-8 justify-around sm:grid sm:grid-cols-2 infoContainer text-center">
                <section>
                    <h3 className="w-full font-bold"> ALERTES </h3>
                    {deviceUsed === 'mobile' ?
                    <Link to={'/alertes'}> Retrouver toutes les alertes récentes </Link> :
                    <Link to={'/alertes'} className="alertes h-full"></Link>
                    }   
                </section>
                <section>
                    <h3 className="w-full font-bold"> FAQ </h3>
                    {deviceUsed === 'mobile' ?
                    <Link to={'/FAQ'}> Les réponses à vos questions sont ici ! </Link> :
                    <Link to={'/FAQ'} className="FAQ h-full"></Link>
                    }
                </section>
                <section>
                    <h3 className="w-full font-bold"> CONTACT </h3>
                    {deviceUsed === 'mobile' ?
                    <Link to={'/contact'}> Contactez-nous ici </Link> :
                    <Link to={'/contact'} className="contact h-full"></Link>
                    }
                </section>
                <section>
                    <h3 className="w-full font-bold"> PARTENAIRES </h3>
                    {deviceUsed === 'mobile' ?
                    <Link to={'/partenaires'}> Ceux qui permettent l'événement </Link> :
                    <Link to={'/partenaires'} className="partenaires h-full"></Link>
                    }
                </section>
              </div>
    )
}