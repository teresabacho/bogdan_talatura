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
                        <h2>Про Мене</h2>
                    </div>
                    <div className={style.skills}>
                        <Skill icon={<Unicons.UilBookAlt className={style.icon}/>}
                               title={"Вища освіта"}
                               description={<div className={style.descript}>
                                   <p className={style.margin}>Освітня кваліфікація “Бакалавр фінансів, банківської
                                       справи та страхування” </p>
                                   <br className={style.margin}/>

                                   <p className={style.margin}>Військове звання: Молодший лейтенант </p>
                                   <br className={style.margin}/>
                                   Навчаюся у Львівському національному університеті імені Івана Франка
                                   <p className={style.margin}></p>
                                   Спеціальність: Право
                               </div>}/>
                        <Skill icon={<Unicons.UilSuitcaseAlt className={style.icon}/>}
                               title={"Досвід роботи"}
                               description={
                                   <div className={style.descript}>
                                       Молодший спеціаліст з ціноутворення у PwC Україна
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                       Фахівець з фінансів у Greenville
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                       Екс-голова Молодіжної ради при Львівській ОВА
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                       Заступник координатора у Львівській області в громадській організації (управлінський
                                       досвід більше 1+ року командою в кількості 30+ осіб)
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                       Робота над антикорупційною стратегією на 2021-2025 роки в Львівській міській раді
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                       Робота над зведеною аналітикою даних щодо об’єктів комунальної власності у місті
                                       Львові
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                       Робота у сфері фінансових злочинів над викраданням та незаконною приватизацією
                                       міської нерухомості у місті Львові
                                   </div>
                               }/>
                        <Skill icon={<Unicons.UilAnalytics className={style.icon}/>}
                               title={"Дослідження та наукові роботи"}
                               description={
                                   <div className={style.descript}>
                                       Наукова робота на тему «Децентралізація влади в умовах сучасного українського унітаризму»
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                       Наукова робота на тему «Оцінювання симптом (причин) виникнення фінансової кризи на підприємстві»
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                       Наукова робота на тему «Фінансові ресурси місцевого та регіонального самоврядування»
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                       Наукова робота на тему «Концeнтрaція тa конкурентність на страховому ринку України»
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                       Наукова робота на тему «Міжнародні резерви України в умовах війни»
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                       Наукова робота на тему «Страховий ринок України в умовах війни»
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                       Наукова робота на тему «Учасники-контрагенти у трансфертному ціноутворенні: резиденти, нерезиденти, пов’язані особи та інші»
                                   </div>
                               }/>
                        <Skill icon={<Unicons.UilEnglishToChinese className={style.icon}/>}
                               title={"Володіння мовами"}
                               description={
                                   <div className={style.descript}>
                                       Українська – вільно
                                       <p className={style.margin}> </p>
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                        Англійська – розмовна
                                   </div>
                               }/>
                        <Skill icon={<Unicons.UilNotes  className={style.icon}/>}
                               title={"Курси"}
                               description={
                                   <div className={style.descript}>
                                       Завершення Академії політичного лідерства від Міжнародного республіканського інституту (серпень 2021 – жовтень 2021)
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                       Завершення серії тренінгів на тему “Виборчі системи в Україні та підготовка до участі у виборах для молоді” від Міжнародного демократичного інституту
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                       Завершення навчання та сертифіковане підтвердження у сфері публічних закупівель на веб-порталі Уповноваженого органу
                                       <p className={style.margin}> </p><br className={style.margin}/>
                                       Завершив курси англійської мови у Green Forest (Advanced level)                                       <p className={style.margin}> </p>
                                   </div>
                               }/>
                        <Skill icon={<Unicons.UilBrain  className={style.icon}/>}
                               title={"Стажування"}
                               description={
                                   <div className={style.descript}>
                                       Стажування в Західному міжобласному територіальному відділенні
                                       Антимонопольного комітету України у Третьому відділі досліджень та
                                       розслідувань
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                       Стажування в Львівській міській раді у секторі питань доброчесності та
                                       запобіганні корупції
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                       Стажування в ПАТ "Львівгаз" у відділі тендерних закупівель
                                       <p className={style.margin}> </p>
                                       <br className={style.margin}/>
                                       Стажування в ПАТ "ОЩАДБАНК"
                                   </div>
                               }/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;
