import React from 'react';
import style from './Vstup.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import styleTitle from '../common/styles/Title.module.scss';
import Fade from 'react-reveal/Fade';
import * as Unicons from '@iconscout/react-unicons';
import Vstup from "./Vstup";

function MainVstup() {
    const JS = <Unicons.UilJavaScript size="140" color="#61DAFB"/>;

    return (
        <div id={"vstup"} className={style.skillsBlock}>
            <Fade>
                <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <div className={styleTitle.title}>
                        <h2>Вступне слово</h2>
                    </div>
                    <div className={style.skills}>
                        <Vstup
                            // description={<p>
                            //     "Молодь - це мотор суспільного прогресу, творчого підходу та новаторства. І я впевнений, що наша молодіжна рада може стати справжнім каталізатором позитивних змін у нашій спільноті.<br/>
                            //     Це для мене велика честь і відповідальність, але ще більше - це можливість зробити реальний внесок у розвиток нашого регіону разом з вами, мої шановані друзі. <br/>
                            //     Молодіжна рада утворюється з метою залучення молоді до формування та реалізації молодіжної політики на обласному рівні. Ми, молодь, маємо великий потенціал та ідеї, які можуть змінити наше майбутнє на краще. І я готовий бути разом з вами посередником між владою та молоддю !
                            //     Діяльність Молодіжної ради ґрунтується на принципах законності, гласності, відкритості та відповідальності. Ми маємо відчуття глибокої відповідальності перед молоддю Львівщини, перед майбутніми поколіннями, перед нашою країною. <br/>
                            //     Основними завданнями Молодіжної ради є сприяння реалізації права молоді на участь у формуванні та реалізації молодіжної політики на обласному рівні, надання пропозицій щодо її реалізації та багато іншого, що допоможе нашій молоді бути активними громадянами своєї країни. <br/>
                            //     Я глибоко переконаний, що разом ми зможемо досягти великих речей. І я закликаю вас приєднатися до цього шляху разом зі мною. Наша молодь заслуговує на краще, і ми зробимо все можливе, щоб забезпечити їй краще майбутнє та бути почутим у всіх 73 громадах Львівської області. <br/>
                            //     Дякую за вашу увагу та підтримку !" <br/>
                            // </p>}
                            description={<div className={style.descript}>
                                <p className={style.margin}> Молодь - це мотор суспільного прогресу, творчого підходу та
                                    новаторства. І я впевнений, що наша Молодіжна рада може стати справжнім
                                    каталізатором позитивних змін у нашій спільноті.</p>
                                <p className={style.margin}>
                                    Це для мене велика честь і відповідальність, але ще більше - це можливість зробити
                                    реальний внесок у розвиток нашого регіону разом з вами, мої шановані друзі.</p>
                                <p className={style.margin}>Молодіжна рада утворюється з метою залучення молоді до
                                    формування та реалізації молодіжної політики на обласному рівні. Ми, молодь, маємо
                                    великий потенціал та ідеї, які можуть змінити наше майбутнє на краще. І я готовий
                                    бути разом з вами посередником між владою та молоддю !
                                </p>
                                <p className={style.margin}> Діяльність Молодіжної ради ґрунтується на принципах
                                    законності, гласності,
                                    відкритості та відповідальності. Ми маємо відчуття глибокої відповідальності перед
                                    молоддю Львівщини, перед майбутніми поколіннями, перед нашою країною.</p>
                                <p className={style.margin}> Я глибоко переконаний, що разом ми зможемо досягти великих
                                    речей. І я закликаю вас приєднатися до цього шляху разом зі мною. Наша молодь
                                    заслуговує на краще, і ми зробимо все можливе, щоб забезпечити їй краще майбутнє та
                                    бути почутим у всіх 73 громадах Львівської області. </p>
                                <p className={style.margin}> Дякую за вашу увагу та підтримку ! </p>

                            </div>}
                        />
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default MainVstup;