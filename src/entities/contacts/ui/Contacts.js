import React from "react";
import style from './Contacts.module.scss';
import Fade from 'react-reveal/Fade';
import Title from "../../../shared/ui-kit/title/Title";


function Contacts() {

    return (
        <div id='contacts' className={style.contactsBlock}>
            <Title text={'Contacts'}/>
            <div className={style.contactsContainer}>
                <Fade left>
                    <div className={style.infos}>
                        <div className={style.info}>
                            <div className={style.item}>phone</div>
                            <div className={style.data}>+33769211411</div>
                        </div>
                        <div className={style.info}>
                            <div className={style.item}>address</div>
                            <div className={style.data}>9 square Jean-Baptiste Clément 60200 Compiègne, FRANCE</div>
                        </div>
                        <div className={style.info}>
                            <div className={style.item}>email</div>
                            <div className={style.data}>liubou.schmit@gmail.com</div>
                        </div>

                    </div>
                </Fade>

                <Fade right>
                    <div className={style.contacts}>

                        <div className={style.btnContainer}>
                            <div className={style.btn}>
                                <a href={"mailto:liubou.schmit@gmail.com"} target={"_blank"}>Contact
                                    me</a>
                            </div>
                        </div>


                        {/*<form className={style.form}>
                            <input type='text' placeholder={'Name'} className={style.input}/>
                            <input type='text' placeholder={'Email'} className={style.input}/>
                            <textarea placeholder={'Message'} className={style.textarea}/>
                            <div className={style.btnContainer}>
                                <button type='submit' className={style.btn}>Send message</button>
                            </div>
                        </form>*/}
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Contacts;


