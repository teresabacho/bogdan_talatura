import React from 'react';
import style from './MyWorks.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import styleTitle from '../common/styles/Title.module.scss';
import Work from "./work/Work";
import toDoImage from './../assets/images/13.png';
import socialImage from './../assets/images/19.png';
import Fade from 'react-reveal/Fade';
import loda from "../assets/images/ivib-01.jpg";
import social from "../assets/images/social.png";
import social3 from "../assets/images/photo_2024-02-23_01-01-25.jpg";
import tree_plant from "../assets/images/plant-tree.jpg";
import goods from "../assets/images/chellendzh-dobryh-sprav-support-people-deeds.12@2x.jpeg";
import popular from "../assets/images/photo_2024-02-23_01-22-41.jpg";
import together from "../assets/images/together.png";
import year from "../assets/images/photo_2024-02-23_01-18-07.jpg";
import friends_withbenefits from "../assets/images/polular2.jpg";
import real1 from "../assets/images/photo_2024-02-23_00-42-08.jpg";
import yellow from "../assets/images/veryyellov.png";
import white from "../assets/images/yeloow.png"
import pizda from "../assets/images/421.jpeg"
import pizda3 from "../assets/images/photo_2024-02-23_01-43-51.jpg"

function MyWorks() {
    const first = {
        backgroundImage: `url(${yellow})`,
        width: '250px',
        height: '250px',
        marginTop: '15px'
    }
    const social1 = {
        backgroundImage: `url(${white})`,
        width: '250px',
        height: '250px',
        marginTop: '15px'
    }
    const social2 = {
        backgroundImage: `url(${social})`,
    }
    const tree = {
        backgroundImage: `url(${tree_plant})`,
    }
    const good = {
        backgroundImage: `url(${goods})`,
    }
    const popular1 = {
        backgroundImage: `url(${popular})`,
    }
    const get_together = {
        backgroundImage: `url(${together})`,
    }
    const ukraine = {
        backgroundImage: `url(${year})`,
    }
    const friends = {
        backgroundImage: `url(${friends_withbenefits})`,
    }
    const real = {
        backgroundImage: `url(${real1})`,
    }
    const academia = {
        backgroundImage: `url(${real1})`,
    }
    const academia1 = {
        backgroundImage: `url(${pizda3})`,
        width: '250px',
        height: '250px',
    }


    return (
        <div id={"projects"} className={style.myWorksBlock}>
            <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
                <div className={styleTitle.title}>
                    <h2>Заходи</h2>
                </div>
                <div className={style.myWorks}>
                    <Work style={first}
                          title={"Співпраця Молодіжної ради при Львівській ОДА"}
                          description={
                              <div>
                                  <p className={style.margin}>Закріплено партнерські відносини з Львівським
                                      університетом Бізнесу та Права</p>
                                  <p className={style.margin}>Закріплено партнерські відносини з Львівським
                                      торговельно-економічним університетом</p>
                                  <p className={style.margin}>Закріплено партнерські відносини з Національним
                                      університетом "Львівська Політехніка"</p>
                                  <p className={style.margin}>Закріплено партнерські відносини з Львівським державним
                                      університетом внутрішніх
                                      справ</p>
                                  <p className={style.margin}>Закріплено партнерські відносини з Юридичним факультетом
                                      ЛНУ імені Івана Франка</p>
                                  <p className={style.margin}>Закріплено партнерські відносини з Львівською
                                      торгово-промисловою палатою</p>
                                  <p className={style.margin}>Закріплено партнерські відносини з Молодіжною радою у
                                      місті Кракові, Польща</p>
                                  <p className={style.margin}>Закріплено партнерські відносини з Молодіжною радою у
                                      місті Жешові, Польща</p>
                                  <p className={style.margin}>Закріплено партнерські відносини з Студентською радою при
                                      Яґеллонському університеті
                                      у місті Кракові, Польща</p>
                                  <p className={style.margin}>Закріплено партнерські відносини з обласними молодіжними
                                      радами України</p>
                                  <p className={style.margin}>Закріплено партнерські відносини з Parlament Młodych
                                      Rzeczypospolitej Polskiej</p>
                                  <p className={style.margin}>Закріплено партнерські відносини з Львіським осередком AIESEC</p>
                              </div>}
                    />
                    <Work style={social1}
                          title={"Проєкти Молодіжної ради при Львівській ОДА"}
                          description={<div>
                              <p className={style.margin}>Створено обласну програму стажування «Академія перших
                                  можливостей»</p>
                              <p className={style.justanim}>Створено освітню програму для студентів «Правоохоронний
                                  старт 2023»</p>
                              <p className={style.justanim}>Створено асоціацію Молодіжних рад Львівщини на базі
                                  Молодіжної ради при Львівській ОДА
                              </p>
                              <p className={style.justanim}>Створено Молодіжну раду при Рава-Руській міській раді</p>
                              <p className={style.justanim}>Проведено ознайомчий тренінг «Що таке Молодіжні ради» з
                                  Молодіжними радами при Жовківській міській раді, Миколаївський міській раді,
                                  Стрілківській сільській раді</p>
                              <p className={style.justanim}>Спільно з партнерами відвідано дитячий будинок
                                  «Благодать»</p>
                              <p className={style.justanim}>Спільно з партнерами реалізовано молодіжний проєкт «Модель
                                  Європейського парламенту 2023»</p>
                              <p className={style.justanim}>Реалізовано Етно-виставку до всесвітнього дня вишиванки
                                  «Спадщина Нескорених»</p>
                              <p className={style.justanim}>Спільнозпартнерами(AISEC)реалізовано«YouthSpeakForum»</p>
                              <p className={style.justanim}>Відкрито молодіжний простір для української молоді у місті
                                  Жешув, Польща</p>
                              <p className={style.justanim}>Спільно з партнерами реалізовано просвітницький проект на
                                  Стрийщині «Гідні нащадки
                                  гетьмана І. Виговського»</p>

                          </div>}/><Work style={academia}
                                         title={"Стажування для здобувачів професійно-технічної освіти"}
                                         description={
                                             <div>
                                                 <p className={style.justanim}>
                                                     Це важливий крок у підготовці молодих спеціалістів, відповідно до
                                                     потреб сучасного
                                                     ринку праці.
                                                 </p>
                                                 <p className={style.justanim}>Аналіз потреб ринку праці: Першим кроком
                                                     буде збір і
                                                     аналіз інформації про потреби ринку праці у кваліфікованих фахівцях
                                                     відповідно до
                                                     різних професійних напрямків. Це допоможе зрозуміти, які
                                                     компетенції та навички є
                                                     найбільш вимаганими у сучасному бізнесі.</p>

                                                 <p className={style.justanim}>Розробка програми стажування: На основі
                                                     результатів
                                                     аналізу потреб ринку праці потрібно розробити програму стажування,
                                                     яка включатиме
                                                     практичне навчання на підприємствах.</p>
                                                 <p className={style.justanim}>Пошук партнерів: Важливим етапом буде
                                                     встановлення
                                                     партнерських відносин з підприємствами та компаніями, які будуть
                                                     готові приймати
                                                     стажерів. Це можуть бути як великі корпорації, так і малі та
                                                     середні
                                                     підприємства.</p>
                                                 <p className={style.justanim}>Організація навчального процесу: Після
                                                     укладення угод з
                                                     партнерами необхідно організувати проведення стажування,
                                                     забезпечити відповідність
                                                     практичних завдань міжнавчальним програмам та потребами
                                                     бізнесу.</p>
                                                 <p className={style.justanim}>Впровадження стажування для здобувачів
                                                     професійно-технічної освіти між технічними закладами освіти та
                                                     бізнесом на базі
                                                     Львівської обласної державної адміністрації може значно поліпшити
                                                     підготовку
                                                     молодих фахівців, забезпечити їх високим рівнем компетентності та
                                                     відповідністю
                                                     потребам сучасного ринку праці.</p>

                                             </div>
                                         }/>


                    <Work style={social2}
                          title={"Проєкт імплементації системи онлайн виборів в студентське самоврядування, обласні Молодіжні ради"}
                          description={
                              <div>
                                  <p className={style.justanim}>
                                      Це важливий крок у покращенні демократичних процесів та залученні студентів до
                                      управління своєю університетською спільнотою.
                                  </p>
                                  <p className={style.justanim}>Аналіз потреб і можливостей: Першим кроком буде збір і
                                      аналіз відгуків студентів щодо поточної системи виборів. Також важливо дослідити
                                      технічні можливості для впровадження онлайн системи, включаючи доступні програмні
                                      засоби і технічну інфраструктуру.</p>

                                  <p className={style.justanim}>Розробка програмного забезпечення: На основі отриманих
                                      даних потрібно розробити програмне забезпечення для проведення онлайн виборів. Це
                                      може бути веб-платформа або мобільний додаток, які забезпечують безпеку,
                                      конфіденційність та зручність для голосування.</p>
                                  <p className={style.justanim}>Безпека та захист даних: Одним із головних аспектів буде
                                      забезпечення безпеки та захисту особистих даних студентів. Необхідно розробити
                                      механізми автентифікації, шифрування та інші заходи для запобігання будь-яким
                                      спробам втручання в процес голосування.</p>
                                  <p className={style.justanim}>Інформаційна кампанія: Проведення ефективної
                                      інформаційної кампанії є ключовим для успіху проекту. Студентам повинна бути
                                      надана вичерпна інформація про нову систему голосування, її переваги та
                                      процедури.</p>
                                  <p className={style.justanim}>Запровадження та навчання: Важливо надати навчальні
                                      матеріали для студентів та організувати навчальні сесії для адміністраторів
                                      системи та членів виборчих комісій.
                                      Реалізація проекту з імплементації системи онлайн виборів у студентське
                                      самоврядування може сприяти більшій участі студентів у демократичних процесах,
                                      підвищити рівень довіри до виборчих процедур та зробити управління
                                      університетською спільнотою більш ефективним та прозорим.</p>

                              </div>
                          }/>
                    <Work style={popular1}
                          title={"Популяризація здорового способу життя та профілактика негативних явищ в\n" +
                              "молодіжному середовищі"}
                          description={<div>
                              <p className={style.margin}>Здоров’я — це безцінне багатство людини, від якого
                                  залежить вся її життєдіяльність. Ніякі досягнуті цілі в житті не приносять повного
                                  щастя, якщо немає здоров’я. Тому дуже важливо вести здоровий спосіб життя, не
                                  дивлячись скільки людині років.
                                  Я пропоную такі заходи щодо популіризації здорового способу життя та профілактики
                                  негативних явищ в молодіжному середовищі :</p>

                              <p className={style.margin}> ·Забезпечення у межах компетенції проведення заходів
                                  профілактичної
                                  антинаркотичної роботи серед підлітків, встановлення соціально-
                                  педагогічного патронату над дітьми, схильними до вживання психотропних
                                  речовин.</p>
                              <p className={style.margin}> ·Проведення круглих столів, науково-практичних
                                  конференцій, семінарів для
                                  педагогів з питань профілактики й запобігання поширенню наркоманії серед
                                  неповнолітніх, пропаганди здорового способу життя, формування практичних
                                  навичок протистояння шкідливому впливу психоактивних речовин.</p>
                              <p className={style.margin}> ·Проведення у закладах загальної середньої освіти
                                  профілактично-
                                  просвітницьких занять, виховних годин, лекцій, екскурсій для учнів з метою
                                  підвищення ефективності попереджувальної роботи з профілактики
                                  розповсюдження наркоманії серед неповнолітніх.</p>
                              <p className={style.margin}> ·Проведення заходів протидії поширенню наркотичної
                                  субкультури.</p>

                          </div>}/>


                    <Work style={ukraine}
                          title={"Національно-патріотичне виховання, утвердження громадської свідомості й активної позиції молоді"}
                          description={<div>

                              <p className={style.justanim}>Програма національно-патріотичного виховання покликана
                                  створити дієву та
                                  ефективну систему виховної роботи в громаді, спрямованої на розвиток
                                  національної свідомості учнів та молоді, пошани до минулого нашої країни,
                                  готовності до дій на захист держави та любові до Батьківщини взагалі.</p>

                              <p className={style.justanim}> ·Проведення акцій, зустрічей, ігор, конкурсів,
                                  фестивалів, засідань за круглим
                                  столом, семінарів, тренінгів, конференцій, форумів, спрямованих на
                                  формування патріотичної свідомості молоді, почуття особистої та
                                  національної гідності.</p>

                              <p className={style.justanim}> ·Проведення заходів, спрямованих на підвищення поваги
                                  молоді до державних
                                  символів України та видатних українців, а також заходів, присвячених
                                  пам'ятним подіям, знаменним і траурним датам історії України та Львівській
                                  області .</p>

                              <p className={style.justanim}> ·Проведення спільно з представниками Національної
                                  поліції України, ДСНС,
                                  Службою швидкої медичної допомоги та іншими службами швидкого
                                  реагування тематичних заходів, спрямованих на здобуття молоддю
                                  необхідних навичок і вмінь, вироблення відповідної поведінки в умовах
                                  надзвичайних ситуацій.</p>

                              <p className={style.justanim}> ·Проведення заходів, спрямованих на підвищення рівня
                                  знань молоді у сфері
                                  законодавства України, правової культури та правової поведінки.</p>

                              <p className={style.justanim}> ·Проведення зустрічей молоді з учасниками бойових дій,
                                  відомими діячами української науки і культури.</p>


                          </div>}/>
                    <Work style={academia1}
                          title={"Академія перших можливостей"}
                          description={
                              <div>
                                  <p className={style.justanim}>
                                      Основною метою Академії перших можливостей є залучення талановитої та вмотивованої
                                      молоді до роботи на державній службі, ознайомлення із специфікою роботи апарату
                                      Львівської обласної державної адміністрації та її структурних підрозділів, набуття
                                      ними практичного досвіду, що сприятиме їх професійному зростанню й успішній
                                      суспільно-політичній діяльності.
                                  </p>
                                  <p className={style.justanim}>Основними завданнями стажування є:</p>

                                  <p className={style.justanim}>ознайомлення з основними аспектами роботи обласної
                                      державної адміністрації, зокрема, з її структурою, функціями та процедурами
                                      прийняття рішень;</p>
                                  <p className={style.justanim}>розвиток професійних навичок та вмінь та здобуття
                                      практичного досвіду у вирішенні конкретних завдань шляхом забезпечення доступу до
                                      навчальних матеріалів та тренінгів;</p>
                                  <p className={style.justanim}>сприяння формуванню соціально-психологічних навичок,
                                      таких як комунікація, особиста ефективність та ефективне спілкування;</p>
                                  <p className={style.justanim}>формування бази даних молодіжного кадрового потенціалу
                                      для подальшого зайняття посад державної служби відповідно до чинного
                                      законодавства;</p>
                                  <p className={style.justanim}>утворення умов для залучення та інтеграції молоді у
                                      процеси державного управління, формування позитивного іміджу Львівської обласної
                                      державної адміністрації.</p>
                                  <p className={style.justanim}>За результатами успішного проходження стажування
                                      видаються сертифікати та за рекомендаціями керівників стажування стажисти
                                      вносяться до бази даних молодіжного кадрового потенціалу Львівської обласної
                                      державної адміністрації.</p>
                                  <img src={pizda} alt="" width="690px" height="400px"/>
                                  <a href="https://www.instagram.com/academy.loda?igsh=NW1jYjNsMzJheW5m" className={style.link}>Посилання на
                                      офіційні джерела</a>

                              </div>
                          }/>

                </div>
            </div>
        </div>
    );
}

export default MyWorks;
