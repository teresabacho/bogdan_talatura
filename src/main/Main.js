import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import vovaImage from '../assets/images/bodik1.JPG';
import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';


const particlesOptions = {
    "particles": {
        "number": {
            "value": 60,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "rgb(211,164,44)"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#d52828"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 10,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 80,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 300,
            "color": "rgb(211,164,44)",
            "opacity": 0.4,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 4,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 800,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 800,
                "size": 80,
                "duration": 2,
                "opacity": 0.8,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
};


function Main() {
    return (
        <div id={"main"} className={style.mainBlock}>

            <Particles className={style.particles} params={particlesOptions}/>
            <Fade bottom>
                <div className={`${styleContainer.container} ${style.mainContainer}`}>
                    <div className={style.greeting}>
                        <h1 className={style.hello}>
                            <br />
                            Талатура
                            <br/>
                            Богдан
                            <br/>
                            Ігорович
                        </h1>
                    </div>

                    <div className={style.photo}>
                        <Tilt className="Tilt" options={{max: 20, scale: 1.05,}}>
                            <img src={vovaImage} className={"bogdan_debil"} alt=""/>
                        </Tilt>
                        <div className={style.border}></div>
                    </div>

                </div>
            </Fade>

        </div>
    );
}

export default Main;
