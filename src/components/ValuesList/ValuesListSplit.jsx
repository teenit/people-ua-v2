import React from 'react'
import s from './ValuesList.module.css'

const ValuesListSplit = ({ data }) => {
    return (
        <div className={s.values__wrap}>
            <h2 className={s.title}>{data.title}</h2>
            <div className={s.values__inner}>
                <div className={s.img__wrap}>
                    <img src={data.imgUrl} alt={data.title} />
                </div>
                <div className={`${s.values__list} ${s.values__list__multi}`}>
                    {data.values.map((item, index) => {
                        return (
                            <div className={s.values__multi} key={index}>
                                <p style={{fontWeight:"bold"}}>{data.listTitles[index]}</p>
                                {item.map((p) => {
                                    return (
                                        <p key={p}>{p}</p>
                                    )
                                })}

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ValuesListSplit