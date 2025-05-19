import React from "react";
import { data } from "../../Data/data";
import TraficCard from "../TraficCard/TraficCard";
import styles from "../MainPage/MainPage.module.css";
import { useState } from "react";

function MainPage () {
    function getColor(index){
        switch (index){
            case 0:
                return 'blue';
            case 1:
                return 'green';
            case 2:
                return 'red';
            case 3:
                return 'grey';
            default:
                return 'blue';
        }
    };

    const [activeCard, setActiveCard] = useState(false);

    const setActiveCardHandler = (index) => {
        setActiveCard(index);
    };

    return (
    <div className={styles.mainPage}>
        {
            data.map((info, index) => {
                if (activeCard === false || activeCard === index) {
                    return (
                        <div
                            key={info.name}
                            onClick={() => setActiveCardHandler(index)}
                            style={{ cursor: "pointer" }}
                        >
                            <TraficCard
                                info={info}
                                color={getColor(index)}
                                isThird={index === 2}
                            />
                        </div>
                    );
                }
                return false;
            })
        }
    </div>
)}

export default MainPage;