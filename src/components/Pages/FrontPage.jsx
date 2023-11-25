import React from 'react'
import s from './FrontPage.module.css'
import FirstScreenForm from '../Forms/FirstScreenForm/FirstScreenForm'
import visionArrow from '../../img/arrow-right.svg'
import buttonArrow from '../../img/arrow-right-white.svg'
import rocket from '../../img/rocket.svg'
import goal from '../../img/goal.svg'
import aboutUsPhoto from '../../img/about-us-photo.png'
import DirectionsCard from './DirectionsCard'
import TeamSlider from '../Sliders/TeamSlider/TeamSlider'
const FrontPage = () => {
  return (
    <div className={s.wrap}>
      <div className={s.inner}>
        <div className={s.first__screen__wrap}>
          <div className={s.first__screen__inner}>
            <div className={s.first__screen__info__wrap}>
              <div className={s.first__screen__info__inner}>
                <h3>ГО ЛЮДИ UA, місто Київ</h3>
                <h1>Закладаємо фундамент нового українського суспільства</h1>
                <p>Системний, комплексний та індивідуальний підхід до допомоги, підтримки та розвитку сімей, дітей та молоді</p>
              </div>
            </div>
            <FirstScreenForm />
          </div>
        </div>
        <div className={s.vision__wrap}>
          <div className={s.vision__card__split}>
            <div className={`${s.vision__card} ${s.vision__card__desc}`}>
              <p>Діти в турботливих сім'ях, які навчаються бути свідомою та розвинутою молоддю і формувати нове українське суспільство</p>
              <div className={s.vision__arrow__wrap}>
                <img src={visionArrow} alt="" />
              </div>
            </div>
            <div className={s.vision__card}>
              <div className={s.vision__card__inner}>
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
          </div>

          <div className={s.vision__card}>
            <div className={s.vision__card__inner}>
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
        </div>

        <div className={s.directions__wrap}>
          <h2 className={s.title}>Основні напрями діяльності</h2>
          <div className={s.directions__cards__wrap}>
            <DirectionsCard />
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
    <TeamSlider/>
        <div className={s.our__pictures__wrap}>
          <h2 className={s.title}>наші світлини</h2>
          <div className={s.our__pictures__inner}>
            <div className={s.our__pictures__grid}>
              <div className={s.our__pictures__grid__picture__wrap}></div>
            </div>
            <button className={s.yellow__button}>Детальніше</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FrontPage