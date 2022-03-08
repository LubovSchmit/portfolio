import React from "react";
import style from './Button.module.scss';




function Button(props) {
    return (
        <a href='' className={style.button}>
            {props.text}
        </a>
    );
}

export default Button;
