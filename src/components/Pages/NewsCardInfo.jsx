import React from 'react'
import s from './FrontPage.module.css'
import PortalModalRoot from '../Portals/PortalModalRoot'

const NewsCardInfo = ({ close, data }) => {
    return (
        <PortalModalRoot>
            <div className={s.modal__inner}>
                <div onClick={close} className={s.close_btn}>
                    <span className={s.f}></span>
                    <span className={s.s}></span>
                </div>
                <h2>{data.title}</h2>
                <div className={s.news__wrap}>

                {data.fullDescription.map(item => (
                        <div className={s.news__row}>
                            <p>{item.text}</p>
                            <div className={s.news__img__wrap}>
                                <img src={item.img} alt="" />
                            </div>
                        </div>
                ))}
                    </div>

            </div>
        </PortalModalRoot>
    )
}

export default NewsCardInfo