import React from "react";
import style from './Hire.module.scss';
import Button from "../commun/components/button/Button";
import Fade from 'react-reveal/Fade';


function Hire() {
    return (

        <div className={style.hireBlock}>

            <Fade right>
                <div className={style.textAndButtonBlock}>
                    <div className={style.text}>
                        <h3>I am available for Freelance</h3>
                    </div>

                    <Button text={"Hire me!"} id={"contacts"}/>

                </div>

            </Fade>
        </div>

    );
}

export default Hire;


