import React from "react";
import styles from "./Card.module.css";

const Card = ({ info, color, gradient, isThird }) => {
    const { name, price, speed, limit} = info
    return (
        <div className={`${styles.card} ${isThird && styles.cardThird}`}> 
        {/* проверка, если карточка третья есть то будет применен класс ховера */}
            <div className={styles.name} style={{backgroundColor: color}}>{name}</div>
            <div className={styles.price} style={{backgroundColor: gradient}}>{price}</div>
            <div className={styles.speed}>{speed}</div>
            <div className={styles.limit}>{limit}</div>
        </div>
    )
};

export default Card;