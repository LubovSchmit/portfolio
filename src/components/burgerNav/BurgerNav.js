import React, {useState} from "react";
import style from './BurgerNav.module.scss';
import {Link} from "react-scroll";


export const BurgerNav = () => {
    const[menuIsOpen, setBurgerMenu] = useState(false);

    let onBurgerBtnClick = () => {
        setBurgerMenu(
            !menuIsOpen
        );
    };


    return (
        <div className={style.burgerNav}>
            <div className={menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
                <Link
                    activeClass={style.active}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Main</Link>

                <Link
                    activeClass={style.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Skills</Link>

                <Link
                    activeClass={style.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Projects</Link>
                <Link
                    activeClass={style.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Contacts</Link>
            </div>
            <div className={style.burgerBtn} onClick={onBurgerBtnClick}>
                <div className={style.lineBurgerBtn}></div>
                <div className={style.lineBurgerBtn}></div>
                <div className={style.lineBurgerBtn}></div>

            </div>
        </div>
    );
}

