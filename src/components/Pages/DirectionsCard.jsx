import React from 'react'
import s from './FrontPage.module.css'
import buttonArrow from '../../img/arrow-right-white.svg'

const DirectionsCard = () => {
    return (
        <div className={s.directions__card__wrap}>
            <div className={s.directions__card__img}></div>
            <div className={s.directions__card__info}>
                <h3>test</h3>
                <div className={s.directions__card__panel}>
                    <p>test</p>
                    <button className={s.directions__card__button}>
                        <img src={buttonArrow} alt="" />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default DirectionsCard