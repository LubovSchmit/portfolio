import React from "react";
import style from './Skills.module.scss';
import styleContainer from '../commun/styles/Container.module.scss'
import Skill from "./skill/Skill";
import Title from "../commun/components/title/Title";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>

                    <Title text={'Skills'}/>

                <div className={style.skills}>
                    <Skill title={"React"} description={'lkjl lkjsdlng khbelifglm jhnslgfjs;kgj'}/>
                    <Skill title={"CSS"}
                           description={'i54djhnlj hkkjhelkjbf ;sjdb;fjk;jkbgkjdb    iii'}/>
                    <Skill title={"JS"} description={'fffhgcj cghjkkkkk kkkkkkkk kk kkffff fffff'}/>

                </div>
            </div>
        </div>
    );
}

export default Skills;


