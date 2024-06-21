import { Link } from "react-router-dom"


import './Billetterie.style.css';

export const Billetterie = () => {
    return (
            <div className="h-full flex flex-col justify-around text-center">
                <h1 className="text-4xl p-4 rounded-3xl billetterieTitle"> Réservez votre accès au festival ! </h1>
                <div>
                    <Link to='https://www.billetweb.fr/nation-sounds' className='btn-secondary p-4'> Clique ici pour réserver !</Link>
                </div>
                <section className="text-start p-4 rounded-lg priceContainer">
                    <ul className="underline decoration-1"> Prix des billets : 
                        <li> Seul : 10$ la journée // 15$ les 2 jours </li>
                        <li> Duo : 15$ la journée // 28$ les 2 jours </li>
                        <li> Emplacement camping (+entrées 2 personnes): 30$ la journée // 40$ les 2 jours</li>
                    </ul>
                </section>
            </div>
    )
}