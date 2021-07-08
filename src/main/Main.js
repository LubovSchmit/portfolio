import React from "react";
import style from './Main.module.css';
import styleContainer from '../commun/styles/Container.module.css'


function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi there</span>
                    <h1>I am Lubov Schmit</h1>
                    <p>I am Frontend Developer</p>
                    <p>I build web interfaces</p>
                </div>

                <div className={style.photo}></div>

            </div>
        </div>
    );
}

export default Main;


{/* <div className="art-lg-text art-code mb-25">
                &lt;<i>code</i>&gt;
                I build
                <span className="txt-rotate" data-period="2000"
                      data-rotate="[ &quot;web interfaces.&quot; ]">
                    <span className="wrap">
                        web interfaces
                    </span>
            </span>
                &lt;/<i>code</i>&gt;
            </div>
            <span className="txt-rotate" data-period="2000"
                  data-rotate="[ &quot;web interfaces.&quot;,&quot;ios and android applications.&quot;,&quot;design mockups.&quot;,&quot;automation tools.&quot; ]">
                <span className="wrap">
                    design m
                </span>
            </span>*/
}