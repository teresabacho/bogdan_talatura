import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import styleTitle from '../common/styles/Title.module.scss';
import Skill from './skill/Skill';
import Fade from 'react-reveal/Fade';
import * as Unicons from '@iconscout/react-unicons';
import Colors from '../common/styles/sass/variables.sass';
import { UilBookAlt } from '@iconscout/react-unicons'
import { UilSuitcaseAlt } from '@iconscout/react-unicons'

function Skills() {
    const JS = <Unicons.UilJavaScript size="140" color="#61DAFB"/>;

    return (
        <div id={"skills"} className={style.skillsBlock}>
            <Fade>
                <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <div className={styleTitle.title}>
                        <h2>Освіта</h2>
                    </div>
                    <div className={style.skills}>
                        <Skill icon={<Unicons.UilBookAlt className={style.icon}/>}
                               title={"Вища освіта"}
                               description={<div className={style.descript}>
                                   Професійна кваліфікація Молодший спеціаліст з Фінансів
                                   <br className={style.margin}/>
                                   Спеціальність:Банківська справа та
                                   Страхування
                                   <p className={style.margin}> </p>
                                   <br className={style.margin}/>
                                   Навчаюсь у Національному університеті “Львівська політехніка”
                                   <p className={style.margin}> </p>
                                   <br className={style.margin}/>
                                   Спеціальність: Фінанси, Банківська справа та
                                   Страхування
                                   <p className={style.margin}> </p>
                                   <br className={style.margin}/>
                                   Навчаюся у Львівському національному університеті імені Івана Франка
                                   <p className={style.margin}> </p>
                                   <br className={style.margin}/>
                                   Спеціальність: Право
                                   <p className={style.margin}> </p>
                                   <br className={style.margin}/>
                                   Навчаюсь у Національній академії сухопутних військ
                                   <p className={style.margin}> </p>
                                   <br className={style.margin}/>
                                   Спеціальність: Військова розвідка
                               </div>}/>
                        <Skill icon={<Unicons.UilSuitcaseAlt className={style.icon}/>}
                               title={"Моя діяльність"}
                               description={
                                   <div className={style.descript}>
                                       Амбасадор Let’s do it Ukraine
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                        Помічник Радника Голови у Львівській обласній державній адміністрації
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                        Помічник Радника Голови у Дрогобицькій обласній державній адміністрації
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                        Колишній голова економічного факультету у коледжі
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                        Командир роти у Національній академії сухопутних військ
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                        Координатор Львівщини по озелененню від благодійної організація
                                       “Добро.Дій”`
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                        Менеджер-амбасадор “The World’s Largest Lesson” та брав участь в їхній
                                       ініціативі «Найбільший урок у світі», за підтримки Unicef, в результаті якої
                                       було проведено уроки у 29-ти школах Львова та залучено 4040 учнів.
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                        Ініціатор створення Антикорупційної стратегії на 2021-2025 роки в
                                       Львівській міській раді
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                        Ініціатор проведення зведеної аналітики даних щодо об’єктів комунальної
                                       власності у місті Львові
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                        Брав участь у Всеукраїнському форумі «Україна 30»
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                        Брав участь у ХХ Міжнародному економічному форумі
                                   </div>
                               }/>
                        <Skill icon={<Unicons.UilEnglishToChinese className={style.icon}/>}
                               title={"Володіння мовами"}
                               description={
                                   <div className={style.descript}>
                                       Українська – вільно
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                        Російська – вільно
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                        Англійська – розмовна
                                   </div>
                               }/>
                        <Skill icon={<Unicons.UilNotes  className={style.icon}/>}
                               title={"Курси"}
                               description={
                                   <div className={style.descript}>
                                       Завершив курси англійської мови у Мовному Експерті - General English
                                       (B1 Common European Framework) вересень 2018-травень 2019
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                       Завершив курси англійської мови у Green Forest (Intermediate level with final
                                       grade A)
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                        Завершив курси англійської мови у Green Forest (Upper-Intermediate
                                       level with final grade A)
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                        Завершив Академію політичного лідерства
                                   </div>
                               }/>
                        <Skill icon={<Unicons.UilBrain  className={style.icon}/>}
                               title={"Стажування"}
                               description={
                                   <div className={style.descript}>
                                       Стажувався в Західному міжобласному територіальному відділенні
                                       Антимонопольного комітету України у Третьому відділі досліджень та
                                       розслідувань
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                        Стажувався в Львівській міській раді у секторі питань доброчесності та
                                       запобіганні корупції
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                        Стажувався в ПАТ "Львівгаз" у відділі тендерних закупівель
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                        Стажувався в ПАТ "ОЩАДБАНК"
                                   </div>
                               }/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;