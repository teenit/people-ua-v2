import React from 'react'
import s from './BurgerMenu.module.css'
import PortalModalRoot from '../Portals/PortalModalRoot'
import Lang from '../Header/Lang'
import phone from '../../img/phone.svg'
const BurgerModal = ({ setActive }) => {
    return (
        <PortalModalRoot>
            <div className={s.modal__inner}>
                <div className={s.burger__wrap} onClick={() => {
                    setActive(false)
                }}>
                    <div className={`${s.line} ${s.l1}`}></div>
                    <div className={`${s.line} ${s.modal}`}></div>
                </div>
                <Lang/>
                <div className={s.header__phone__button}>
                    <div className={s.header__icon__wrap}>
                        <img src={phone} alt="" />
                    </div>

                    <span>+380932080760</span>
                </div>
            </div>
        </PortalModalRoot>
    )
}

export default BurgerModal