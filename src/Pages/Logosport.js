import React from 'react';
import IconLogo from '../asset/images/icon.svg'
import TexteLogo from '../asset/images/texte.svg'

const Logosport = () => {
    return (
      <div className="logosport">
        <div className="logosport__container">
            <div className="logosport__container__icon">
                <img src={IconLogo} alt="React Logo" />
            </div>
            <div className="logosport__container__texte">
                <img src={TexteLogo} alt="React Logo" />
            </div>
        
        </div>
    </div>
    );
  }
  
  export default Logosport;