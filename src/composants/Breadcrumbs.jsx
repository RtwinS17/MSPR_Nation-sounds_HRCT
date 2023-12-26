import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <div className="p-2 mx-2 text-Bleuclair">
      <Link to="/" className={`${pathnames.length === 0 ? 'font-bold' : ''}`}>Accueil</Link>
      {pathnames.length > 0 && " > "}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return (
          <React.Fragment key={name}>
            {!isLast ? (
              <Link to={routeTo}>{name}</Link>
            ) : (
              <span className="font-bold text-Bleu">{name}</span>
            )}
            {!isLast && " > "}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;
