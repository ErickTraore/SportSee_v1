import React from 'react';
import IconLogo from '../asset/images/icon.svg'


const Navhorizontale = () => {
    return (
      <div className="navhorizontale">
        <div className="navhorizontale__container">
            <div className="navhorizontale__container__icon">
                <button> Accueil</button>
            </div>
            <div className="navhorizontale__container__texte">
                <button>Profil </button>
            </div>
            <div className="navhorizontale__container__texte">
                <button> Réglage</button>
            </div>
            <div className="navhorizontale__container__texte">
                <button> Communauté</button>
            </div>
            <div className="logosport__container__icon">
                <img src={IconLogo} alt="React Logo" />
            </div>
        </div>
    </div>
    );
  }
  
  export default Navhorizontale;