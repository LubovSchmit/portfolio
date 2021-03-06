import React from "react";
import style from './Footer.module.scss';
import {SocialIcon} from 'react-social-icons';
import {SiReact} from "react-icons/si";
import Fade from 'react-reveal/Fade';

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <Fade top>
                <div className={style.name}>
                    <h3>Lubov Schmit</h3>
                </div>
                </Fade>
                <div className={style.socialIcons}>
                    <SocialIcon className={style.icon} target="_blank" bgColor={'rgb(196, 155, 102)'}
                                url="https://github.com/LubovSchmit"/>
                    <SocialIcon className={style.icon} target="_blank" bgColor={'rgb(196, 155, 102)'} url="https://telegram.me/LubovSchmit"/>
                    <SocialIcon className={style.icon} target="_blank" bgColor={'rgb(196, 155, 102)'} url="https://www.codewars.com/users/LiubouSchmit"/>
                    <SocialIcon className={style.icon} target="_blank" bgColor={'rgb(196, 155, 102)'} url="http://www.linkedin.com/in/liubov-schmit-france"/>


                </div>
                <SiReact style={{marginTop: '10px', marginBottom: '10px', color: 'rgb(196, 155, 102)'}}/>
                <div className={style.copyright}>

                    <span>2022 © All Right Reserved.</span>


                </div>
            </div>
        </div>
    );
}

export default Footer;



