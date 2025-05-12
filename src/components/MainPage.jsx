import React from "react";
import { data } from "../constants/data";
import Card from "./Card";
import styles from "./MainPage.module.css";

function MainPage () {
    return(
        <div className={styles.mainPage}>
            {
                data.map((info, index) => {
                    return <Card info={info}
                                key={index}
                                color={info.color}
                                gradient={info.gradient}
                                isThird={index === 2} /> //третья карточка индекс 
                })
            }
        </div>
    )
}

export default MainPage;