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

import roadmap from '../../img/roadmap.svg'
import ValuesListSplit from '../ValuesList/ValuesListSplit'

const FrontPageEN = () => {
  const valueListsData = {
    ourValues: {
      imgUrl: valuesImg,
      title: "OUR MAIN VALUES",
      values: ["Freedom", "Dignity", "Justice", "Social Responsibility"]
    },
    weWantToAct: {
      imgUrl: weWantToActImg,
      title: "WE AIM TO ACT",
      values: [["Consciously", "Holistically", "Professionally", "Effectively", "Through relationships", "Constantly communicating", "Technologically and Modernly","Perspectively"],
      ["Resource center", "Case management", "TBRI approach", "Regular volunteers", "Mentorship", "Family care", "Individual assistance","Psychological support"]],
      listTitles:["How","With"]
    },
    ourPrinciples: {
      imgUrl: ourPrinciplesImg,
      title: "OUR PRINCIPLES",
      values: ["Act with love and service", "Respecting diversity", "Valuing human dignity", "As equal to equal", "With humor and good atmosphere", "In unity and cooperation"]
    },
  }

  const directionsData = [
    {
      imgUrl: directionsImg1,
      title: "Orphan`s Hope UA",
      description: "We work with orphans who live in residential care, foster families or those who have graduated from institutions",
      yak: "regular volunteer visits to children's centers in Kyiv and Kyiv region for building friendship, mentoring, training programs, master classes, robotics courses, Happy Day trips, summer camps and big events",
      task: "support and help an orphan to integrate into society through socialization, career guidance and education, find a mentor and a caring family for further development",
    },
    {
      imgUrl: directionsImg2,
      title: "ID Club",
      description: "We work with kids & teens, their parents & families who are at risk because of war",
      yak:" offering a systematic work with teens and their parents through the variety of courses, such as 7 Habits of Highly Effective Teens course by Stephen Covey, the Q-club course (for teens 11-14 years old), the Preparation for Success course (for teens 15-18 years old), groups of support for parents",
      task:"support and help a family to prevent their crisis situation through our assessment of their needs, drawing up a personal plan and providing various social services for them. Also we help kids & teens with understanding themselves, their skills and their development through various courses, clubs and big events"
    },
    {
      imgUrl: directionsImg3,
      title: "IT Club",
      description: "We work with teens & youth who want to learn basic computer skills or even become IT professionals",
      yak:"achieving comprehensive approach to learn basic computer skills for office work, programming, web design, animation, robotics, VR and AI through our own programs for teens",
      task:"equip and enhance our students` IT proficiency for their future professionalism and easier employment, while also integrating the latest technologies into their lives"
    },
    {
      imgUrl: directionsImg4,
      title: "IDP Youth Center",
      description: "We work with internally displaced students, teachers and other displaced youth",
      yak:"helding sustainable groups of support and humanitarian aid for IDP students and involving them in civil society and various activities through Volunteer School",
      task:"support internally displaced youth through personal or group meetings, humanitarian aid, educational activities and involvement in volunteering"
    },
    {
      imgUrl: directionsImg5,
      title: "Support UA in crisis",
      description: "We provide diagnostics, psychological help and groups of support for families, children and youth",
      yak:"permanent filing of the Resource Center, “Case Manager” program and using of TBRI - approach, questionnaires, diagnostics; providing individual and group consultations, psychological assistance, “Groups of Hope” in a crisis situation",
      task:"help with psychological problems through needs assessment, meetings with a psychologist, supporting groups, building child-parent relationships and art therapy"
    },
    {
      imgUrl: directionsImg6,
      title: "Coalition “Kyiv without orphans”",
      description: "We find, inform, involve, equip and empower partners working together in unity to achieve common goals in Kyiv and region influencing orphans & at-risk kids, youth and families",
      yak:"implementing various conferences, meetings & round-table discussions, presentations and trainings, preparation of joint documents and statements",
      task:"help NGOs, universities & colleges, churches, volunteers and resource families through collaborative efforts aimed at preventing and overcoming "
    },
  ]
  const newsData = [
    {
      imgUrl: newsImg7,
      title: "About our volunteers",
      description: "Volunteer school and celebration of Volunteer Day on December, the 5th 2023",
      fullDescription: [{
        img:newsImg1,
        text:"December is a month of summing up and expressing gratitude to those who have been with us and helped during this difficult year and 2022. Therefore, on December the 5th 2023, on the International Day of Volunteers, NGO PEOPLE UA, with the support of the Ukrainian Volunteer Service and UNICEF in Ukraine, held the fifth summarizing meeting, where 16 people were invited as part of our Volunteer School. At this meeting we celebrated and honored the activities of our volunteers and awarded them certificates and gifts. It is great that our volunteers know practically how to help children and families and still want to learn how to do it professionally, focused and systematically. These features are the real markers of permanent volunteers."
      },
      {
        img:newsImg2,
        text:`Thanks to them we held about 400 different educational, supportive, entertaining and in some cases with humanitarian aid meetings and events. With these events we were able to help about 200 kids & teens and their families on a regular basis during the year.
        We also held an interactive mini-training on burnout prevention where our psychologist shared valuable tips and self-help techniques. It was really useful for us and can be useful for those who help others in such difficult times.
        There was also tasty food and a friendly atmosphere at the event thanks to our partners.
        We sincerely thank everyone who participated in this event and supports our efforts. You are doing a great job helping and making a positive difference in the lives of others.
        See you at the next events in the new year 2024.`
        
      }
    ]
    },
    {
      imgUrl: newsImg8,
      title: "About Mayak center",
      description: "We are back at Mayak with “7 Habits of Highly Effective Teens” course by Stephen Covey, 2 summer camps, 12 “Happy Days”, 15 robotics lessons and 120 different events and meetings totally since spring 2023",
      fullDescription: [{
        img:newsImg4,
        text:`During 2023, we worked a lot at the Center for Social and Psychological Rehabilitation for Children No. 1 (Mayak) in Troyeschina district of Kyiv. During this time, more than 20 volunteers held about 120 meetings for 100 children and teenagers. At these meetings, we conducted an assessment of their needs, courses "7 Habits of Highly Effective Teenagers" & "Lessons of Self-sufficiency", 2 fests, as well as 12 trips within the project “Happy Day” for motivating, socializing and rewarding children (at McDonald's , KFC and other interesting places).
        Before each lesson we play soccer with them and do various interactive activities and games in the fresh air for kids, so that they have a good mood during such a difficult time.`
      },
      {
        img:newsImg3,
        text:`Also, this September, we have introduced robotics lessons together with our partners and have held 15 meetings . The children learned to assemble and program various kinds of robots. It's very modern and interesting for them.
        During this time, 15 boys and girls graduated from Mayak center, and 13 more went back to biological families or were adopted. Some teens have mentors and permanent volunteers visiting them every week. Also teens and kids go to church every weekend. 
        At the end of December we held a Christmas and New Year fests with games, dances and gifts for all the children and caregivers of the center. We plan to implement the approach of Trust-Based Relational Intervention next year and this year already was very deep and useful for all of us!`
      }
    ]    },
    {
      imgUrl: newsImg9,
      title: "About our clubs",
      description: "Our ID and IT clubs have great results of our constant work with kids & teens, youth & parents over the past 2 years",
      fullDescription: [{
        img:newsImg6,
        text: `At the beginning of the full-scale war, we helped a large number of people, with whom we started various clubs and support groups for children, teenagers, young people and their parents. During this time about 200 IT classes were held (basic computer skills, programming, web design and animation) as well as about 250 ID meetings ("7 Habits of Highly Effective Teenagers" course, "Preparation for Success” training course and “Q clubs” - development of different types of intelligence, “Groups of Hope” for parents and IDP students).`
      },
      {
        img:newsImg5,
        text:`We also held many other events, summer camps and picnics where we continue to build friendly relations and constant communication with kids & teens, youth & parents, providing comprehensive and systematic support and help to their families. They are grateful to us for their development, and we are grateful to them for their efforts. We hope that in 2024 we will continue to invest in a new generation of Ukrainian children and youth. Together we are stronger.`
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
                  <p className={s.big__size}>We build the foundation of a new postwar Ukrainian society together with our partners </p>
                  <p className={s.middle__size}>Using a systematic, comprehensive and individual approach to help, support and develop children, youth and their families in local communities</p>
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
                  <p>Children grow up in caring families, learn how to develop their personalities through education, socialization & career guidance and proactively participate in Ukrainian society
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
                  <p>Engaging and equipping  volunteers, professionals, mentors, capable families and partners (including churches) to make a positive impact on children, youth, parents and the entire society
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
                  <li>Help children live in nurturing families</li>
                  <li>Provide assistance, support and protection of the rights of children, families and young people</li>
                  <li>Encourage them for holistic development and participation in civil society</li>
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
                    {vision.goals ?
            <div className={`${s.vision__card} ${s.vision__card__desc}`} onClick={() => {
              // setVision({ ...vision, vision: vision.vision, mission: vision.mission, goals: !vision.goals })
            }}>
              <div className={`${s.vision__card__content} ${s.vision__desc}`}>
                <p className={s.title__vision}>OUR ROADMAP according to World Without Orphans:</p>
                <div className={s.vision__content__split}>
                <ul>
                  <li>Broadscale collaboration</li>
                  <li>Prevention</li>
                  <li>Intervention</li>
                  <li>Living refreshed</li>
                </ul>
                <div className={s.vision__img__wrap}>
                  <a href="https://www.wwo.org/"><img src={roadmap} alt="" /></a>
                  
                </div>
                </div>
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

        <ValuesListSplit data={valueListsData.weWantToAct} />


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
                <NewsCard key={index} lang='en' data={item} />

              )
            })}

          </div>
        </div>

      </div>
    </div>
  )
}

export default FrontPageEN