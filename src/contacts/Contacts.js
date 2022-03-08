import React from "react";
import style from './Contacts.module.scss';
import styleContainer from '../commun/styles/Container.module.scss'
import Title from "../commun/components/title/Title";
import Button from "../commun/components/button/Button";


function Contacts() {
    return (
        <div className={style.contactsBlock}>
           {/* <div className={`${styleContainer.container} ${style.contactsContainer}`}>*/}
            <div className={style.contactsContainer}>
                <div className={style.contacts}>

                    <Title text={'Contacts'}/>

                    <form className={style.form}>
                        <input type='text' value={'Name'} className={style.input}/>
                        <input type='text' value={'Email'} className={style.input}/>
                        <textarea value={'Message'} className={style.textarea}/>

                    </form>
                    <Button text = {'Send message'}/>
                   {/* <button type='submit' className={style.buttonSendMessage}>Send message</button>*/}
                </div>
            </div>
        </div>
    );
}

export default Contacts;


