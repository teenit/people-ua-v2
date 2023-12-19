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
import TeamSlider from '../Sliders/TeamSlider/TeamSlider'
import ValuesList from '../ValuesList/ValuesList'

import valuesImg from '../../img/valueList/values.png'
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

import ourPicturesImg1 from '../../img/ourPictures/img1.png'
import ourPicturesImg2 from '../../img/ourPictures/img2.png'
import ourPicturesImg3 from '../../img/ourPictures/img3.png'
import ourPicturesImg4 from '../../img/ourPictures/img4.png'
import ourPicturesImg5 from '../../img/ourPictures/img5.png'
import ourPicturesImg6 from '../../img/ourPictures/img6.png'
import ourPicturesImg7 from '../../img/ourPictures/img7.png'
import ourPicturesImg8 from '../../img/ourPictures/img8.png'
import ourPicturesImg9 from '../../img/ourPictures/img9.png'

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
      values: ["Професійно", "Цілісно", "Якісно", "Через взаємовідносини", "На перспективу", "Постійно комунікуючи", "Технологічно та сучасно", "Як рівний рівному"]
    },
    ourPrinciples: {
      imgUrl: ourPrinciplesImg,
      title: "Наші принципи",
      values: ["Діяти з любов’ю та турботою", "Поважаючи відмінності один одного", "Через повагу до людської гідності", "З гумором та доброю атмосферою", "В єдності"]
    },
  }

  const directionsData = [
    {
      imgUrl: directionsImg1,
      title: "Надія для сиріт UA",
      description: "Дружні відносини, наставництво, навчальні курси, робототехніка, Happy Day, івенти, табори",
      fullDescription:"Задача: підтримати дитину-сироту, допомогти інтегруватися у суспільство через соціалізацію, профорієнтацію та освіту, а також знайти наставника та турботливу сім’ю задля подальшого розвитку. Усі проєкти направлені на роботу з дітьми-сиротами, які знаходяться в інтернатних закладах, сім’ях опікунів, прийомних сім’ях або випустилися з них. Як? Через регулярні волонтерські поїздки в дитячі центри міста Києва та побудову дружніх відносин, наставництво, навчальні курси, майстер-класи, курси робототехніки, виїзди Happy Day, івенти і табори."
    },
    {
      imgUrl: directionsImg2,
      title: "ID Club",
      description: "Q-club (для підлітків 11-14 років), Клуб “Підготовка до успіху” (для підлітків 15-18 років), Групи надії для батьків, Книжковий клуб",
      fullDescription:"Усі проєкти направлені на роботу з дітьми, підлітками та їх батьками - з сім’ями, які опинилися у кризовій ситуації через війну. Задача: підтримати сім’ю та допомогти їй вийти з кризової ситуації через оцінку потреб, складання особистого плану та розвитку. Допомогти дітям та підлітками зрозуміти, хто вони, здобути навички через різноманітні курси, підліткові клуби, а також стати більш сучасними та технологічними через навчання IT. Q-club (для підлітків 11-14 років), Клуб “Підготовка до успіху” (для підлітків 15-18 років), Групи надії для батьків, Книжковий клуб."
    },
    {
      imgUrl: directionsImg3,
      title: "IT Club",
      description: "Курси програмування та робототехніки для дітей, підлітків і молоді",
    },
    {
      imgUrl: directionsImg4,
      title: "Гумштаб ТНУ та Молодіжний центр",
      description: "Підтримка студентів ВПО, залучення молоді в громадянське суспільство, школа волонтерів, коробки гум. допомоги",
      fullDescription:"Усі проєкти направлені на роботу з внутрішньо-переміщеними студентами, викладачами та іншими людьми. Задача: підтримати внутрішньо переміщену молодь через особисті зустрічі та групи взаємодії, гуманітарну допомогу, просвітницьку діяльність та залучення до волонтерства. Підтримка студентів ВПО, залучення молоді в громадянське суспільство, школа волонтерів, коробки гум. допомоги."
    },
    {
      imgUrl: directionsImg5,
      title: "Підтримка UA під час кризи",
      description: "Ресурсний центр, Case Manager Pro, ТОВД - підхід, оцінка потреб, індивідуальні та групові консультації, психологічна допомога, групи підтримки, діагностування",
    },
    {
      imgUrl: directionsImg6,
      title: "Коаліція “Київ без сиріт”",
      description: "Залучення партнерських організацій, вищих навчальних закладів, волонтерів, ресурсних сімей в сумісну роботу задля досягнення спільних цілей",
      fullDescription:"Усі проєкти направлені на психологічну підтримку сім’ям, дітям та молоді. Задача: допомогти вирішити проблеми психологічного характеру через оцінку потреб, індивідуальні та групові консультації, групи підтримки, побудову дитячо-батьківських відносин, арт-терапію та інше. Проєкти: Ресурсний центр, Case Manager Pro, ТОВД - підхід, оцінка потреб, індивідуальні та групові консультації, психологічна допомога, групи підтримки, діагностування"
    },
  ]
  const teamSliderData = {
    team:{
      title:"наша команда",
      data:[
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
    volunteers:{
      title:"наші волонтери",
      data:[
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
  }

  const ourPicturesData = [ourPicturesImg1, ourPicturesImg2, ourPicturesImg3, ourPicturesImg4, ourPicturesImg5, ourPicturesImg6, ourPicturesImg7, ourPicturesImg8, ourPicturesImg9,ourPicturesImg1, ourPicturesImg2, ourPicturesImg3, ourPicturesImg4, ourPicturesImg5, ourPicturesImg6, ourPicturesImg7, ourPicturesImg8, ourPicturesImg9]
  const [vision, setVision] = useState({
    vision: true,
    mission: true,
    goals: true
  })
  const aboutUsText = "В центрі нашої роботи знаходяться постійні взаємовідносини та довгострокові взаємодії за окремими кейсами дітей, сімей та молоді, а також групами підтримки і розвитку. Кінцевою задачею нашої організації є свідомість, незалежність та самостійність людей, з якими ми працюємо. Чи то сім’я СЖО або ВПО, чи то дитина-сирота або випускник інтернату -  ми даємо можливість кожному отримувати підтримку та допомогу, розвиватися та опановувати нові навички, брати участь в наших проєктах, а також ставати самодостатніми завдяки нашим співробітникам, волонтерам і  партнерам. Наша основна задача - підтримати людину у складний період та допомогти їй вийти із нього спроможною та розвинутою. Також ми намагаємося ділитися європейськими цінностями і принципами, але й не забуваємо про наше українське коріння."
  const [readMore, setReadMore] = useState(false)
  const [showAllPhotos, setShowAllPhotos] = useState(false)
  const editedOurPicturesData = showAllPhotos?ourPicturesData:ourPicturesData.slice(0,9)
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
                setVision({ ...vision, vision: !vision.vision, mission: vision.mission, goals: vision.goals })
              }}>
                <div className={`${s.vision__card__content} ${s.vision__desc}`}>
                <p className={s.title__vision}>наше бачення</p>
                  <p>Діти зростають в турботливих сім'ях, навчаються бути розвинутою молоддю і свідомо долучаються до формування нового українського суспільства</p>
                  <div className={s.vision__arrow__wrap}>
                    <img src={visionArrow} alt="" />
                  </div>
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

                  <div className={s.vision__arrow__wrap}>
                    <img src={visionArrow} alt="" />
                  </div>
                </div>
              </div>

            }
            {vision.mission ?
              <div className={`${s.vision__card} ${s.vision__card__desc}`} onClick={() => {
                setVision({ ...vision, vision: vision.vision, mission: !vision.mission, goals: vision.goals })
              }}>
                <div className={`${s.vision__card__content} ${s.vision__desc}`}>
                  <p className={s.title__vision}>наша місія</p>
                  <p>Залучення волонтерів, професіоналів, наставників, спроможних сімей та партнерів задля впливу на дітей, молодь, батьків та суспільство в цілому.
                  </p>
                  <div className={s.vision__arrow__wrap}>
                    <img src={visionArrow} alt="" />
                  </div>
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
                  <div className={s.vision__arrow__wrap}>
                    <img src={visionArrow} alt="" />
                  </div>
                </div>
              </div>

            }


          </div>
          {vision.goals ?
            <div className={`${s.vision__card} ${s.vision__card__desc}`} onClick={() => {
              setVision({ ...vision, vision: vision.vision, mission: vision.mission, goals: !vision.goals })
            }}>
              <div className={`${s.vision__card__content} ${s.vision__desc}`}>
              <p className={s.title__vision}>наші цілі</p>
                <ul>
                  <li>Сприяння тому, щоб усі діти жили у турботливих родинах</li>
                  <li>Надання допомоги, підтримки та захисту прав дітей, сімей та молоді</li>
                  <li>Заохочення їх до всебічного розвитку та участі в громадянському суспільстві</li>
                  <li>Поширення серед них українських і сімейних цінностей, духовності та здорового способу життя</li>
                </ul>

                <div className={s.vision__arrow__wrap}>
                  <img src={visionArrow} alt="" />
                </div>
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
          <h2 className={s.title}>Основні напрями нашої діяльності</h2>
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
            <span>Більше про допомогу</span>
            <div className={s.more__about__button__arrow__wrap}>
              <img src={buttonArrow} alt="" />
            </div>
          </div>
        </button>

        <div className={s.about__us__wrap}>
          <div className={s.about__us__info}>
            <h2 className={s.title}>Про нас</h2>
            <p>{readMore || window.innerWidth >= 1000 ? aboutUsText : aboutUsText.slice(0, 400) + '...'}</p>
            {window.innerWidth < 1000 && (<div className={`${s.about__us__img__wrap} ${readMore &&(s.about__us__img__wrap__rotated)}`} style={{ cursor: 'pointer' }}>
              <img src={aboutUsArrow} alt="" onClick={() => {
                setReadMore(!readMore)
              }} />
            </div>)}
            <button className={s.yellow__button}>Детальніше</button>
          </div>

          <div className={s.about__us__img__wrap}>
            <img src={aboutUsPhoto} alt="" />
          </div>
        </div>

        <ValuesList data={valueListsData.weWantToAct} />


        <TeamSlider teamSliderData={teamSliderData.team} />
        {/* <TeamSlider teamSliderData={teamSliderData.volunteers} /> */}


        <div className={s.our__pictures__wrap}>
          <h2 className={s.title} id='our__pictures__title'>наші світлини</h2>
          <div className={s.our__pictures__inner}>
            <div className={s.our__pictures__grid}>
              {editedOurPicturesData.map((item, index) => {
                return (
                  <div key={index} className={s.our__pictures__grid__picture__wrap}>
                    <img src={item} alt="" />
                  </div>
                )
              })}
            </div>
            <button className={s.yellow__button} onClick={()=>{
              setShowAllPhotos(!showAllPhotos)
              if(showAllPhotos){
                document.getElementById("our__pictures__title").scrollIntoView({block:'start',behavior:'smooth'})
              }
            }}>{showAllPhotos?"Згорнути":"Детальніше"}</button>
          </div>
        </div>

        <PartnersSlider />

        <ValuesList data={valueListsData.ourPrinciples} />


      </div>
    </div>
  )
}

export default FrontPage