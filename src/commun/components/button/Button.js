import React from "react";
import style from './Button.module.scss';
import {Link} from "react-scroll";




function Button(props) {
    return (
        <Link
            activeClass={style.button}
            to={props.id}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >{props.text}</Link>
    );
}

export default Button;
