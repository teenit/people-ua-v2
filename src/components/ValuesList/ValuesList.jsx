import React from 'react'
import s from './ValuesList.module.css'

const ValuesList = ({data}) => {
  return (
    <div className={s.values__wrap}>
        <h2 className={s.title}>{data.title}</h2>
        <div className={s.values__inner}>
            <div className={s.img__wrap}>
                <img src={data.imgUrl} alt={data.title} />
            </div>
            <div className={s.values__list}>
                {data.values.map((item,index)=>{
                    return(
                        <p key={index}>{item}</p>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default ValuesList