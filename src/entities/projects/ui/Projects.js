import React from 'react';
import style from './Projects.module.scss';
import todoImage from './../assets/image/to-do-list.jpg';
import cardsImage from './../assets/image/cards.jpg';
import Fade from 'react-reveal/Fade';
import Title from "../../../shared/ui-kit/title/Title";
import Project from "../Project/ui/Project";

function Projects() {
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };
    const cards = {
        backgroundImage: `url(${cardsImage})`,
    };
    return (

        <div id='projects' className={style.projectsBlock}>
            <div className={style.projectsContainer}>

                <Title text={'Projects'}/>

                <div className={style.projects}>
                    <Fade right>
                        <Project style={cards} title={'Cards project'} link={'https://hw16.vercel.app/login'}
                                 description={'An app designed for learning, self-testing, revision or practising. This application creates packs of cards with certain concepts, words, phrases, rules, terms, etc. There is also a possibility to share this material with other users. App is created in Typescript with React, Redux Toolkit, React Router, Axios, SASS, Formik, Yup.'}/>
                    </Fade>
                    <Fade left>
                        <Project style={todolist} title={'Todolist project'} link={'https://lubovschmit.github.io/todolist_app/'}
                                 description={'A minimalistic ToDoList application is a kind of application that is generally used to maintain our day-to-day tasks or to create to do lists. It is helpful in planning our daily schedules. Built in Typescript with React, Redux, React Router, Axios, Storybook, Material-UI, Formik, Uuid, CSS3.'}/>
                    </Fade>
                </div>
            </div>
        </div>

    );
}

export default Projects;




