import React, { useState } from 'react';
import s from './FrontPage.module.css';
import buttonArrow from '../../img/arrow-right-white.svg';
import DirectionCardInfo from './DirectionCardInfo';

const DirectionsCard = ({ data }) => {
const [state,setState] = useState(false)


  return (
    <div className={s.directions__card__wrap}>
      <div className={s.directions__card__img}>
        <img src={data.imgUrl} alt="" />
      </div>
      <div className={s.directions__card__info}>
        <h3>{data.title}</h3>
        <div className={s.directions__card__panel}>
          <p>{data.description}</p>
          <button className={s.directions__card__button} onClick={()=>{
            setState(true)
          }}>
            <img src={buttonArrow} alt="" />
          </button>
        </div>
      </div>
      {state?<DirectionCardInfo data={data} close={()=>{setState(false)}}/>:null}
    </div>
  );
};

export default DirectionsCard;



