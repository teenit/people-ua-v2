import React, { useEffect, useState } from "react";
import s from "./PartnersSlider.module.css";
import arrowLeft from '../../../img/slider-arrow-left.svg';
import arrowRight from '../../../img/slider-arrow-right.svg';
import img1 from '../../../img/partnersSlider/img1.png'
import img2 from '../../../img/partnersSlider/img2.png'
import img3 from '../../../img/partnersSlider/img3.png'
import img4 from '../../../img/partnersSlider/img4.png'
import img5 from '../../../img/partnersSlider/img5.png'
import img6 from '../../../img/partnersSlider/img6.png'
import img7 from '../../../img/partnersSlider/img7.jpg'
import img8 from '../../../img/partnersSlider/img8.png'

const PartnersSlider = () => {
    const partnersSliderData = [
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
            title:"Україна без Сиріт"
        },
        {
            imgUrl: img2,
            link:"https://ccx.org.ua/",
            title:"ССХ Україна"
        },

        {
            imgUrl: img3,
            link:"https://tnu.edu.ua/",
            title:"Таврійський Національний Університет"
        },

        {
            imgUrl: img5,
            link: "https://www.facebook.com/HappyHomeUkraine/",
            title:"Happy Home"
        },
        {
            imgUrl: img7,
            link: "https://www.facebook.com/icdt.org.ua/",
            title:"Інститут травми розвитку дитини"
        },
        {
            imgUrl: img8,
            link: "https://maximumfond.org.ua/",
            title:"Міжнародний Благодійний Фонд Максимум"
        },

    ];

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [slideStepResult, setSlideStepResult] = useState(20);
    const [activeDot, setActiveDot] = useState(0);
    const [sliderStyle, setSliderStyle] = useState({
        marginLeft: 0,
        width: `${partnersSliderData.length * slideStepResult}%`
    });
    const [sliderMove, setSliderMove] = useState({
        step: slideStepResult,
        startPosition: 0,
        endPosition: partnersSliderData.length - 1,
        endScreenPosition: 4,
        startScreenPosition: 0,
        sliderPosition: 0
    });
    const [cardsPerSlide, setCardsPerSlide] = useState();

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

            const newPosition = Math.min(sliderMove.sliderPosition, partnersSliderData.length - newCardsPerSlide);
            setSliderStyle({
                ...sliderStyle,
                width: `${partnersSliderData.length * newSlideStepResult}%`,
            });

            setSliderMove({
                ...sliderMove,
                step: newSlideStepResult,
                sliderPosition: newPosition,
                startScreenPosition: newPosition,
                endScreenPosition: Math.min(newPosition + newCardsPerSlide - 1, partnersSliderData.length - 1),
            });
        };

        changeResize();

        window.addEventListener('resize', changeResize);

        return () => {
            window.removeEventListener('resize', changeResize);
        };
    }, [sliderMove.step, partnersSliderData.length]);


    return (
        <div className={s.slider__wrap}>
            <h2 className={s.title} id="ourPartners">наші партнери</h2>
            <div className={s.slider__inner}>
                <div className={s.slider}>
                    <div className={s.arrow}>
                        <img src={arrowLeft} alt="" onClick={() => {
                            if (sliderMove.startScreenPosition < 1) return;
                            let marginLeft = -sliderMove.step * (sliderMove.sliderPosition - 1);
                            setSliderMove({
                                ...sliderMove,
                                sliderPosition: sliderMove.sliderPosition - 1,
                                startScreenPosition: sliderMove.startScreenPosition - 1,
                                endScreenPosition: sliderMove.endScreenPosition - 1
                            });
                            setSliderStyle({ ...sliderStyle, marginLeft: marginLeft + "%" });
                            setActiveDot(activeDot - 1);
                        }} />
                    </div>
                    <div className={s.slider_content_wrap}>
                        <div className={s.slider__content} style={sliderStyle}>
                            {partnersSliderData.map((item, index) => {
                                return (
                                    <div key={index} className={s.slider__card}>
                                        <div className={s.img__wrap}>
                                            <a className={s.link__to__site} href={item.link} target="_blank">
                                                <img src={item.imgUrl} alt={item.title} />
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={s.arrow}>
                        <img src={arrowRight} alt="" onClick={() => {
                            let marginLeft = -sliderMove.step * (sliderMove.sliderPosition + 1);
                            if (sliderMove.endScreenPosition + 1 > sliderMove.endPosition) return;
                            setSliderMove({
                                ...sliderMove,
                                sliderPosition: sliderMove.sliderPosition + 1,
                                startScreenPosition: sliderMove.startScreenPosition + 1,
                                endScreenPosition: sliderMove.endScreenPosition + 1
                            });
                            setSliderStyle({ ...sliderStyle, marginLeft: marginLeft + "%" });
                            setActiveDot(activeDot + 1);
                        }} />
                    </div>
                </div>
                <div className={s.slider__dots}>
                    {Array.from({ length: Math.ceil(partnersSliderData.length / cardsPerSlide) }).map((item, index) => (
                        <div className={`${s.dot} ${index === activeDot ? s.dot__active : null}`} key={index} onClick={() => {
                                setActiveDot(index);
                                const newPosition = index * cardsPerSlide;
                                if (newPosition > sliderMove.endPosition) return;

                                const marginLeft = -sliderMove.step * newPosition;
                                setSliderMove({
                                    ...sliderMove,
                                    sliderPosition: newPosition,
                                    startScreenPosition: newPosition,
                                    endScreenPosition: Math.min(newPosition + cardsPerSlide - 1, sliderMove.endPosition),
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

export default PartnersSlider;
