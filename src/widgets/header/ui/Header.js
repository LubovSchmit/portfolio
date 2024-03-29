import React from "react";
import style from './Header.module.scss';
import {Nav} from "../../../components/nav/Nav";
import {BurgerNav} from "../../../components/burgerNav/BurgerNav";



function Header() {
    return (
        <div className={style.header}>
            <Nav/>
            <BurgerNav/>
        </div>
    );
}

export default Header;