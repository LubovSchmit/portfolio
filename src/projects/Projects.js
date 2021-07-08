import React from "react";
import style from './Projects.module.css';
import styleContainer from '../commun/styles/Container.module.css'


function Projects() {
    return (
        <div className={style.projectsBlock}>

            <div className={`${styleContainer.container} ${style.projectsContainer}`}>

                <h2 className={style.title}>Projects</h2>

                <div className={style.projects}>

                    <div className={style.project}>
                        <div className={style.imageContainer}>
                            <a className={style.buttonProjects}>Go To Watch</a>
                        </div>
                        <div className={style.projectTitleAndDescription}>
                            <div className={style.titleOfProject}>Todolist</div>
                            <span className={style.description}>Project description Project description Project description Project description Project description Project description Project description Project description Project description</span>
                        </div>
                    </div>

                    <div className={style.project}>
                        <div className={style.imageContainer}>
                            <a className={style.buttonProjects}>Go To Watch</a>
                        </div>
                        <div className={style.projectTitleAndDescription}>
                            <div className={style.titleOfProject}>Social Network</div>
                            <span className={style.description}>Project description Project description Project description Project description Project description Project description Project description Project description Project description</span>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Projects;




