import React from "react";
import style from './Main.module.scss';
import Particles from "react-tsparticles";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'

function Main() {

    return (
        <div id='main' className={style.mainBlock}>

            <Particles
                className={style.particles}
                options={{
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 20,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 200,
                                duration: 2,
                                opacity: 0.5,
                                size: 2,
                            },
                            push: {
                                quantity: 2,
                            },
                            repulse: {
                                distance: 50,
                                duration: 0.8,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "rgb(196, 155, 102)",
                        },
                        links: {
                            color: "rgb(196, 155, 102)",
                            distance: 200,
                            enable: true,
                            opacity: 0.1,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 0.5,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 600,
                            },
                            value: 50,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 2,
                        },
                    },
                    detectRetina: true,
                }}
            />

            <div className={style.mainContainer}>
                <div className={style.greeting}>
                    <Fade left>
                        <span className={style.textBlock}>
                            <span>Hi there</span>
                            <span className={style.myName}>I am Lubov Schmit</span>
                            <span>
                                <ReactTypingEffect text={["I am Frontend Developer", "I build web interfaces"]}/>
                            </span>
                        </span>
                    </Fade>
                    <Fade right>
                        <span className={style.imageContainer}>
                        <Tilt  options={{max: 15}}>
                            <div className={style.image}></div>
                        </Tilt>
                        </span>
                    </Fade>
                </div>
            </div>

        </div>
    );
}

export default Main;


