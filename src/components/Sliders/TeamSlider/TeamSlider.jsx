import React, { useEffect, useState } from "react";
import s from "./TeamSlider.module.css";
import arrowLeft from '../../../img/slider-arrow-left.svg';
import arrowRight from '../../../img/slider-arrow-right.svg';
import img1 from '../../../img/teamSlider/img1.png';
import img2 from '../../../img/teamSlider/img2.png';
import img3 from '../../../img/teamSlider/img3.png';
import img4 from '../../../img/teamSlider/img4.png';
import img5 from '../../../img/teamSlider/img5.png';

const TeamSlider = () => {
    const teamSliderData = [
        {
            imgUrl: img1,
            name: 'Андрій Видрін',
            status: 'Адміністратор ГО'
        },
        {
            imgUrl: img2,
            name: 'Дмитро Малашко',
            status: 'Засновник'
        },
        {
            imgUrl: img3,
            name: 'Павло Мельников',
            status: 'Засновник, директор'
        },
        {
            imgUrl: img4,
            name: 'Лілія Малашко',
            status: 'Волонтер, психологиня'
        },
        {
            imgUrl: img5,
            name: 'Данило Малашко',
            status: 'Волонтер'
        },

    ];

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [slideStepResult, setSlideStepResult] = useState(20);
    const [activeDot, setActiveDot] = useState(0);
    const [sliderStyle, setSliderStyle] = useState({
        marginLeft: 0,
        width: `${teamSliderData.length * slideStepResult}%`
    });
    const [sliderMove, setSliderMove] = useState({
        step: slideStepResult,
        startPosition: 0,
        endPosition: teamSliderData.length - 1,
        endScreenPosition: 4,
        startScreenPosition: 0,
        sliderPosition: 0
    });
    const [cardsPerSlide, setCardsPerSlide] = useState()

    useEffect(() => {
        const changeResize = () => {
            const newScreenWidth = window.innerWidth;
            setScreenWidth(newScreenWidth);
    
            let newSlideStepResult;
            let newCardsPerSlide;
            if (newScreenWidth <= 1300 && newScreenWidth >= 1050) {
                newSlideStepResult = 25;
                newCardsPerSlide = 4;
            } else if (newScreenWidth <= 1050 && newScreenWidth >= 800) {
                newSlideStepResult = 33.3;
                newCardsPerSlide = 3;
            } else if (newScreenWidth < 800 && newScreenWidth >= 550) {
                newSlideStepResult = 50;
                newCardsPerSlide = 2;
            } else if (newScreenWidth < 550) {
                newSlideStepResult = 100;
                newCardsPerSlide = 1;
            } else {
                newSlideStepResult = 20;
                newCardsPerSlide = 5;
            }
    
            setSlideStepResult(newSlideStepResult);
            setCardsPerSlide(newCardsPerSlide);
    
            // Update slider styles
            const newPosition = Math.min(sliderMove.sliderPosition, teamSliderData.length - newCardsPerSlide);
            const marginLeft = -newSlideStepResult * newPosition;
            setSliderStyle({
                ...sliderStyle,
                marginLeft: `${marginLeft}%`,
                width: `${teamSliderData.length * newSlideStepResult}%`,
            });
    
            setSliderMove({
                ...sliderMove,
                step: newSlideStepResult,
                startScreenPosition: newPosition,
                endScreenPosition: Math.min(newPosition + newCardsPerSlide - 1, teamSliderData.length - 1),
            });
        };
    
        changeResize(); // Call the function once to set the initial state based on the current screen width
    
        window.addEventListener('resize', changeResize);
    
        return () => {
            window.removeEventListener('resize', changeResize);
        };
    }, [sliderMove.step, teamSliderData.length]);
    

    return (
        <div className={s.slider__wrap}>
            <h2 className={s.title}>наша команда</h2>
            <div className={s.slider__inner}>
                <div className={s.slider}>
                    <div className={s.arrow}>
                        <img src={arrowLeft} alt="" onClick={() => {
                            setActiveDot(null)
                            if (sliderMove.startScreenPosition < 1) return;
                            let marginLeft = -sliderMove.step * (sliderMove.sliderPosition - 1);
                            setSliderMove({
                                ...sliderMove,
                                sliderPosition: sliderMove.sliderPosition - 1,
                                startScreenPosition: sliderMove.startScreenPosition - 1,
                                endScreenPosition: sliderMove.endScreenPosition - 1
                            });
                            setSliderStyle({ ...sliderStyle, marginLeft: marginLeft + "%" });
                        }} />
                    </div>
                    <div className={s.slider_content_wrap}>
                        <div className={s.slider__content} style={sliderStyle}>
                            {teamSliderData.map((item, index) => {
                                return (
                                    <div key={index} className={`${s.slider__card}
                                        ${(index - sliderMove.startScreenPosition === 0 || index - sliderMove.startScreenPosition === 4) && screenWidth >= 1300 ? s.scale08 : null}
                                        ${(index - sliderMove.startScreenPosition === 1 || index - sliderMove.startScreenPosition === 3) && screenWidth >= 1300 ? s.scale09 : null}
                                    `}
                                    >
                                        <div className={s.img__wrap}>
                                            <img src={item.imgUrl} alt="" />
                                        </div>
                                        <p className={s.bold}>{item.name}</p>
                                        <p>{item.status}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={s.arrow}>
                        <img src={arrowRight} alt="" onClick={() => {
                            setActiveDot(null)

                            let marginLeft = -sliderMove.step * (sliderMove.sliderPosition + 1);
                            if (sliderMove.endScreenPosition + 1 > sliderMove.endPosition) return;
                            setSliderMove({
                                ...sliderMove,
                                sliderPosition: sliderMove.sliderPosition + 1,
                                startScreenPosition: sliderMove.startScreenPosition + 1,
                                endScreenPosition: sliderMove.endScreenPosition + 1
                            });
                            setSliderStyle({ ...sliderStyle, marginLeft: marginLeft + "%" });
                        }} />
                    </div>
                </div>
                <div className={s.slider__dots}>
                    {Array.from({ length: Math.ceil(teamSliderData.length / cardsPerSlide) }).map((item, index) => (
                        <div className={`${s.dot} ${index === activeDot ? s.dot__active : null}`} key={index} onClick={() => {
                            setActiveDot(index)
                            const newPosition = teamSliderData.length % cardsPerSlide !== 0 && index === Math.floor(teamSliderData.length / cardsPerSlide)
                                ? index * cardsPerSlide - (cardsPerSlide - teamSliderData.length % cardsPerSlide)
                                : index * cardsPerSlide;
                            if (newPosition > sliderMove.endPosition) return;

                            const marginLeft = -sliderMove.step * newPosition;
                            setSliderMove({
                                ...sliderMove,
                                sliderPosition: newPosition,
                                startScreenPosition: newPosition,
                                endScreenPosition: Math.min(newPosition + 4, sliderMove.endPosition),
                            });
                            setSliderStyle({ ...sliderStyle, marginLeft: `${marginLeft}%` });
                        }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamSlider;



