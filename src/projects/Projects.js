import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../commun/styles/Container.module.scss'
import Project from './Project/Project';
import Title from '../commun/components/title/Title';
import todoImage from './../assets/image/to-do-list.jpg';
import socialImage from './../assets/image/social-network.png';

function Projects() {
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };
    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    return (

        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>

                <Title text={'Projects'}/>

                <div className={style.projects}>
                    <Project style={social} title={"Social network"}
                             description={"Project ct description Project description Project description Project description Project description Project description Project description"}/>
                    <Project style={todolist} title={"Todolist"}
                             description={"Project description Project description Project description Project description Project description Project description Project description Project description Project description"}/>
                </div>
            </div>
        </div>

    );
}

export default Projects;




