import React from "react";
import style from "./Skills.module.scss";
import {SiCss3, SiJavascript, SiReact} from "react-icons/si";
import Fade from 'react-reveal/Fade';
import {IconContext} from "react-icons";
import Skill from "../skill/ui/Skill";
import Title from "../../../shared/ui-kit/title/Title";


function Skills() {


    return (
        <div id='skills' className={style.skillsBlock}>
            <div className={style.skillsContainer}>

                <Title text={'Skills'}/>

                <div className={style.skills}>
                    <Fade top>
                        <Skill skill={
                            <IconContext.Provider value={{className: "siIcon", size: "1.5em"}}>
                                <SiReact/>
                            </IconContext.Provider>

                        } title={"React"}
                               description={
                                   <ul>
                                       <li>creating of single-page application (SPA) using React (functional
                                           components or class components)
                                       </li>
                                       <li>Javascript or Typescript </li>
                                       <li>Redux state management</li>
                                       <li>REST API (also known as RESTful API)</li>
                                   </ul>


                               }/>
                    </Fade>
                    <Fade bottom>

                        <Skill skill={

                            <IconContext.Provider value={{className: "siIcon", size: "1.5em"}}>
                                <SiCss3/>
                            </IconContext.Provider>

                        } title={"CSS"}
                               description={
                                   <ul>
                                       <li>CSS3 (also CSS extension language - SASS)</li>
                                       <li>CSS Grid Layout</li>
                                       <li>CSS Flexbox Layout</li>
                                       <li>features: pseudo-elements, media queries, mixins, nesting, variables, @import,
                                           inheritance etc
                                       </li>
                                   </ul>
                               }/>
                    </Fade>
                    <Fade top>

                        <Skill skill={
                            <IconContext.Provider value={{className: "siIcon", size: "1.5em"}}>
                                <SiJavascript/>
                            </IconContext.Provider>
                        } title={"JS"}
                               description={
                                   <ul>
                                       <li>ES6</li>
                                       <li>for reducing the risk of bugged code I prefer using Typescript instead of plain
                                           Javascript (known as "Vanilla Javascript")
                                       </li>
                                   </ul>
                               }/>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default Skills;


