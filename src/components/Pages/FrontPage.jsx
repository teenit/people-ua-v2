import React, { useState } from 'react'
import s from './FrontPage.module.css'
import FirstScreenForm from '../Forms/FirstScreenForm/FirstScreenForm'
import visionArrow from '../../img/arrow-right.svg'
import buttonArrow from '../../img/arrow-right-white.svg'
import rocket from '../../img/rocket.svg'
import goal from '../../img/goal.svg'
import visionImg from '../../img/vision.svg'
import aboutUsPhoto from '../../img/about-us-photo.png'
import DirectionsCard from './DirectionsCard'
import TeamSlider from '../Sliders/TeamSlider/TeamSlider'
import ValuesList from '../ValuesList/ValuesList'

import valuesImg from '../../img/valueList/values.png'
import weWantToActImg from '../../img/valueList/weWantToAct.png'

import directionsImg1 from '../../img/directions/img1.png'
import directionsImg2 from '../../img/directions/img2.png'
import directionsImg3 from '../../img/directions/img3.png'
import directionsImg4 from '../../img/directions/img4.png'
import directionsImg5 from '../../img/directions/img5.png'

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
      values: ["Професійно", "Цілісно", "Якісно", "Через взаємовідносини", "На перспективу", "Постійно комунікуючи", "Технологічно та сучасно"]
    },
    ourPrinciples: {
      imgUrl: valuesImg,
      title: "Наші принципи",
      values: ["Рівний рівному", "Діяти з любов’ю та турботою", "Поважаючи відмінності/через повагу", "З гумором та доброю атмосферою"]
    },
  }

  const directionsData = [
    {
      imgUrl: directionsImg1,
      title: "Проєкти Надія для сиріт UA",
      description: "Happy Day, табори, навчальні курси, наставництво, курси з робототехніки"
    },
    {
      imgUrl: directionsImg2,
      title: "Проєкти ID+IT",
      description: "Q-club, Клуб ПКУ, Групи надії для батьків, IT club, Книжковий клуб"
    },
    {
      imgUrl: directionsImg3,
      title: "Молодіжний центр",
      description: "Коробки допомоги, Підтримка ВПО, Школа волонтерів"
    },
    {
      imgUrl: directionsImg4,
      title: "Проєкти підтримки",
      description: "ТОВД, Ресурсний центр, Case Manager Pro"
    },
    {
      imgUrl: directionsImg5,
      title: "Проєкти коаліції",
      description: "ТОВД, Ресурсний центр, Case Manager Pro"
    },
  ]


  const ourPicturesData = [ourPicturesImg1, ourPicturesImg2, ourPicturesImg3, ourPicturesImg4, ourPicturesImg5, ourPicturesImg6, ourPicturesImg7, ourPicturesImg8, ourPicturesImg9]
  const [vision, setVision] = useState({
    vision: true,
    mission: false,
    goals: false
  })
  return (
    <div className={s.wrap}>
      <div className={s.inner}>
        <div className={s.first__screen__wrap}>
          <div className={s.first__screen__inner}>
            <div className={s.first__screen__info__wrap}>
              <div className={s.first__screen__info__inner}>
                <p style={{ fontSize: "24px", fontFamily: "Kyiv Region" }}>ГО ЛЮДИ UA, місто Київ</p>
                <p className={s.big__size}>Закладаємо фундамент нового українського суспільства</p>
                <p>Системний, комплексний та індивідуальний підхід до допомоги, підтримки та розвитку сімей, дітей та молоді</p>
              </div>
            </div>
            <FirstScreenForm />
          </div>
        </div>



        <div className={s.vision__wrap}>
          <div className={s.vision__card__split}>
            {vision.vision ?
              <div className={`${s.vision__card} ${s.vision__card__desc}`} onClick={() => {
                setVision({ ...vision, vision: !vision.vision, mission:false,goals:false })
              }}>
                <div className={s.vision__card__content}>
                  <p>Діти в турботливих сім'ях, які навчаються бути свідомою та розвинутою молоддю і формувати нове українське суспільство</p>
                  <div className={s.vision__arrow__wrap}>
                    <img src={visionArrow} alt="" />
                  </div>
                </div>
              </div>
              :
              <div className={s.vision__card} onClick={() => {
                setVision({ ...vision, vision: !vision.vision, mission:false,goals:false })
              }}>
                <div className={s.vision__card__content}>
                  <div className={s.vision__img__wrap}>
                    <img src={visionImg} alt="" />
                  </div>
                  <div className={s.vision__card__info}>
                    <p>наше бачення</p>
                    <div className={s.vision__arrow__wrap}>
                      <img src={visionArrow} alt="" />
                    </div>
                  </div>
                </div>
              </div>

            }
            {vision.mission ?
              <div className={`${s.vision__card} ${s.vision__card__desc}`} onClick={() => {
                setVision({ ...vision, vision:false, mission: !vision.mission, goals:false })
              }}>
                <div className={s.vision__card__content}>
                  <p>Діти в турботливих сім'ях, які навчаються бути свідомою та розвинутою молоддю і формувати нове українське суспільство</p>
                  <div className={s.vision__arrow__wrap}>
                    <img src={visionArrow} alt="" />
                  </div>
                </div>
              </div>
              :
              <div className={s.vision__card} onClick={() => {
                setVision({ ...vision, vision:false, mission: !vision.mission, goals:false })
              }}>
                <div className={s.vision__card__content}>
                  <div className={s.vision__img__wrap}>
                    <img src={rocket} alt="" />
                  </div>
                  <div className={s.vision__card__info}>
                    <p>наша місія</p>
                    <div className={s.vision__arrow__wrap}>
                      <img src={visionArrow} alt="" />
                    </div>
                  </div>
                </div>
              </div>

            }


          </div>

          {vision.goals ?
              <div className={`${s.vision__card} ${s.vision__card__desc}`} onClick={() => {
                setVision({ ...vision, vision:false, mission:false, goals: !vision.goals })
              }}>
                <div className={s.vision__card__content}>
                  <p>Діти в турботливих сім'ях, які навчаються бути свідомою та розвинутою молоддю і формувати нове українське суспільство</p>
                  <div className={s.vision__arrow__wrap}>
                    <img src={visionArrow} alt="" />
                  </div>
                </div>
              </div>
              :
              <div className={s.vision__card} onClick={() => {
                setVision({ ...vision, vision:false, mission:false, goals: !vision.goals })
              }}>
                <div className={s.vision__card__content}>
                  <div className={s.vision__img__wrap}>
                    <img src={goal} alt="" />
                  </div>
                  <div className={s.vision__card__info}>
                    <p>наші цілі</p>
                    <div className={s.vision__arrow__wrap}>
                      <img src={visionArrow} alt="" />
                    </div>
                  </div>
                </div>
              </div>

            }
        </div>

        <ValuesList data={valueListsData.ourValues} />



        <div className={s.directions__wrap}>
          <h2 className={s.title}>Основні напрями діяльності</h2>
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
            <p>В центрі нашої роботи знаходяться взаємовідносини та довгострокові взаємодії
              за окремими кейсами та групами підтримки і розвитку. Кінцевою задачею нашої
              організації є свідомість, незалежність та самостійність людей нашої цільової
              аудиторії, з якими ми працюємо. Чи то сім’я СЖО або ВПО, чи то дитина-сирота
              або випускник інтернату -  ми даємо можливість кожному отримувати підтримку,
              розвиватися, опановувати нові навички, брати участь в наших проєктах, а також
              ставати самодостатніми завдяки нашим співробітникам, волонтерам та партнерам.
              Наша основна задача - підтримати особистість у складний період та допомогти їй
              вийти із нього спроможною та розвинутою. Також ми намагаємося ділитися європейськими
              цінностями і принципами, але й не забуваємо про наше українське коріння.</p>
            <button className={s.yellow__button}>Детальніше</button>
          </div>
          <div className={s.about__us__img__wrap}>
            <img src={aboutUsPhoto} alt="" />
          </div>
        </div>

        <ValuesList data={valueListsData.weWantToAct} />


        <TeamSlider />


        <div className={s.our__pictures__wrap}>
          <h2 className={s.title}>наші світлини</h2>
          <div className={s.our__pictures__inner}>
            <div className={s.our__pictures__grid}>
              {ourPicturesData.map((item, index) => {
                return (
                  <div key={index} className={s.our__pictures__grid__picture__wrap}>
                    <img src={item} alt="" />
                  </div>
                )
              })}
            </div>
            <button className={s.yellow__button}>Детальніше</button>
          </div>
        </div>

        <PartnersSlider />

        <ValuesList data={valueListsData.ourPrinciples} />


      </div>
    </div>
  )
}

export default FrontPage