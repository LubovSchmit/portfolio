import React from "react";
import style from './Footer.module.css';
import stylesContainer from '../commun/styles/Container.module.css'
import Skill from "../skills/skill/Skill";
import styleContainer from "../commun/styles/Container.module.css";


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3>Lubov Schmit</h3>
                <div className={style.footer}>
                    <i className={style.icon}>Linkedin</i>
                    <i className={style.icon}>Git</i>
                    <i className={style.icon}>Telegram</i>
                </div>
                <div className={style.footerCopyright}>
                    <p>2021 © All Right Reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;


/*
<div className={style.skills}></div>*/
