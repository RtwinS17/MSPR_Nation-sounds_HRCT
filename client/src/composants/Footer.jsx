import React, {useState} from "react";

function Footer() {
    return (
        <footer className="flex flex-col md:flex-row items-center justify-between p-4 w-full bg-Bleufonce text-Jaune ">
       <div>
        <p>Live nation
        <br />
        123 Rue du festival 
        <br />
        75000 Paris
        <br />
        </p>
       </div>
       <div>
        <form action="submit">
          <label htmlFor="" className= "mt-2 flex flex-col md:flex-row gap-2">
          <input type="text" placeholder="Newsletter" className='shadow-inner border rounded-md p-1 hover:bg-slate-100' />
          <input type="submit" value="Je m'inscris" class='shadow inner bg-Jaune rounded-md p-1 px-3 text-Bleufonce hover:bg-Bleuclair hover:text-Orange hover:font-bold hover:shadow-md' />
          </label>
        </form>
      </div>
        </footer>
    );
    }
export default Footer;