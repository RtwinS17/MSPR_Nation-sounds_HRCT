import React from "react";
import { Link } from "react-router-dom";

function RoundedButton({ children, href, ...rest }) {
  return (
    <Link to={href}>
      <button
        className="hover:font-bold bg-Bleufonce text-Jaune rounded-full shadow-md p-3 hover:bg-Jaune hover:text-Bleufonce"
        {...rest}
      >
        {children}
      </button>
    </Link>
  );
}

export default RoundedButton;
