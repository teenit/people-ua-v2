import React, { useEffect, useState } from "react";
import s from "./TeamSlider.module.css";
import arrowLeft from '../../../img/slider-arrow-left.svg';
import arrowRight from '../../../img/slider-arrow-right.svg';


const TeamSlider = ({teamSliderData}) => {


    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [slideStepResult, setSlideStepResult] = useState(20);
    const [activeDot, setActiveDot] = useState(0);
    const [sliderStyle, setSliderStyle] = useState({
        marginLeft: 0,
        width: `${teamSliderData.data.length * slideStepResult}%`
    });
    const [sliderMove, setSliderMove] = useState({
        step: slideStepResult,
        startPosition: 0,
        endPosition: teamSliderData.data.length - 1,
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
    
            const newPosition = Math.min(sliderMove.sliderPosition, teamSliderData.data.length - newCardsPerSlide);
            const marginLeft = -newSlideStepResult * newPosition;
            setSliderStyle({
                ...sliderStyle,
                marginLeft: `${marginLeft}%`,
                width: `${teamSliderData.data.length * newSlideStepResult}%`,
            });
    
            setSliderMove({
                ...sliderMove,
                step: newSlideStepResult,
                startScreenPosition: newPosition,
                endScreenPosition: Math.min(newPosition + newCardsPerSlide - 1, teamSliderData.data.length - 1),
            });
        };
    
        changeResize();
    
        window.addEventListener('resize', changeResize);
    
        return () => {
            window.removeEventListener('resize', changeResize);
        };
    }, [sliderMove.step, teamSliderData.data.length]);
    

    return (
        <div className={s.slider__wrap}>
            <h2 className={s.title}>{teamSliderData.title}</h2>
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
                            {teamSliderData.data.map((item, index) => {
                                return (
                                    <div key={index} className={`${s.slider__card}
                                        ${(index - sliderMove.startScreenPosition === 0 || index - sliderMove.startScreenPosition === 4) && screenWidth >= 1300 ? s.scale08 : null}
                                        ${(index - sliderMove.startScreenPosition === 1 || index - sliderMove.startScreenPosition === 3) && screenWidth >= 1300 ? s.scale09 : null}
                                    `}
                                    >
                                        <div className={s.img__wrap}>
                                            <img src={item.imgUrl} alt={item.name} />
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
                    {Array.from({ length: Math.ceil(teamSliderData.data.length / cardsPerSlide) }).map((item, index) => (
                        <div className={`${s.dot} ${index === activeDot ? s.dot__active : null}`} key={index} onClick={() => {
                            setActiveDot(index)
                            const newPosition = teamSliderData.data.length % cardsPerSlide !== 0 && index === Math.floor(teamSliderData.data.length / cardsPerSlide)
                                ? index * cardsPerSlide - (cardsPerSlide - teamSliderData.data.length % cardsPerSlide)
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



