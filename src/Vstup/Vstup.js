import React from 'react';
import style from './MainVstup.module.scss';

function Vstup(props) {
    return (
        <div className={style.skill}>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}

export default Vstup;
