import React from "react";
import style from './Telework.module.css';
import stylesContainer from '../commun/styles/Container.module.css'


function Telework() {
    return (
        <div className={style.teleworkBlock}>
            <div className={stylesContainer.container}>
                <div className={style.textAndButtonBlock}>
                    <h3>I am looking for a telework</h3>
                    <button className={style.button}>Contact me</button>
                </div>
            </div>
        </div>
    );
}

export default Telework;


