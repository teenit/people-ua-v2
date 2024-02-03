import React from 'react'
import s from './FrontPage.module.css'
import PortalModalRoot from '../Portals/PortalModalRoot'

const NewsCardInfo = ({ close, data, lang }) => {
    return (
        <PortalModalRoot>
            <div className={s.modal__inner}>
                <div className={s.close__btn__wrap}>
                <div onClick={close} className={s.close_btn}>
                    <span className={s.f}></span>
                    <span className={s.s}></span>
                </div>
                </div>

                <h2 className={lang=="en"?s.title__eng:{}}>{data.title}</h2>
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