import React from "react";
import style from './Main.module.scss';
import styleContainer from '../commun/styles/Container.module.scss'


function Main() {
    return (
        <div className={style.mainBlock}>

            <div className={styleContainer.container}>
                <div className={style.greeting}>
                    <div className={style.text}>
                        <h3>Hi there</h3>
                        <div className={style.myName}>
                            <h1>I am Lubov Schmit</h1>
                        </div>
                        <div>
                            <h3>I am Frontend Developer</h3>
                        </div>
                        <div>
                            <h3>I build web interfaces</h3>
                        </div>
                    </div>

                    <div className={style.placePhoto}>
                        <img className={style.photoProfile}
                             src={'https://thumbs.dreamstime.com/b/geisha-en-kimono-noir-portrait-d-une-jeune-femme-asiatique-magnifique-black-159431674.jpg'}
                             alt={'profile photo'}/>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Main;


