import React, { useEffect, useState } from "react";
import s from "./TeamSlider.module.css";
import img1 from '../../../img/teamSlider/img1.png'
import img2 from '../../../img/teamSlider/img2.png'
import img3 from '../../../img/teamSlider/img3.png'
import img4 from '../../../img/teamSlider/img4.png'
import img5 from '../../../img/teamSlider/img5.png'
const TeamSlider = ({}) =>{
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
        }
    ]
    const[slider, setSlider] = useState({
        sliderPosition: 0,
        slideNow: 0,
        step: 20,
        percent: 20,
        marginLeft: 0,
        amountOnPage: 0
    })
    
    const [isOneSlide, setIsOneSlide] = useState(false);
    useEffect(()=>{
        if(window.innerWidth < 500){
            setOneSlide()
        }
        else{
            setTwoSlides()
        }

    }, [])
    window.addEventListener("resize", (event) => {
        if(window.innerWidth < 500){
            if (!isOneSlide) {
                setOneSlide()
            }
        }
        else{
            if (isOneSlide) {
                setTwoSlides()
            }
        }
    });

    function setTwoSlides() {
        setSlider({...slider, amountOnPage: 5,  step: 20, percent: 20})
        setIsOneSlide(false)
    }

    function setOneSlide() {
        setSlider({...slider, amountOnPage: 1, step: 100, percent: 100})
        setIsOneSlide(true)
    }

    return(
        <div className={s.wrap}>
            <div className={`${s.arrows} ${s.arrow__left}`} onClick={()=>{
                let go = slider.sliderPosition + slider.step;
                if(go > 0) return;
                let slN = slider.slideNow - 1;
                if(slN % 5 == 0) setSlider({...slider, sliderPosition: go, slideNow:slN})
                else setSlider({...slider, sliderPosition: go, slideNow:slN})

            }}></div>
            <div className={s.inner}>
                <div className={`${s.slider}`} style={{
                    gridTemplateColumns: `repeat(${teamSliderData.length}, ${slider.percent}%)`,
                    marginLeft: `${slider.sliderPosition}%`
                }}>
                    {
                        teamSliderData.map((item, index)=>{
                            return(
                                <div className={`${s.slide} ${index == slider.slideNow || index == slider.slideNow + 4 ? s.smaller :null} ${index == slider.slideNow + 1 || index == slider.slideNow + 3 ? s.middle :null}`} key={index}>
                                    <div className={s.slide__in}>
                                        <div className={s.slide__item}>
                                            <div className={s.item__img}>
                                                <img className={s.img} src={item.imgUrl} alt={item.status}/>
                                            </div>
                                            <div className={s.item__name}>
                                                <h3 className={s.tittle}>{item.name}</h3>
                                            </div>
                                            <div className={s.item__status}>
                                                <p className={s.text}>{item.status}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <div className={`${s.arrows} ${s.arrow__right}`} onClick={()=>{
                let go = slider.sliderPosition - slider.step;
                console.log(go);
                if(go < -(teamSliderData.length * slider.percent) + 100) return;
                let slN = slider.slideNow + 1;
                if(slN % 5 == 0) setSlider({...slider, sliderPosition: go, slideNow:slN})
                else setSlider({...slider, sliderPosition: go, slideNow:slN})
            }}></div>
        </div>
    )   
}
export default TeamSlider;