import React, { useState } from 'react';
import s from './FrontPage.module.css';
import buttonArrow from '../../img/arrow-right-white.svg';
import NewsCardInfo from './NewsCardInfo';

const NewsCard = ({ data, lang = "ua" }) => {
  const [state, setState] = useState(false)


  return (
    <div className={s.directions__card__wrap}>
      <div className={s.directions__card__img}>
        <img src={data.imgUrl} alt={data.title} />
      </div>
      <div className={s.directions__card__info}>
        <h3>{data.title}</h3>
        
          <div className={s.news__card__panel}>
            <p>{data.description}</p>
            <button className={s.news__card__button} onClick={() => {
              setState(!state)
            }}>
              <span>{lang == "en" ? "Read more" : "Читати далі"}</span>
              <img src={buttonArrow} alt="" />
            </button>
          </div>

      </div>
      {state?<NewsCardInfo data={data} close={()=>{setState(false)}}/>:null}
    </div>
  );
};

export default NewsCard;



