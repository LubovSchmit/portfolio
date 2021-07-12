import React from "react";
import style from './Main.module.css';
import styleContainer from '../commun/styles/Container.module.css'


function Main() {
    return (
        <div className={style.mainBlock}>

            <div className={styleContainer.container}>
                <div className={style.main}>
                    <div className={style.text}>
                        <span>Hi there</span>
                        <h1>I am Lubov Schmit</h1>
                        <p>I am Frontend Developer</p>
                        <p>I build web interfaces</p>
                    </div>

                    <div className={style.placePhoto}>
                        <img className={style.photoProfile} src={'https://thumbs.dreamstime.com/b/geisha-en-kimono-noir-portrait-d-une-jeune-femme-asiatique-magnifique-black-159431674.jpg'} alt={'profile'}/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Main;


