import React from "react";
import style from "./Skills.module.scss";

import Skill from "./skill/Skill";
import Title from "../commun/components/title/Title";
import {SiCss3, SiJavascript, SiReact} from "react-icons/si";
import Fade from 'react-reveal/Fade';


function Skills() {

    return (
        <div id='skills' className={style.skillsBlock}>
            <div className={style.skillsContainer}>

                <Title text={'Skills'}/>

                <div className={style.skills}>
                    <Fade top>
                        <Skill skill={<SiReact/>} title={"React"}
                               description={'lkjl lkjsdlng khbelifglm jhnslgfjs;kgj'}/>
                    </Fade>
                    <Fade bottom>
                        <Skill skill={<SiCss3 style={{transform: 'rotate(-45deg)'}}/>} title={"CSS"}
                               description={'i54djhnlj hkkjhelkjbf ;sjdb;fjk;jkbgkjdbiii'}/>
                    </Fade>
                    <Fade top>
                        <Skill skill={<SiJavascript style={{transform: 'rotate(-45deg)'}}/>} title={"JS"}
                               description={'fffhgcj cghjkkkkk kkkkkkkk kk kkffff fffff'}/>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default Skills;


