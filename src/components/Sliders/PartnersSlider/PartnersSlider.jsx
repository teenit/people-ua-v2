import React, { useEffect, useState } from "react";
import s from './PartnersSlider.module.css'
import arrowLeft from '../../../img/slider-arrow-left.svg';
import arrowRight from '../../../img/slider-arrow-right.svg';
import img1 from '../../../img/partnersSlider/img1.png';
import img2 from '../../../img/partnersSlider/img2.png';
import img3 from '../../../img/partnersSlider/img3.png';

const PartnersSlider = () => {
    const partnersSliderData = [img1, img2, img3]
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [slideStepResult, setSlideStepResult] = useState(20);
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
    useEffect(() => {
        const changeResize = () => {
            const newScreenWidth = window.innerWidth;
            setScreenWidth(newScreenWidth);

            let newSlideStepResult;
            if (newScreenWidth <= 1300 && newScreenWidth >= 1050) {
                newSlideStepResult = 25;
                setSliderMove({ ...sliderMove, endScreenPosition: 3 });
            } else if (newScreenWidth <= 1050 && newScreenWidth >= 800) {
                newSlideStepResult = 33.3;
                setSliderMove({ ...sliderMove, endScreenPosition: 2 });
            } else if (newScreenWidth < 800 && newScreenWidth >= 550) {
                newSlideStepResult = 50;
                setSliderMove({ ...sliderMove, endScreenPosition: 1 });
            } else if (newScreenWidth < 550) {
                newSlideStepResult = 100;
                setSliderMove({ ...sliderMove, endScreenPosition: 0 });
            } else {
                newSlideStepResult = 20;
                setSliderMove({ ...sliderMove, endScreenPosition: 4 });
            }

        };

        window.addEventListener('resize', changeResize);

        return () => {
            window.removeEventListener('resize', changeResize);
        };
    }, [sliderMove.step, partnersSliderData.length]);

    return (
        <div className={s.slider__wrap}>
            <h2 className={s.title}>наші партнери</h2>
            <div className={s.slider__inner}>
                <div className={s.slider}>
                    <div className={s.slider__content}>
                        {partnersSliderData.map((item, index) => {
                            return (

                                <div className={s.img__wrap} key={index} style={sliderStyle}>
                                    <img src={item} alt="" />
                                </div>

                            );
                        })}
                    </div>
                </div>

                <div className={s.slider__dots}>
                    <div className={s.dot}></div>
                </div>
            </div>
        </div>)
}

export default PartnersSlider