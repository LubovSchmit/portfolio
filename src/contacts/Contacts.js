import React from "react";
import style from './Contacts.module.css';
import stylesContainer from '../commun/styles/Container.module.css'


function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={stylesContainer.container}>
                <div className={style.contacts}>
                    <div className={style.contactme}>
                    <h3>Contact me</h3>
                    </div>
                    <form className={style.form}>
                        <input value={'Name'} className={style.input}/>
                        <input value={'Email'} className={style.input}/>
                        <textarea value={'Message'} className={style.textarea}/>

                    </form>
                    <button className={style.buttonContacts}>Send message</button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;


