import React, { useEffect, useState } from "react";
import s from './PartnersSlider.module.css'
import arrowLeft from '../../../img/slider-arrow-left.svg';
import arrowRight from '../../../img/slider-arrow-right.svg';
import img1 from '../../../img/partnersSlider/img1.png';
import img2 from '../../../img/partnersSlider/img2.png';
import img3 from '../../../img/partnersSlider/img3.png';

const PartnersSlider = () => {
    const partnersSliderData = [img1, img2, img3]

    const [currentMove, setCurrentMove] = useState(0);
    const [copy, setCopy] = useState([...partnersSliderData]);

    const moveData = (move) => {
        setCopy(partnersSliderData.filter((item, index) => index >= move && index < move + 5));
    };

    useEffect(() => {
        moveData(currentMove);
    }, [currentMove]);
    return (
        <div className={s.slider__wrap}>
            <h2 className={s.title}>наші партнери</h2>
            <div className={s.slider__inner}>
                <div className={s.slider}>
                    <div className={s.slider__content}>
                        {copy.map((item, index) => {
                            return (

                                <div className={s.img__wrap} key={index}>
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