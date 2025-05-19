import React from "react";
import "./TraficCard.css";

const TraficCard = ({ info, color, isThird  }) => {
    const { name, price, speed, limit} = info;

    return (
        <div className={`info ${color} ${isThird ? "is-third" : ""} card`}>
            <div className="name">{name}</div>
            <div className="price">{price}</div>
            <div className="speed">{speed}</div>
            <div className="limit">{limit}</div>
        </div>
    )
};

export default TraficCard;