import React from "react";
import style from './Hire.module.scss';
import Fade from 'react-reveal/Fade';
import cv from '../../../shared/assets/cv/cv.pdf'
import Button from "../../../shared/ui-kit/button/Button";

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
                           {/* <Button text={"Download CV"} href={'./../assets/cv/cv.jpg'} download={"CV Schmit Lubov"}/>*/}
                            <a href={cv} target={"_blank"}>Download CV</a>
                        </div>
                    </div>
                </Fade>
            </div>


        </div>

    );
}

export default Hire;


