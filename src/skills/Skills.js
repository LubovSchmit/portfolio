import React from "react";
import style from './Skills.module.css';
import styleContainer from '../commun/styles/Container.module.css'
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"React"} description={'vvv'}/>
                    <Skill title={"CSS"}
                           description={'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'}/>
                    <Skill title={"JS"} description={'ffffffffffff'}/>

                </div>
            </div>
        </div>
    );
}

export default Skills;

/*
<div className={style.skills}>JS</div>
<div className={style.skills}>CSS</div>
<div className={style.skills}>React</div>
<div className={style.skills}>HTML</div>
<div className={style.skills}>Redux</div>*/
