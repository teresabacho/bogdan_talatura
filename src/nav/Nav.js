import React from "react";
import style from "./Nav.module.scss";
import * as Scroll from 'react-scroll';
import {Link, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';


function Nav() {
    return (
        <div className={style.nav}>
            <Link activeClass={style.active}
                  to="main"
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}
            >Головна</Link>
            <Link activeClass={style.active}
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
            >Освіта</Link>
            <Link activeClass={style.active}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
            >План діяльності</Link>
            {/*<a href="#projects">Projects</a>*/}

        </div>
    )
}

export default Nav;