import React from "react";

const Card = (props) => {
    console.log(props);
            return (
                <div className="card outletProfil__line__others__rigth__card">
                    <div className="card__container">
                        <div className="card__container__ui">
                            <button className="card__container__ui__icon">
                                <img src={`/cards/icon-${props.content}.svg`} alt="React Logo" />
                            </button>
                            <div className="card__container__ui__text">
                                <div className="card__container__ui__text__number">
                                    {props.data.data.keyData[`${props.content}`].value}
                                </div>
                                <div className="card__container__ui__text__letter">
                                    {props.data.data.keyData[`${props.content}`].name} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

export default Card