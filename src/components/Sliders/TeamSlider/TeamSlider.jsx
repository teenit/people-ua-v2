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
            name: 'our team name1',
            status: 'our team role1'
        },
        {
            imgUrl: img2,
            name: 'our team name2',
            status: 'our team role2'
        },
        {
            imgUrl: img3,
            name: 'our team name3',
            status: 'our team role3'
        },
        {
            imgUrl: img4,
            name: 'our team name4',
            status: 'our team role4'
        },
        {
            imgUrl: img5,
            name: 'our team name5',
            status: 'our team role5'
        },
        {
            imgUrl: img5,
            name: 'our team name6',
            status: 'our team role6'
        },
        {
            imgUrl: img5,
            name: 'our team name7',
            status: 'our team role7'
        },
    ];

    const [currentMove, setCurrentMove] = useState(0);
    const [copy, setCopy] = useState([...teamSliderData]);
    const [activeDot, setActiveDot] = useState(0);
    const [sliderStyle, setSliderStyle]  = useState({
        marginLeft: 0,
        width:teamSliderData.length * 20 + "%"
    });
    const [sliderMove, setSliderMove] = useState({
        step:20,
        startPosition:0,
        endPosition: teamSliderData.length - 1,
        endScreenPosition: 4,
        startScreenPosition: 0,
        sliderPosition:0
    })
    const moveData = (move) => {
        setCopy(teamSliderData.slice(move, move + 5));
    };

    useEffect(() => {
        moveData(currentMove);
    }, [currentMove]);

    useEffect(() => {
        const dotsLength = Math.ceil(teamSliderData.length / 5);
        if (activeDot === dotsLength - 1 && teamSliderData.length % 5 !== 0) {
            setCurrentMove(teamSliderData.length - 5);
        }
    }, [activeDot, teamSliderData]);

    return (
        <div className={s.slider__wrap}>
            <h2 className={s.title} onClick={()=>console.log(sliderMove)}>наша команда</h2>
            <div className={s.slider__inner}>
                <div className={s.slider}>
                    <div className={s.arrow}>
                        <img src={arrowLeft} alt="" onClick={() => {
                            if(sliderMove.startScreenPosition < 1) return;
                                 let marginLeft = -sliderMove.step * (sliderMove.sliderPosition - 1);
                                 setSliderMove({...sliderMove, sliderPosition:sliderMove.sliderPosition - 1, startScreenPosition:sliderMove.startScreenPosition - 1, endScreenPosition:sliderMove.endScreenPosition - 1})
                                 setSliderStyle({...sliderStyle,marginLeft:marginLeft + "%"})
                            }}
                        />
                    </div>
                    <div className={s.slider_content_wrap}>
                    <div className={s.slider__content} style={sliderStyle}>
                      {teamSliderData.map((item, index) => {
                            return (
                                <div key={index} className={`${s.slider__card}
                                    ${index - sliderMove.startScreenPosition === 0 || index - sliderMove.startScreenPosition === 4 ? s.scale08 : null}
                                    ${index - sliderMove.startScreenPosition === 1 || index - sliderMove.startScreenPosition === 3 ? s.scale09 : null}
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
                                let marginLeft = -sliderMove.step * (sliderMove.sliderPosition + 1);
                                if (sliderMove.endScreenPosition + 1 > sliderMove.endPosition) return;
                                setSliderMove({...sliderMove, sliderPosition:sliderMove.sliderPosition + 1, startScreenPosition:sliderMove.startScreenPosition + 1, endScreenPosition:sliderMove.endScreenPosition + 1})
                                setSliderStyle({...sliderStyle,marginLeft:marginLeft + "%"})
                            }}
                        />
                    </div>
                </div>

                <div className={s.slider__dots}>
                    {Array.from({ length: Math.ceil(teamSliderData.length / 5) }).map((item, index) => (
                        <div className={`${s.dot} ${index === activeDot ? s.dot__active : null}`} key={index} onClick={() => {
                                setActiveDot(index);
                                setCurrentMove(index * 5);
                            }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamSlider;
