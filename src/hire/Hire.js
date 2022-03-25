import React from "react";
import style from './Hire.module.scss';
import Fade from 'react-reveal/Fade';
import Button from "../commun/components/button/Button";


function Hire() {
    return (

        <div className={style.hireBlock}>


            <div className={style.textAndButtonBlock}>
                <Fade left>
                    <div className={style.text}>
                        <h3>I am available for Freelance</h3>
                    </div>
                </Fade>
                <Fade right>
                    <div className={style.btnContainer}>
                        <div className={style.btn}>
                            <Button text={"Hire me!"} id={"contacts"}/>
                        </div>
                        <div className={style.btn}>
                            <Button text={"Download CV"} id={"downloadCv"}/>
                        </div>
                    </div>
                </Fade>
            </div>


        </div>

    );
}

export default Hire;


