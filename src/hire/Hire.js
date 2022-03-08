import React from "react";
import style from './Hire.module.scss';
import stylesContainer from '../commun/styles/Container.module.scss'
import Button from "../commun/components/button/Button";


function Hire() {
    return (
        <div className={style.hireBlock}>
            <div className={stylesContainer.container}>
                <div className={style.textAndButtonBlock}>
                    <div className={style.text}>
                        <h3>I am available for Freelance</h3>
                    </div>
                    <Button text = {'Hire me!'}/>
                </div>
            </div>
        </div>
    );
}

export default Hire;


