import React from "react";
import './register.style.css';

export const Register = () => {
    return (
        <>
            <div className="register-container m-auto flex flex-col h-full bg-white p-2">
                <h2 className=" my-4 text-center"> S'inscrire </h2>

                <form action="register" className="flex flex-col gap-8 items-center">

                    <label htmlFor="register-input-email" className="flex flex-col items-center">
                        <h3>Entrer votre e-mail</h3>
                        <input id="register-input-email" type="email" placeholder="email@gmail.com" />
                    </label>

                    <label htmlFor="register-input-name" className="flex flex-col items-center">
                        <h3>Entrer un nom de compte (*optionnel*)</h3>
                        <input id="register-input-name" type="text" placeholder="Splouch98" />
                    </label>

                    <label htmlFor="register-input-password" className="flex flex-col items-center">
                        <h3>Entrer un mot de passe</h3>
                        <input id="register-input-password" type="password" />
                    </label>

                    <label htmlFor="register-input-password" className="flex flex-col items-center">
                        <h3>Confirmer le mot de passe</h3>
                        <input id="register-input-password" type="password" />
                    </label>
                </form>
                <div className="flex justify-center gap-4 mt-4">
                        <button id="register-submitForm" type="submit" className="btn-primary p-2">
                            Valider
                        </button>

                        <button id="register-reset" className="btn-primary p-2">
                            Réinitialiser
                        </button>
                    </div>
            </div>
        </>
    )
}