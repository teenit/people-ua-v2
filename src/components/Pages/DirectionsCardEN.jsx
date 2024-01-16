import React, { useState } from 'react';
import s from './FrontPage.module.css';
import buttonArrow from '../../img/arrow-right-white.svg';
import DirectionCardInfo from './NewsCardInfo';

const DirectionsCard = ({ data }) => {
  const [state, setState] = useState(false)

  return (
    <div className={s.directions__card__wrap}>
      <div className={s.directions__card__img}>
        <img src={data.imgUrl} alt={data.title} />
      </div>
      <div className={s.directions__card__info}>
        <h3>{data.title}</h3>
        {!state ?
          <div className={s.directions__card__panel}>
            <p>{data.description}</p>
            <button className={s.directions__card__button} onClick={() => {
              setState(!state)
            }}>
              <img src={buttonArrow} alt="" />
            </button>
          </div> : <div className={`${s.directions__card__panel} ${s.active__description}`}>
            <p>
              <b>The task: </b>{data.task}<br />
              <b>How? </b>{data.yak}
            </p>
            <button className={s.directions__card__button} onClick={() => {
              setState(!state)
            }}>
              <img src={buttonArrow} alt="" />
            </button>
          </div>}

      </div>
      {/* {state?<DirectionCardInfo data={data} close={()=>{setState(false)}}/>:null} */}
    </div>
  );
};

export default DirectionsCard;



