import React from 'react'
import s from './FrontPage.module.css'
import PortalModalRoot from '../Portals/PortalModalRoot'

const DirectionCardInfo = ({ close,data }) => {
    return (
        <PortalModalRoot>
            <div className={s.modal__inner}>
                <div onClick={close} className={s.close_btn}>
                    <span className={s.f}></span>
                    <span className={s.s}></span>
                </div>
                <h2>{data.title}</h2>
                <p>{data.fullDescription}</p>
            </div>
        </PortalModalRoot>
    )
}

export default DirectionCardInfo