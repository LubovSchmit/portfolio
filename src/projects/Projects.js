import React from 'react';
import style from './Projects.module.scss';
import Project from './Project/Project';
import Title from '../commun/components/title/Title';
import todoImage from './../assets/image/to-do-list.jpg';
import socialImage from './../assets/image/social-network.png';
import Fade from 'react-reveal/Fade';

function Projects() {
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };
    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    return (

        <div id='projects' className={style.projectsBlock}>
            <div className={style.projectsContainer}>

                <Title text={'Projects'}/>

                <div className={style.projects}>
                    <Fade right>
                        <Project style={social} title={'Cards project'}
                                 description={'Application designed to learning, self-testing, repetition of the studied or training. This application creates packs of cards with some concepts, words, phrases, rules, terms etc with the possibility of sharing with other users. App is created in Typescript with React, Redux Toolkit, React Router, Axios, SASS, Formik, Yup.'}/>
                    </Fade>
                    <Fade left>
                        <Project style={todolist} title={'Todolist project'}
                                 description={'A minimalistic ToDoList application is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do. It is helpful in planning our daily schedules. Built in Typescript with React, Redux, React Router, Axios, Storybook, Material-UI, Formik, Uuid, CSS3.'}/>
                    </Fade>
                </div>
            </div>
        </div>

    );
}

export default Projects;




