import React from "react";

function Boutonverticale(props) {
    return (
      <div className="boutonverticale">
        <div className="boutonverticale__container">
            <div className="boutonverticale__container__content">
                <button className="boutonverticale__container__content__icon">
                  <img src={props.content} alt="React Logo" />
                </button>
            </div>
           
        
        </div>
    </div>
    );
  }
  
  export default Boutonverticale;