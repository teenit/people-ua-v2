import React from 'react'
import s from './Header.module.css'
import logo from '../../img/logo.svg'
import phone from '../../img/phone.svg'
import Lang from './Lang'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

const Header = () => {
  return (
    <header className={s.header__wrap}>
      <div className={s.header__inner}>
          <div className={s.header__img}>
            <a href="#"><img src={logo} alt="Логотип" /></a>
          </div>
        <div className={s.header__panel}>
          <Lang/>
          <div className={s.header__phone__button}>
            <div className={s.header__icon__wrap}>
               <img src={phone} alt="" />
            </div>
           
            <span>+380932080760</span>
          </div>
          <button className={s.header__support__button}>підтримати</button>
          <BurgerMenu/>
        </div>
      </div>
    </header>
  )
}

export default Header