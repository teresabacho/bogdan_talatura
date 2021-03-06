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
import tree_plant from "../assets/images/plant-tree.jpg";
import goods from "../assets/images/chellendzh-dobryh-sprav-support-people-deeds.12@2x.jpeg";
import popular from "../assets/images/popular.jpg";
import together from "../assets/images/together.png";
import year from "../assets/images/30yaer.jpg";
import friends_withbenefits from "../assets/images/polular2.jpg";
import real1 from "../assets/images/real.jpg";
import money from "../assets/images/money.jpg";
import academ from "../assets/images/academ.jpg"

function MyWorks() {
    const first = {
        backgroundImage: `url(${loda})`,
    }
    const social1 = {
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
    const cash = {
        backgroundImage: `url(${money})`,
    }
    const academia = {
        backgroundImage: `url(${academ})`,
    }


    return (
        <div id={"projects"} className={style.myWorksBlock}>
            <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
                <div className={styleTitle.title}>
                    <h2>Заходи</h2>
                </div>
                <div className={style.myWorks}>
                    <Work style={first}
                          title={"Можливості розвитку молодіжної ради при ЛОДА"}
                          description={
                              <div>
                                  <p className={style.margin}>· Участь молодіжної ради з обміну досвідом та
                                      пропозиціями</p>
                                  <p className={style.margin}>
                                      Провести детальний аналіз молодіжних рад у Львівський області , зібрати
                                      круглий з
                                      їхніми уповноваженими представниками , обмінятися досвідом щодо МР та
                                      обговорити план розвитку МР на Львівщині і затвердити стратегічний план
                                      створення ,і проведення заходів разом з ними</p>
                                  <p className={style.margin}>· Проведення інформаційного заходу щодо створення та
                                      подання проєктів</p>
                                  <p className={style.margin}> Провести тренінг для учасників МР. На цьому тренінгу
                                      буде розказано що таке МР ,
                                      правильне бачення щодо її розвитку , як правильно створювати та подавати
                                      проєкти
                                      на розгляд у МР і як їх реалізувати , детальна стратегія розвитку молоді у
                                      Львівській
                                      області</p>
                                  <p className={style.margin}>· Аналіз і експертна оцінка нормативних актів
                                      Львівської
                                      обласної державної
                                      адміністрації щодо питань зайнятості молоді.</p>
                                  <p className={style.margin}>· Вивчення потреб молоді в громаді та швидке
                                      реагування
                                      щодо їх усунення.
                                      Організація опитування
                                      Формати можуть бути різними, в залежності від поставленої мети вивчення</p>
                                  <p className={style.margin}>
                                      Внесення пропозицій до Програми молодіжної роботи та підготовка спільно з
                                      депутатами проєкту рішення на сесію</p>
                                  <p className={style.margin}>· Участь представників Молодіжної ради в сесіях
                                      обласної ради (не менше трьох разів)</p>
                              </div>}
                    />
                    <Work style={social1}
                          title={"Інформування про діяльність молодіжної ради (зовнішня комунікація)"}
                          description={<div>
                              <p className={style.margin}> У час глобального розвитку мережі Інтернет ефективне
                                  використання можливостей, що вона
                                  відкриває, може стати вирішальним чинником успішності більшості починань.
                                  Більшість
                                  українців очікують, що зможуть отримати необхідну їм інформацію в он-лайн режимі.
                                  Через що я вважаю, що для популяризації молодіжної ради , ми маємо створити
                                  зовнішню
                                  комунікацію з прихильниками.</p>
                              <p className={style.justanim}>Зовнішня комунікація буде відбуватися у такі способи
                                  :</p>
                              <p className={style.justanim}> • Створення публічної сторінки молодіжної ради в
                                  соціальних мережах (Instagram, Facebook, Telegram)</p>
                              <p className={style.justanim}>• Створення профільної сторінки про Молодіжну раду на
                                  офіційному сайті адміністрації</p>
                              <p className={style.justanim}> • Системне висвітлення інформації про діяльність
                                  молодіжної ради (огляд діяльності та подій за місяць/квартал)</p>
                              <p className={style.justanim}>• Інформування через доступні канали інформації про
                                  діяльність молодіжної ради, анонси та події для молоді в громаді та за її межами,
                                  потреби, можливості розвитку для молоді</p>

                          </div>}/>
                    <Work style={tree}
                          title={"Акція «Посади дерево» "}
                          description={<div>
                              <p className={style.margin}>Проведемо всеобласну акцію за підтримки Львівської
                                  обласної державної адміністрації
                                  спільно з молодіжною радою по області по висадженню дерев на території Львівської
                                  області</p>
                              <p className={style.justanim}> Ця акція проходитиме у три етапи:</p>
                              <p className={style.justanim}> 1 етап – буде визначено території висадження та період
                                  проведення акції</p>
                              <p className={style.justanim}>2 етап - буде проведений інструктаж щодо висадки</p>
                              <p className={style.justanim}> 3 етап – підготовка і збір усіх охочих долучитися до
                                  цієї акції</p>

                          </div>}/>

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
                              <p className={style.margin}> ·Проведення у закладах загальної середньої освіти профілактично-
                                  просвітницьких занять, виховних годин, лекцій, екскурсій для учнів з метою
                                  підвищення ефективності попереджувальної роботи з профілактики
                                  розповсюдження наркоманії серед неповнолітніх.</p>
                              <p className={style.margin}> ·Проведення заходів у рамках:
                                  Всеукраїнських тижнів «Ми – за здоровий спосіб життя» (листопад, квітень);
                                  Всесвітнього дня боротьби зі СНІДом (01 грудня);
                                  Всесвітнього дня померлих від СНІДу (3 неділя травня);
                                  Всесвітнього дня боротьби з наркоманією (26 червня);
                                  Всесвітнього дня безпечного Інтернету (06 лютого).</p>
                              <p className={style.margin}> ·Створення системи інформаційно-просвітницької роботи з
                                  проблем
                                  формування здорового способу життя.</p>
                              <p className={style.margin}> ·Змістовне оновлення профілактичної роботи з метою
                                  формування в
                                  молодіжному середовищі захисних соціальних бар’єрів і готовності
                                  протистояти ризикам, здорового способу життя, залучення молоді до
                                  суспільно корисної праці, розширення кола життєвих інтересів, не пов’язаних
                                  із вживанням наркотиків, алкоголю, тютюнопалінням та іншими шкідливими
                                  звичками.</p>
                              <p className={style.margin}> ·Проведення заходів протидії поширенню наркотичної
                                  субкультури.</p>

                          </div>}/>
                    <Work style={good}
                          title={"Естафета добрих справ"}
                          description={<div>
                              <p className={style.margin}> В сучасному суспільстві залишається все менше і менше
                                  людей, яким притаманна така якість, як доброта. Люди стали байдужими і байдужими
                                  до чужих бід.
                                  Я вважаю, що без добра неможливо жити і вірю в те , що всі добрі вчинки
                                  обов’язково повернуться, позитивно вплинуть на подальше життя людини.
                                  Тому у челенджі добрих справ передбачається таких заходів:</p>

                              <p className={style.margin}> Проведення благодійних книжкових ярмарок</p>

                              <p className={style.margin}> Організовування зборів книг для шкільних бібліотек</p>

                              <p className={style.margin}> Прибирання територій по Львівській області, які цього
                                  потребують</p>
                              <p className={style.margin}> (Буде проведений аналіз місцевості і після цього буде
                                  визначено територію яку
                                  волонтери і учасники МР будуть прибирати цю місцевість)</p>

                              <p className={style.margin}> Облагороджування територій по Львівській області які
                                  цього потребують
                                  (Буде проведений детальний аналіз локацій і після цього буде визначено територію
                                  яку волонтери і учасники МР будуть облагороджувати)</p>


                          </div>}/>
                    <Work style={get_together}
                          title={"Проект «Очищаймо разом»"}
                          description={<div>

                              <p className={style.margin}> Кожен із нас – це часточка всього живого на Землі, і саме
                                  від нас залежить, яку
                                  природу ми передамо у спадок своїм нащадкам.</p>
                              <p className={style.margin}> Глобальне знищення природи – то лише побічний результат
                                  згубної діяльності
                                  суспільства. Екологічна драма розгортається на наших очах. Ми бачимо забруднення
                                  води,
                                  повітря, навколишнього довкілля і, розуміємо, що це дуже серйозно. Екологічна
                                  ситуація
                                  вже близька до критичної. Потрібні нові ідеї, зусилля і головне бажання, щоб
                                  зупинити
                                  катастрофу.</p>
                              <p className={style.justanim}> Тому я пропоную втілити у життя такі заходи :</p>
                              <p className={style.justanim}> • Екотолоки</p>
                              <p className={style.justanim}> • Промо-акції з популяризації роздільного збору сміття
                              </p>
                              <p className={style.justanim}> • Екологічні заняття у дошкільних навчальних закладах з
                                  метою поширення знань про
                                  захист довкілля</p>


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

                              <p className={style.justanim}> ·Здійснення інформаційного забезпечення заходів щодо
                                  патріотичного
                                  виховання.
                                  створення Інтернет-сторінок, що популяризуватимуть українську історію, мову та
                                  культуру, досвід роботи з національно-патріотичного виховання;</p>

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
                                  у тому числі в зоні
                                  АТО, відомими діячами української науки і культури.</p>


                          </div>}/>
                    <Work style={friends}
                          title={"Сприяння організації змістовного дозвілля, підтримка талановитої та обдарованої молоді, реалізація молодіжних ініціатив"}
                          description={<div>
                              <p className={style.justanim}>Буде створена робоча група по питаннях молоді від МР при
                                  ЛОДА , яка буде
                                  комунікувати з молоддю щодо їхніх проблем , дослухатися до їх рекомендації щодо
                                  діяльності МР та на конкурсній основі реалізувати 1 проект за рік .
                                  Будуть реалізовані всеобласні освітні конкурси за участі всіх районів у Львівській
                                  області та молодіжних рад (тематика освітніх конкурсів буде розглядатися на сесіях
                                  МР)</p>


                          </div>}/>
                    <Work style={real}
                          title={"Реалізація державної політики в сфері роботи з молоддю шляхом сприяння\n" +
                          "створенню і діяльності в Львівській області молодіжних центрів\n"}
                          description={<div>
                              <p className={style.justanim}> До складу Львівської області входить 7 районів:
                                  Львівський, Дрогобицький,
                                  Червоноградський, Стрийський, Самбірський, Золочівський, та Яворівський райони.
                                  Потрібно провести детальний аналіз молодіжних центрів у вище перелічених
                                  районах</p>
                              <p className={style.justanim}> Якщо молодіжні центри відсутні , то вияснити чому так ,
                                  обговорити з
                                  представниками МР у районах що їм потрібно і за підтримки районних адміністрацій
                                  посприяти їх створенню</p>
                              <p className={style.justanim}> Також за підтримки Львівського обласного молодіжного
                                  центру створити Дитячі
                                  клуби ( 4-17 років ), створити місця як територіально так і обєктно де будуть
                                  реалізовуватися дитячі клуби тому що це посприяє правильному формуванню
                                  свідомості дітей. Таким методом ми превентивно запобігаємо в майбутньому
                                  становлення їх на неправильний шлях життя тобто вживання наркотиків , вживання
                                  алкогольних напоїв та паління тому що вище перелічені речі починається у
                                  дитячому - підлітковому періоді і переслідуватиме їх на протязі всього їх
                                  життя.</p>
                              <p className={style.justanim}> • Реалізуємо дитячі гуртки і секції</p>
                              <p className={style.justanim}> • Створимо дитячі бібліотеки у дитячих клубах</p>
                              <p className={style.justanim}>• Проводитимо регулярно різні майстер класи</p>
                              <p className={style.justanim}>• Створимо різні дитячі гуртки по їх інтересах</p>


                          </div>}/>
                    <Work style={cash}
                          title={"Здобуття молодими людьми знань, навичок та інших компетентностей поза\n" +
                          "системою освіти, розвиток неформальної освіти, молодіжної наукової діяльності\n"}
                          description={<div>


                              <p className={style.justanim}> Створення та проведення різних систематичних курсів та
                                  тренінгів за різним
                                  фаховим спрямуванням і впровадження нових систем неформальної освіти
                                  FinGram – це новітня програма розроблена мною та моєю командою для розвитку
                                  школярів у сфері економіки</p>
                              <p className={style.justanim}> Цей проект буде реалізовано у форматі офлайн/онлайн
                                  школи за підтримки ЛОДА або у форматі подкасту і розміщених на таких платформах як
                                  YouTube, TikTok, Instagram</p>
                              <p className={style.justanim}> Цей проект передбачає навчанню школярів основ
                                  банківської системи, подакової
                                  системи та юридичної бази , щоб на момент настання їх неповної дієздатності, вони
                                  могли здійснювати операції у цих сферах і були ознайомлені зі всіма тонкощами їх
                                  роботи</p>


                          </div>}/>

                    <Work style={academia}
                          title={"Стажування у Львівській обласній державній адміністрації"}
                          description={
                              <div>
                                  <p className={style.justanim}>
                                      Держава не може розвиватися без підтримки молоді, а молодь – реалізуватися,
                                      об’єднуватися в соціумі без відповідних дій з боку уряду.
                                      Перед нами була поставлена непроста задача щодо вище зазначених цілей , проте
                                      ми з командою готові вам представити одне із наших рішень і це стажування у
                                      Львівській обласній державній адміністрації.

                                  </p>

                                  <p className={style.justanim}> Що являє собою програма стажування у
                                      ЛОДА? Це “Академія перших можливостей” я
                                      ка спрямована на реалізацію молоді та долучення її до процесів роботи
                                      адміністрації.</p>

                                  <p className={style.justanim}>Академія перших можливостей пропонує тобі :</p>
                                  <p className={style.justanim}>•Пройти стажування у Львівській обласній державній
                                      адміністрації</p>
                                  <p className={style.justanim}>•Ознайомитися та приєднатися до успішної та
                                      компетентної команди Львівської обласної державної адміністрації</p>
                                  <p className={style.justanim}>•Перевірити себе на стійкість в роботі з
                                      професіоналами , проявити лідерські якості, втілити свої ідеї.</p>
                                  <p className={style.justanim}>•Активне включення в розвиток власної громади</p>
                                  <p className={style.justanim}>•Отримання диплому про успішне завершення “Академії
                                      перших можливостей”</p>

                                  <p className={style.justanim}>Термін стажування</p>
                                  Стажування триватиме 3 місяці із гнучким графіком та можливим подальшим
                                  працевлаштуванням

                                  <p className={style.justanim}>•Структурні підрозділи де ти матимеш змогу проявити
                                      себе і пройти стажування:</p>
                                  <p className={style.justanim}>•Департамент фінансів</p>
                                  <p className={style.justanim}>•Департамент агропромислового розвитку</p>
                                  <p className={style.justanim}>•Департамент економічної політики</p>
                                  <p className={style.justanim}>•Департамент соціального захисту населення</p>
                                  <p className={style.justanim}>•Департамент міжнародної технічної допомоги та
                                      міжнародного співробітництва</p>   <p className={style.justanim}> Департамент
                                  комунікацій та внутрішньої політики</p>
                                  <p className={style.justanim}>•Департамент з питань цивільного захисту</p> <p
                                  className={style.justanim}>•Департамент охорони здоров’я</p>
                                  <p className={style.justanim}>•Департамент екології та природних ресурсів</p>
                                  <p className={style.justanim}>•Департамент архітектури та розвитку
                                      містобудування</p>
                                  <p className={style.justanim}>•Департамент освіти і науки</p>
                                  <p className={style.justanim}>•Департамент розвитку та експлуатації
                                      житлово-комунального господарства</p>
                                  <p className={style.justanim}>•Управління господарсько-технічного забезпечення</p>
                                  <p className={style.justanim}>•Управління туризму та курортів</p>
                                  <p className={style.justanim}>•Департамент з питань культури, національностей та
                                      релігій</p>
                                  <p className={style.justanim}>•Управління молоді та спорту</p>
                                  <p className={style.justanim}>•Департамент дорожнього господарства</p>
                                  <p className={style.justanim}>•Департамент паливно-енергетичного комплексу,
                                      енергоефективності та житлово-
                                      комунального господарства</p>
                                  <p className={style.justanim}>•Управління капітального будівництва</p>
                                  <p className={style.justanim}>•Державний архів Львівської області</p>
                                  <p className={style.justanim}>•Управління транспорту та зв'язку</p>
                                  <p className={style.special}> Що тобі потрібно для проходження стажування у
                                      Львівській обласній державній адміністрації:</p>
                                  <p className={style.justanim}>•Заповнити анкету за <a className={style.link}
                                                                                        href="https://docs.google.com/forms/d/1PhGRuG_-zlK4tH57Wqe4YkhFYc-7hOT8HSjiWxEdaoI/edit?usp=sharin">посиланням </a>
                                  </p>
                                  <p className={style.justanim}>• Чекай дзвінка — запрошення</p>
                                  <p className={style.justanim}>• Відвідай настановче навчання від куратора
                                      стажування у ЛОДА</p>
                                  <p className={style.justanim}>•Обери напрям стажування (структурний підрозділ)</p>
                                  <p className={style.justanim}>• Пройди індивідуальну співбесіду</p>
                                  <p className={style.justanim}>• Долучайся до команди Львівської обласної державної
                                      адміністрації</p>

                              </div>
                          }/>


                </div>
            </div>
        </div>
    );
}

export default MyWorks;