import React, {useState} from 'react';
import style from './Work.module.scss';
import More from "./more/More";
import ShowMore from 'react-show-more-button';
function Work(props) {
    const [showMore, setShowMore] = useState(true);
    return (
        <div className={style.work}>
            <div className={style.image} style={props.style}>
            </div>
            <div className={style.info}>
                <h3 className={style.title}>{props.title}</h3>
                <div className={style.more}  >
                    <a onClick={() => setShowMore(!showMore) }className={style.moreBtn}>Детальніше</a>
                </div>
                    <div>
                        { showMore ? "" : <span className={style.description}>{props.description}</span>}
                    </div>

            </div>
        </div>
    );
}

export default Work;