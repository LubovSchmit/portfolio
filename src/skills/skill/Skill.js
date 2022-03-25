import React from "react";
import style from './Skill.module.scss';


function Skill(props) {
    return (
        <div className={style.skillContainer}>
            <div className={style.iconBlock}>
                <div className={style.iconContainer}>
                    <div className={style.siIcon}>
                        {props.skill}
                    </div>
                </div>
            </div>
            <h3 className={style.skillTitle}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>

    );
}

export default Skill;