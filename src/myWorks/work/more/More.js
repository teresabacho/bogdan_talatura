import React from 'react';
import style from './More.module.scss';

function More(props) {
    return (
        <div className={style.more}>
            <a href="#" className={style.moreBtn}>Детальніше</a>
        </div>
    );
}

export default More;