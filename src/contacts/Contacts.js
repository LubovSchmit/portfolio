import React from "react";
import style from './Contacts.module.scss';
import Title from "../commun/components/title/Title";
import Bounce from 'react-reveal/Bounce';
import Button from "../commun/components/button/Button";


function Contacts() {
    return (
        <div id='contacts' className={style.contactsBlock}>
            {/* <div className={`${styleContainer.container} ${style.contactsContainer}`}>*/}
            <div className={style.contactsContainer}>
                <div className={style.contacts}>

                    <Title text={'Contacts'}/>
                    <Bounce left>
                        <form className={style.form}>
                            <input type='text' placeholder={'Name'} className={style.input}/>
                            <input type='text' placeholder={'Email'} className={style.input}/>
                            <textarea placeholder={'Message'} className={style.textarea}/>
                            <div className={style.btnContainer}>
                                <button type='submit' className={style.btn}>Send message</button>
                            </div>
                        </form>
                    </Bounce>
                    {/* <Button text = {'Send message'}/>*/}

                </div>
            </div>
        </div>
);
}

export default Contacts;


