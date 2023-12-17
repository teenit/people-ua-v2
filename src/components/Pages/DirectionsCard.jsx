import React, { useState } from 'react';
import s from './FrontPage.module.css';
import buttonArrow from '../../img/arrow-right-white.svg';

const DirectionsCard = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={s.directions__card__wrap}
    >
      <div className={s.directions__card__img}>
        <img src={data.imgUrl} alt="" />
      </div>
      <div className={`${s.directions__card__info} ${isExpanded? s.expanded :''}`}>
        <h3>{data.title}</h3>
        <div className={s.directions__card__panel}>
          <p>{data.description}</p>
          <button className={s.directions__card__button}>
            <img src={buttonArrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DirectionsCard;



