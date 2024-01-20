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
import DirectionsCardEN from './DirectionsCardEN'
import NewsCard from './NewsCard'
import TeamSlider from '../Sliders/TeamSlider/TeamSlider'
import ValuesList from '../ValuesList/ValuesList'

import valuesImg from '../../img/valueList/values.jpeg'
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

import img1 from '../../img/partnersSlider/img1.png'
import img2 from '../../img/partnersSlider/img2.png'
import img3 from '../../img/partnersSlider/img3.png'
import img4 from '../../img/partnersSlider/img4.png'
import img5 from '../../img/partnersSlider/img5.png'
import img6 from '../../img/partnersSlider/img6.png'
import img7 from '../../img/partnersSlider/img7.jpg'
import img8 from '../../img/partnersSlider/img8.png'
import PartnersSlider from '../Sliders/PartnersSlider/PartnersSlider'
const FrontPageEN = () => {
  const valueListsData = {
    ourValues: {
      imgUrl: valuesImg,
      title: "OUR MAIN VALUES",
      values: ["Freedom", "Dignity", "Justice", "Social responsibility"]
    },
    weWantToAct: {
      imgUrl: weWantToActImg,
      title: "WE AIM TO ACT",
      values: ["Consciously", "Wholistically", "Professionally", "Effectively", "Perspectively", "Through relationships", "Constantly communicating", "Technologically and modernly"]
    },
    ourPrinciples: {
      imgUrl: ourPrinciplesImg,
      title: "OUR PRINCIPLES",
      values: ["Act with love and care", "Respecting each other's differences", "Out of respect for human dignity", "As equal to equal", "With humor and good atmosphere", "In unity and cooperation"]
    },
  }

  const directionsData = [
    {
      imgUrl: directionsImg1,
      title: "Orphan`s Hope UA",
      description: "We work with orphans who live in residential care, foster families or have graduated from institutions",
      yak: "regular volunteer visits to children's centers in Kyiv and Kyiv region for building friendship, mentoring, training programs, master classes, robotics courses, Happy Day trips, summer camps and big events",
      task: "support and help an orphan to integrate into society through socialization, career guidance and education, find a mentor and a caring family for further development",
    },
    {
      imgUrl: directionsImg2,
      title: "ID Club",
      description: "We work with kids & teens, their parents & families who are at risk because of war",
      yak:"systematic work with teens and their parents through the variety of courses, such as 7 Habits of Highly Effective Teens course by Stephen Covey, the Q-club course (for teens 11-14 years old), the Preparation for Success course (for teens 15-18 years old), groups of support for parents",
      task:"support and help a family to prevent their crisis situation through our assessment of their needs, drawing up a personal plan and providing various social services for them. Also we help kids & teens with understanding themselves, their skills and their development through various courses, clubs and big events"
    },
    {
      imgUrl: directionsImg3,
      title: "IT Club",
      description: "We work with teens & youth who want to learn basic computer skills or even become IT professionals",
      yak:"comprehensive approach to learning basic computer skills for office work, programming, web design, animation, robotics, VR and AI through our own programs for teens",
      task:" provide and improve IT skills to our students for their future professionalism and easier employment, as well as integrating the latest technologies into their lives"
    },
    {
      imgUrl: directionsImg4,
      title: "IDP Youth Center",
      description: "We work with internally displaced students, teachers and other displaced youth",
      yak:"sustainable groups of support and humanitarian aid for IDP students and further involvement of youth in civil society through Volunteer School",
      task:" support internally displaced youth through personal or group meetings, humanitarian aid, educational activities and involvement in volunteering"
    },
    {
      imgUrl: directionsImg5,
      title: "Support UA in crisis",
      description: "We provide diagnostics, psychological help and groups of support for families, children and youth",
      yak:"permanent filing of the Resource Center, “Case Manager” program and use of TBRI - approach, questionnaires, diagnostics, individual and group consultations, psychological assistance, “Groups of Hope” in a crisis situation",
      task:"help with psychological problems through needs assessment, meetings with a psychologist, supporting groups, building child-parent relationships and art therapy"
    },
    {
      imgUrl: directionsImg6,
      title: "Coalition “Kyiv without orphans”",
      description: "We find, inform, involve, equip and empower partners working together in unity to achieve common goals in Kyiv and region influencing orphans & at-risk kids, youth and families",
      yak:"different conferences, meetings & round-table discussions, presentations and trainings, preparation of joint documents and statements",
      task:"help NGOs, universities & colleges, churches, volunteers and resource families with collaborative practice to prevent and overcome orphanhood"
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
      title: "our team",
      data: [
        {
          imgUrl: teamSliderImg1,
          name: 'Andrii Vydrin',
          status: 'Administrator of NGO'
        },
        {
          imgUrl: teamSliderImg2,
          name: 'Dmytro Malashko',
          status: 'Founder'
        },
        {
          imgUrl: teamSliderImg3,
          name: 'Pavlo Melnykov',
          status: 'Founder, director'
        },
        {
          imgUrl: teamSliderImg4,
          name: 'Lilia Malashko',
          status: 'Volunteer, psychologist'
        },
        {
          imgUrl: teamSliderImg5,
          name: 'Danylo Malashko',
          status: 'Volunteer'
        },

      ]
    },
    volunteers: {
      title: "OUR VOLUNTEERS ",
      data: [
        {
          imgUrl: volunteerImg3,
          name: 'Sonya',
        },
        {
          imgUrl: volunteerImg2,
          name: 'Max',
        },
        {
          imgUrl: volunteerImg1,
          name: 'Maria',
        },
        {
          imgUrl: volunteerImg5,
          name: 'Varya',
        },
        {
          imgUrl: volunteerImg4,
          name: 'Eugenia',
        },


      ]
    },
  }
  const partnersSliderData = {
    title:"OUR PARTNERS",
    data:[
      {
          imgUrl: img6,
          link: "https://orphanshope.org/ukraine/",
          title:"Orphan's Hope"
      },
      {
          imgUrl: img4,
          link: "https://www.itclub.in.ua/",
          title:"IT Club Studio"
      },
      {
          imgUrl: img1,
          link:"https://ukrainabezsyrit.org/",
          title:"The Alliance for “Ukraine Without Orphans”"
      },
      {
          imgUrl: img2,
          link:"https://ccx.org.ua/",
          title:"IFES"
      },
  
      {
          imgUrl: img3,
          link:"https://tnu.edu.ua/",
          title:"TNU/EUNU"
      },
  
      {
          imgUrl: img5,
          link: "https://www.facebook.com/HappyHomeUkraine/",
          title:"Happy Home Center"
      },
      {
          imgUrl: img7,
          link: "https://www.facebook.com/icdt.org.ua/",
          title:"Institute Of Child Developmental Trauma"
      },
      {
          imgUrl: img8,
          link: "https://maximumfond.org.ua/",
          title:"Charity fund “MAXIMUM”, Dnipro"
      },
  
  ]
  }
  const ourPicturesData = [ourPicturesImg1, ourPicturesImg2, ourPicturesImg3, ourPicturesImg4, ourPicturesImg5, ourPicturesImg6, ourPicturesImg7, ourPicturesImg8, ourPicturesImg9, ourPicturesImg10, ourPicturesImg11, ourPicturesImg12, ourPicturesImg13, ourPicturesImg14, ourPicturesImg15,ourPicturesImg16,ourPicturesImg17,ourPicturesImg18]
  const [vision, setVision] = useState({
    vision: true,
    mission: true,
    goals: true
  })
  const aboutUsText = "The core of our social work is permanent relationships and long-term interactions with individual cases of children, youth and families as well as holding the groups of support and development. We see the result of our work in consciousness & self-reliance, safety & well-being of people we work with. Whether it is an at-risk family, a kid, an orphan, an orphanage graduate, a disabled person or an internally displaced student - we give everyone the opportunity to receive support and help, develop and master new skills, participate in our projects, and also become self-sufficient thanks to our employees, volunteers and partners. We want to support a person in a difficult period of life and help him/her to get out of it by being capable and developed. We share European & Cristian values and principles and do not forget our Ukrainian roots."
  const [readMore, setReadMore] = useState(false)
  const [showAllPhotos, setShowAllPhotos] = useState(false)
  const [ourPicturesState, setOurPicturesState] = useState(ourPicturesData.slice(0,9))
  return (
    <div className={`${s.wrap} eng`}>
      <div className={s.inner}>
        <div className={s.first__screen__wrap}>
          <div className={s.first__screen__inner}>
            <div className={s.first__screen__info__wrap}>
              <div className={s.first__screen__info__inner}>
                <p style={{ fontSize: "24px", fontFamily: "Kyiv Region" }}>NGO PEOPLE UA, KYIV<br />
                </p>
                <div>
                  <p className={s.big__size}>We build the foundation of a new postwar Ukrainian society together with partners </p>
                  <p className={s.middle__size}>Using a systematic, comprehensive and individual approach to help, support and develop children, parents/families and youth in local communities</p>
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
                  <p className={s.title__vision}>Our Vision</p>
                  <p>Children grow up in caring families, learn how to develop their personalities through education, socialization & career guidance and participate in Ukrainian society.
                  Caring families and other people raise children, develop their personalities and involve them in participation in Ukrainian society.
                  </p>
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

                    <p>Our Vision</p>
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
                  <p className={s.title__vision}>Our mission</p>
                  <p>Engaging/involvement volunteers, professionals, mentors, capable families and partners, (churches) to impact children, youth, parents and whole society (to help, support and influence society)
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
                    <p>Our mission</p>
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
                <p className={s.title__vision}>Our goals</p>
                <ul>
                  <li>Help children live in caring families</li>
                  <li>Provide assistance, support and protection of childrens` rights, families and young people</li>
                  <li>Encourage them for wholistic development and participation in civil society</li>
                  <li>Inform them about Ukrainian and family values, spirituality and healthy lifestyle</li>
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
                  <p>Our goals</p>
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
          <h2 className={s.title} id='ourDirections' >MAIN DIRECTIONS OF OUR ACTIVITIES</h2>
          <div className={s.directions__cards__wrap}>
            {directionsData.map((item, index) => {
              return (
                <DirectionsCardEN key={index} data={item} />

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
            <h2 className={s.title}>ABOUT US</h2>
            <p>{readMore || window.innerWidth >= 1000 ? aboutUsText : aboutUsText.slice(0, 400) + '...'}</p>
            {window.innerWidth < 1000 && (<div className={`${s.about__us__img__wrap} ${readMore && (s.about__us__img__wrap__rotated)}`} style={{ cursor: 'pointer' }}>
              <img src={aboutUsArrow} alt="" onClick={() => {
                setReadMore(!readMore)
              }} />
            </div>)}
            {/* <button className={s.yellow__button}>Детальніше</button> */}
          </div>

          <div className={s.about__us__img__wrap}>
            <img src={aboutUsPhoto} alt="ABOUT US" id='aboutUs'/>
          </div>
        </div>

        <ValuesList data={valueListsData.weWantToAct} />


        <TeamSlider teamSliderData={teamSliderData.team} />


        <div className={s.our__pictures__wrap}>
          <h2 className={s.title} id='our__pictures__title'>our pictures</h2>
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
            }}>{showAllPhotos ? "Close" : "Show"}</button>
          </div>
        </div>

        <PartnersSlider partnersSliderData={partnersSliderData}/>

        <ValuesList data={valueListsData.ourPrinciples} />
        <TeamSlider teamSliderData={teamSliderData.volunteers} />
        <div className={s.directions__wrap}>
          <h2 className={s.title}>Our news</h2>
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

export default FrontPageEN