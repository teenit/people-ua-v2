import React, { useState } from 'react'
import s from './FrontPage.module.css'
import FirstScreenForm from '../Forms/FirstScreenForm/FirstScreenForm'
import visionArrow from '../../img/arrow-right.svg'
import buttonArrow from '../../img/arrow-right-white.svg'
import rocket from '../../img/rocket.svg'
import goal from '../../img/goal.svg'
import visionImg from '../../img/vision.svg'
import aboutUsPhoto from '../../img/about-us-photo.png'
import aboutUsArrow from '../../img/read-more.svg'
import DirectionsCard from './DirectionsCard'
import NewsCard from './NewsCard'
import TeamSlider from '../Sliders/TeamSlider/TeamSlider'
import ValuesList from '../ValuesList/ValuesList'

import valuesImg from '../../img/valueList/values.jpg'
import weWantToActImg from '../../img/valueList/weWantToAct.jpeg'
import ourPrinciplesImg from '../../img/valueList/ourPrinciples.jpeg'

import directionsImg1 from '../../img/directions/img1.png'
import directionsImg2 from '../../img/directions/img2.jpeg'
import directionsImg3 from '../../img/directions/img3.jpg'
import directionsImg4 from '../../img/directions/img4.png'
import directionsImg5 from '../../img/directions/img5.png'
import directionsImg6 from '../../img/directions/img6.png'

import teamSliderImg1 from '../../img/teamSlider/img1.png';
import teamSliderImg2 from '../../img/teamSlider/img2.png';
import teamSliderImg3 from '../../img/teamSlider/img3.png';
import teamSliderImg4 from '../../img/teamSlider/img4.png';
import teamSliderImg5 from '../../img/teamSlider/img5.png';

import volunteerImg1 from  '../../img/volunteer/masha.png'
import volunteerImg2 from  '../../img/volunteer/max.png'
import volunteerImg3 from  '../../img/volunteer/sonya.png'
import volunteerImg4 from  '../../img/volunteer/szhenya.png'
import volunteerImg5 from  '../../img/volunteer/varya.png'

import ourPicturesImg1 from '../../img/ourPictures/img1.png'
import ourPicturesImg2 from '../../img/ourPictures/img2.png'
import ourPicturesImg3 from '../../img/ourPictures/img3.png'
import ourPicturesImg4 from '../../img/ourPictures/img4.png'
import ourPicturesImg5 from '../../img/ourPictures/img5.png'
import ourPicturesImg6 from '../../img/ourPictures/img6.png'
import ourPicturesImg7 from '../../img/ourPictures/img7.png'
import ourPicturesImg8 from '../../img/ourPictures/img8.png'
import ourPicturesImg9 from '../../img/ourPictures/img9.png'
import ourPicturesImg10 from '../../img/ourPictures/img10.jpg'
import ourPicturesImg11 from '../../img/ourPictures/img11.jpeg'
import ourPicturesImg12 from '../../img/ourPictures/img12.jpeg'
import ourPicturesImg13 from '../../img/ourPictures/img13.jpeg'
import ourPicturesImg14 from '../../img/ourPictures/img14.jpeg'
import ourPicturesImg15 from '../../img/ourPictures/img15.jpeg'
import ourPicturesImg16 from '../../img/ourPictures/img16.jpeg'
import ourPicturesImg17 from '../../img/ourPictures/img17.jpeg'
import ourPicturesImg18 from '../../img/ourPictures/img18.jpeg'

import newsImg1 from '../../img/news/1-1.jpeg'
import newsImg2 from '../../img/news/1-2.jpeg'
import newsImg3 from '../../img/news/2-1.jpeg'
import newsImg4 from '../../img/news/2-2.jpeg'
import newsImg5 from '../../img/news/3-1.jpeg'
import newsImg6 from '../../img/news/3-2.jpeg'
import newsImg7 from '../../img/news/1-cover.jpeg'
import newsImg8 from '../../img/news/2-cover.jpeg'
import newsImg9 from '../../img/news/3-cover.jpeg'
import PartnersSlider from '../Sliders/PartnersSlider/PartnersSlider'
const FrontPage = () => {
  const valueListsData = {
    ourValues: {
      imgUrl: valuesImg,
      title: "Наші цінності",
      values: ["Свобода", "Гідність", "Справедливість", "Соціальна відповідальність"]
    },
    weWantToAct: {
      imgUrl: weWantToActImg,
      title: "Ми прагнемо діяти",
      values: ["Свідомо", "Цілісно", "Професійно", "Якісно", "На перспективу", "Через взаємовідносини", "Постійно комунікуючи", "Технологічно та сучасно"]
    },
    ourPrinciples: {
      imgUrl: ourPrinciplesImg,
      title: "Наші принципи",
      values: ["Діяти з любов’ю та турботою", "Приймаючи відмінності один одного", "Через повагу до людської гідності", "Як рівний рівному", "З гумором та доброю атмосферою", "В єдності"]
    },
  }

  const directionsData = [
    {
      imgUrl: directionsImg1,
      title: "Надія для сиріт UA",
      description: "Усі проєкти направлені на роботу з дітьми-сиротами, які знаходяться в інтернатних закладах, сім’ях опікунів, прийомних сім’ях або випустилися з них",
      yak: "Через регулярні волонтерські поїздки в дитячі центри міста Києва та побудову дружніх відносин, наставництво, навчальні курси, майстер-класи, курси робототехніки, виїзди Happy Day, івенти і табори.",
      task: "підтримати дитину-сироту, допомогти інтегруватися у суспільство через соціалізацію, профорієнтацію та освіту, а також знайти наставника та турботливу сім’ю задля подальшого розвитку. Усі проєкти направлені на роботу з дітьми-сиротами, які знаходяться в інтернатних закладах, сім’ях опікунів, прийомних сім’ях або випустилися з них.",
    },
    {
      imgUrl: directionsImg2,
      title: "ID Club",
      description: "Усі проєкти направлені на роботу з дітьми, підлітками та їх батьками - з сім’ями, які опинилися у кризовій ситуації через війну",
      yak:"Через курс “7 звичок високоефективних підлітків”, курс “Q-club” (для підлітків 11-14 років), курс “Підготовка до успіху” (для підлітків 15-18 років), Групи надії для батьків, Книжковий клуб",
      task:"підтримати сім’ю та допомогти їй вийти з кризової ситуації через оцінку потреб, складання особистого плану та розвитку. Допомогти дітям та підлітками зрозуміти, хто вони, здобути навички через різноманітні курси, підліткові клуби, а також стати більш сучасними та технологічними."
    },
    {
      imgUrl: directionsImg3,
      title: "IT Club",
      description: "Усі проєкти направлені на роботу з дітьми, підлітками та молоддю, які прагнуть отримати розвинутий досвід володіння комп’ютером або бажають стати IT-спеціалістами та готові працювати для досягнення цієї мети",
      yak:"Через навчання базовим комп’ютерним навичкам, програмуванню, веб-дизайну, анімації, робототехніці, віртуальній реальності та штучному інтелекту. ",
      task:"надати учням необхідні в сучасному світі навички користування комп’ютером і гаджетами задля майбутнього легшого та швидшого працевлаштування, поглиблення в сучасні IT знання, а також інтеграції новітніх технологій в їх життя. "
    },
    {
      imgUrl: directionsImg4,
      title: "Молодіжний центр ВПО",
      description: "Усі проєкти направлені на роботу з внутрішньо-переміщеними студентами, викладачами та іншою молоддю ВПО",
      yak:"Через підтримку студентів ВПО, залучення молоді в громадянське суспільство, школу волонтерів, коробки гум. допомоги в гумштабі ТНУ",
      task:"підтримати внутрішньо переміщену молодь через особисті зустрічі та групи взаємодії, гуманітарну допомогу, просвітницьку діяльність та залучення до волонтерства. "
    },
    {
      imgUrl: directionsImg5,
      title: "Підтримка UA під час кризи",
      description: "Усі проєкти направлені на психологічну підтримку сімей, дітей та молоді",
      yak:"Через Ресурсний центр, Case Manager Pro, ТОВД - підхід, анкетування, індивідуальні та групові консультації, психологічну допомогу, Групи надії в кризовій ситуації, діагностування",
      task:"допомогти вирішити проблеми психологічного характеру через оцінку потреб, зустрічі з психологом, групи підтримки, побудову дитячо-батьківських відносин, арт-терапію та інше. "
    },
    {
      imgUrl: directionsImg6,
      title: "Коаліція “Київ без сиріт”",
      description: "Усі проєкти направлені на спонукання партнерів до сумісної роботи задля досягнення спільних цілей у місті Києві",
      yak:"Через конференції, спільні зустрічі та круглі столи, презентації, просвітницьку діяльність",
      task:"залучити організації, вищі навчальні заклади, волонтерів та ресурсні сім’ї в сумісну роботу задля подолання сирітства в місті Києві."
    },
  ]
  const newsData = [
    {
      imgUrl: newsImg7,
      title: "Про волонтерів",
      description: "Школа волонтерів і святкування Дня волонтера 5 грудня",
      fullDescription: [{
        img:newsImg1,
        text:"Грудень 2023 - місяць підбиття підсумків та вираження подяки тим, хто був з нами та допомагав протягом всього цього року, а деякі навіть останніх двох важких років. Тому 5 грудня, на Міжнародний День Волонтера, ГО ЛЮДИ ЮЕЙ за підтримки Української Волонтерської Служби та Дитячого фонду ООН (ЮНІСЕФ) в Україні, провели п'яту підсумовуючу зустріч, на яку було запрошено 16 людей в рамках нашої Школи Волонтерів. На цій зустріч ми святково вшанували діяльність волонтерів і нагородили їх грамотами та подарунками."
      },
      {
        img:newsImg2,
        text:"Дуже класно, що наші волонтери вміють не тільки допомагати дітям і сім’ям, але й навчатися тому, як це робити якісно, сфокусовано та систематично. Саме ці риси відрізняють справжніх постійних волонтерів, завдяки яким було проведено біля 400 різних якісних розвивальних, підтримуючих, розважальних, а в певних випадках і з видачею гуманітарної допомоги, зустрічей та заходів. Цими заходами ми змогли допомогти біля 200 людей нашої цільової аудиторії на регулярній основі протягом року. А ще провели інтерактивний міні-тренінг з антивигорання, де залучений спеціаліст поділився цінними порадами та техніками самодопомоги. Це було надзвичайно корисно для кожного, хто присвячує себе допомозі іншим з можливістю використовувати ці навички в повсякденному житті. Також на заході був смачний стіл та дружня атмосфера. Ми щиро дякуємо кожному, хто долучився до цього заходу та підтримує наші зусилля. Ви робите величезну справу, допомагаючи та вносячи позитивні зміни в життя інших. До зустрічі на наступних заходах у новому 2024 році."
      }
    ]
    },
    {
      imgUrl: newsImg8,
      title: "Про маяк",
      description: "Ми повернулися в Маяк: провели курс 7 звичок, 2 літніх табори, 8 «хеппі деїв», 15 уроків робототехніки та загалом 120 різноманітних заходів і зустрічей",
      fullDescription: [{
        img:newsImg4,
        text:"Протягом 2023 року ГО ЛЮДИ ЮЕЙ багато працювала в Центрі соціально-психологічної реабілітації дітей №1 (Маяк) на Троєщині. За цей час силами більше 20 волонтерів було проведено близько 120 зустрічей для 100 дітей та підлітків. Під час цих зустрічей нами було проведено оцінку потреб, курси «7 звичок високоефективних підлітків» та «Уроки самостійності», 2 літніх табори, а також 12 поїздок в рамках проєкту з мотивації, соціалізації та нагородження дітей «Happy Day» (в McDonald`s, KFC та інші цікаві місця). Перед кожним заняттям ми проводимо футбольний матч і різноманітні інтерактиви на свіжому повітрі, аби на заняттях діти були бадьорими та веселими в такий складний час."
      },
      {
        img:newsImg3,
        text:"Також з вересня цього року ми, разом з нашими партнерами, запровадили уроки з робототехніки і на сьогоднішній день провели вже 15 зустрічей. Дітлахи навчилися збирати та програмувати різноманітних роботів. Це дуже сучасно та круто! За цей час з Маяка випустилися 15 хлопців і дівчат, а також 13 - повернулися до біологічних або прийомних сімей. У деяких дітей з’явилися наставники та постійні волонтери. З 2024 року ми будемо впроваджувати підхід Терапії, основаній на взаємовідносинах довіри, а зараз, наприкінці грудня, провели дуже круту підсумовуючи зустріч з конкурсами, танцями та подарунками для всіх дітей та вихователів центру. Цей рік для нас і наших підопічних був дуже насиченим і корисним!"
      }
    ]    },
    {
      imgUrl: newsImg9,
      title: "Про клуби",
      description: "Всі наші клуби ID та IT: підсумки нашої роботи з дітьми, підлітками, молоддю та батьками за останні 2 роки",
      fullDescription: [{
        img:newsImg6,
        text:"На початку повномасштабної війни ми допомогли великій кількості людей, з якими вже минулої весни, започаткували різні клуби та групи підтримки для дітей, підлітків, молоді та їх батьків. За цей час було проведено близько 200 занять з IT, а саме базових комп’ютерних навичок, програмування, веб-дизайну та анімації, а також близько 250  зустрічей з ID, а саме курси “7 звичок високоефективних підлітків”, “Підготовка до успіху, “Q club” (розвиток різних типів інтелекту), групи надії для батьків та групи підтримки для студентів ВПО."
      },
      {
        img:newsImg5,
        text:"Також ми провели багато інших івентів, літніх таборів та пікніків, на яких продовжуємо вибудовувати дружні відносини та постійну комунікацію з дітьми, підлітками, молоддю та їх батьками, надаючи комплексну та систематичну підтримку їх сім’ям. Вони вдячні нам за розвиток, а ми їм - за зусилля. Маємо надію, що в наступному 2024 році, ми продовжимо вкладатися в нове покоління українських дітей. Разом - ми сила!"
      }
    ]
    },
  ]
  const teamSliderData = {
    team: {
      title: "наша команда",
      data: [
        {
          imgUrl: teamSliderImg1,
          name: 'Андрій Видрін',
          status: 'Адміністратор ГО'
        },
        {
          imgUrl: teamSliderImg2,
          name: 'Дмитро Малашко',
          status: 'Засновник'
        },
        {
          imgUrl: teamSliderImg3,
          name: 'Павло Мельников',
          status: 'Засновник, директор'
        },
        {
          imgUrl: teamSliderImg4,
          name: 'Лілія Малашко',
          status: 'Залучена спеціалістка, психологиня'
        },
        {
          imgUrl: teamSliderImg5,
          name: 'Данило Малашко',
          status: 'Залучений спеціаліст, викладач'
        },

      ]
    },
    volunteers: {
      title: "наші волонтери",
      data: [
        {
          imgUrl: volunteerImg3,
          name: 'Софія',
        },
        {
          imgUrl: volunteerImg2,
          name: 'Макс',
        },
        {
          imgUrl: volunteerImg1,
          name: 'Марія',
        },
        {
          imgUrl: volunteerImg5,
          name: 'Варя',
        },
        {
          imgUrl: volunteerImg4,
          name: 'Євгенія',
        },


      ]
    },
  }

  const ourPicturesData = [ourPicturesImg1, ourPicturesImg2, ourPicturesImg3, ourPicturesImg4, ourPicturesImg5, ourPicturesImg6, ourPicturesImg7, ourPicturesImg8, ourPicturesImg9, ourPicturesImg10, ourPicturesImg11, ourPicturesImg12, ourPicturesImg13, ourPicturesImg14, ourPicturesImg15,ourPicturesImg16,ourPicturesImg17,ourPicturesImg18]
  const [vision, setVision] = useState({
    vision: true,
    mission: true,
    goals: true
  })
  const aboutUsText = "В центрі нашої роботи знаходяться постійні взаємовідносини та довгострокові взаємодії за окремими кейсами дітей, сімей та молоді, а також групами підтримки і розвитку. Кінцевою задачею нашої організації є свідомість, незалежність, якість та відповідальність людей, з якими ми працюємо. Чи то сім’я СЖО або ВПО, чи то дитина-сирота або випускник інтернату -  ми даємо можливість кожному отримувати підтримку та допомогу, розвиватися та опановувати нові навички, брати участь в проєктах ГО і громадянському суспільстві загалом, а також ставати самодостатніми завдяки нашим співробітникам, волонтерам і партнерам. Наша основна задача - підтримати людину у складний період та допомогти їй вийти із нього спроможною та розвинутою. Також ми намагаємося ділитися європейськими цінностями і принципами, але й не забуваємо про наше українське коріння."
  const [readMore, setReadMore] = useState(false)
  const [showAllPhotos, setShowAllPhotos] = useState(false)
  const [ourPicturesState, setOurPicturesState] = useState(ourPicturesData.slice(0,9))
  return (
    <div className={s.wrap}>
      <div className={s.inner}>
        <div className={s.first__screen__wrap}>
          <div className={s.first__screen__inner}>
            <div className={s.first__screen__info__wrap}>
              <div className={s.first__screen__info__inner}>
                <p style={{ fontSize: "24px", fontFamily: "Kyiv Region" }}>ГРОМАДСЬКА<br />
                  ОРГАНІЗАЦІЯ<br />
                  ЛЮДИ ЮЕЙ<br />
                  місто Київ
                </p>
                <div>
                  <p className={s.big__size}>Закладаємо фундамент нового українського суспільства</p>
                  <p className={s.middle__size}>Використовуючи систематичний, комплексний та індивідуальний підхід до допомоги, підтримки і розвитку дітей, сімей та молоді в громадах</p>
                </div>
              </div>
            </div>
            <FirstScreenForm />
          </div>
        </div>



        <div className={s.vision__wrap}>
          <div className={s.vision__card__split}>

            {vision.vision ?
              <div className={`${s.vision__card} ${s.vision__card__desc}`} onClick={() => {
                // setVision({ ...vision, vision: !vision.vision, mission: vision.mission, goals: vision.goals })
              }}>
                <div className={`${s.vision__card__content} ${s.vision__desc}`}>
                  <p className={s.title__vision}>наше бачення</p>
                  <p>Діти зростають в турботливих сім'ях, навчаються бути розвинутою молоддю і свідомо долучаються до формування нового українського суспільства</p>
                  {/* <div className={s.vision__arrow__wrap}>
                    <img src={visionArrow} alt="" />
                  </div> */}
                </div>
              </div>
              :
              <div className={s.vision__card} onClick={() => {
                setVision({ ...vision, vision: !vision.vision, mission: vision.mission, goals: vision.goals })
              }}>
                <div className={s.vision__card__content}>
                  <div className={s.vision__card__info}>
                    <div className={s.vision__img__wrap}>
                      <img src={visionImg} alt="" />
                    </div>

                    <p>наше бачення</p>
                  </div>

                  {/* <div className={s.vision__arrow__wrap}>
                    <img src={visionArrow} alt="" />
                  </div> */}
                </div>
              </div>

            }
            {vision.mission ?
              <div className={`${s.vision__card} ${s.vision__card__desc}`} onClick={() => {
                // setVision({ ...vision, vision: vision.vision, mission: !vision.mission, goals: vision.goals })
              }}>
                <div className={`${s.vision__card__content} ${s.vision__desc}`}>
                  <p className={s.title__vision}>наша місія</p>
                  <p>Залучення волонтерів, професіоналів, наставників, спроможних сімей та партнерів задля впливу на дітей, молодь, батьків та суспільство в цілому
                  </p>
                  {/* <div className={s.vision__arrow__wrap}>
                    <img src={visionArrow} alt="" />
                  </div> */}
                </div>
              </div>
              :
              <div className={s.vision__card} onClick={() => {
                setVision({ ...vision, vision: vision.vision, mission: !vision.mission, goals: vision.goals })
              }}>
                <div className={s.vision__card__content}>

                  <div className={s.vision__card__info}>
                    <div className={s.vision__img__wrap}>
                      <img src={rocket} alt="" />
                    </div>
                    <p>наша місія</p>
                  </div>
                  {/* <div className={s.vision__arrow__wrap}>
                    <img src={visionArrow} alt="" />
                  </div> */}
                </div>
              </div>

            }


          </div>
          {vision.goals ?
            <div className={`${s.vision__card} ${s.vision__card__desc}`} onClick={() => {
              // setVision({ ...vision, vision: vision.vision, mission: vision.mission, goals: !vision.goals })
            }}>
              <div className={`${s.vision__card__content} ${s.vision__desc}`}>
                <p className={s.title__vision}>наші цілі</p>
                <ul>
                  <li>Сприяння тому, щоб усі діти жили у турботливих родинах</li>
                  <li>Надання допомоги, підтримки та захисту прав дітей, сімей та молоді</li>
                  <li>Заохочення їх до всебічного розвитку та участі в громадянському суспільстві</li>
                  <li>Поширення серед них українських і сімейних цінностей, духовності та здорового способу життя</li>
                </ul>

                {/* <div className={s.vision__arrow__wrap}>
                  <img src={visionArrow} alt="" />
                </div> */}
              </div>
            </div>
            :
            <div className={s.vision__card} onClick={() => {
              setVision({ ...vision, vision: vision.vision, mission: vision.mission, goals: !vision.goals })
            }}>
              <div className={s.vision__card__content}>
                <div className={s.vision__card__info}>
                  <div className={s.vision__img__wrap}>
                    <img src={goal} alt="" />
                  </div>
                  <p>наші цілі</p>
                </div>
                <div className={s.vision__arrow__wrap}>
                  <img src={visionArrow} alt="" />
                </div>
              </div>
            </div>

          }
        </div>

        <ValuesList data={valueListsData.ourValues} />



        <div className={s.directions__wrap}>
          <h2 className={s.title} id='ourDirections' >Основні напрями нашої діяльності</h2>
          <div className={s.directions__cards__wrap}>
            {directionsData.map((item, index) => {
              return (
                <DirectionsCard key={index} data={item} />

              )
            })}

          </div>
        </div>



        <button className={s.more__about__button}>
          <div className={s.more__about__button__inner}>
            {/* <span>Більше про допомогу</span>
            <div className={s.more__about__button__arrow__wrap}>
              <img src={buttonArrow} alt="" />
            </div> */}
          </div>
        </button>

        <div className={s.about__us__wrap}>
          <div className={s.about__us__info}>
            <h2 className={s.title}>Про нас</h2>
            <p>{readMore || window.innerWidth >= 1000 ? aboutUsText : aboutUsText.slice(0, 400) + '...'}</p>
            {window.innerWidth < 1000 && (<div className={`${s.about__us__img__wrap} ${readMore && (s.about__us__img__wrap__rotated)}`} style={{ cursor: 'pointer' }}>
              <img src={aboutUsArrow} alt="" onClick={() => {
                setReadMore(!readMore)
              }} />
            </div>)}
            {/* <button className={s.yellow__button}>Детальніше</button> */}
          </div>

          <div className={s.about__us__img__wrap}>
            <img src={aboutUsPhoto} alt="Про нас" id='aboutUs'/>
          </div>
        </div>

        <ValuesList data={valueListsData.weWantToAct} />


        <TeamSlider teamSliderData={teamSliderData.team} />


        <div className={s.our__pictures__wrap}>
          <h2 className={s.title} id='our__pictures__title'>наші світлини</h2>
          <div className={s.our__pictures__inner}>
            <div className={s.our__pictures__grid}>
              {ourPicturesState.map((item, index) => {
                return (
                  <div key={index} className={s.our__pictures__grid__picture__wrap}>
                    <img src={item} alt={`Світлина ${index+1}`} />
                  </div>
                )
              })}
            </div>
            <button className={s.yellow__button} onClick={() => {
              setShowAllPhotos(!showAllPhotos)
              if (showAllPhotos) {
                setOurPicturesState(ourPicturesData.slice(0, 9))
              } else {
                setOurPicturesState(ourPicturesData)
              }
              if (showAllPhotos) {
                document.getElementById("our__pictures__title").scrollIntoView({ block: 'start', behavior: 'smooth' })
              }
            }}>{showAllPhotos ? "Згорнути" : "Детальніше"}</button>
          </div>
        </div>

        <PartnersSlider />

        <ValuesList data={valueListsData.ourPrinciples} />
        <TeamSlider teamSliderData={teamSliderData.volunteers} addClass={s.volunteers__slider} />
        <div className={s.directions__wrap}>
          <h2 className={s.title}>Наші новини</h2>
          <div className={s.news__cards__wrap}>
            {newsData.map((item, index) => {
              return (
                <NewsCard key={index} data={item} />

              )
            })}

          </div>
        </div>

      </div>
    </div>
  )
}

export default FrontPage