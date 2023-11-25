import React from 'react'
import s from './Header.module.css'
import logo from '../../img/logo.svg'
import phone from '../../img/phone.svg'
import Lang from './Lang'

const Header = () => {
  return (
    <header className={s.header__wrap}>
      <div className={s.header__inner}>
          <div className={s.header__img}>
            <img src={logo} alt="Логотип" />
          </div>
        <div className={s.header__panel}>
          <Lang/>
          <button className={s.header__phone__button}>
            <div className={s.header__icon__wrap}>
               <img src={phone} alt="" />
            </div>
           
            <span>+380932080760</span>
          </button>
          <button className={s.header__support__button}>підтримати</button>
        </div>
      </div>
    </header>
  )
}

export default Header