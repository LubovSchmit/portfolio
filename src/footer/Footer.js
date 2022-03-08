import React from "react";
import style from './Footer.module.scss';
import styleContainer from "../commun/styles/Container.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faReact} from '@fortawesome/free-brands-svg-icons';



function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.name}>
                    <h3>Lubov Schmit</h3>
                </div>
                <div className={style.footer}>

                    <i className="fab fa-linkedin">Linkdln</i>
                    <i className="fab fa-github">Github</i>
                    <i className="fab fa-instagram">Instagram</i>
                </div>
                <FontAwesomeIcon icon={faReact}/>
                <div className={style.copyright}>
                    <span>2021 © All Right Reserved.</span>

                </div>
            </div>
        </div>
    );
}

export default Footer;



