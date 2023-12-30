import React, { useState } from 'react'
import s from './Header.module.css'
import logo from '../../img/logo.svg'
import phone from '../../img/phone.svg'
import Lang from './Lang'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import PortalModalRoot from '../Portals/PortalModalRoot'
import DonatForm from '../Forms/DonatForm'

const Header = () => {
  const [donate, setDonat] = useState ({
    openModal:false
  })
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
           
            <span><a href="tel:0932080760">+380932080760</a></span>
          </div>
          <button onClick={()=>{
            setDonat({...donate,openModal:true})
          }} className={s.header__support__button}>підтримати</button>
          <BurgerMenu/>
        </div>
      </div>
      {
        donate.openModal && (
          <PortalModalRoot>
            <DonatForm close = {()=>setDonat({...donate,openModal:false})}/>
          </PortalModalRoot>
        )
      }
    </header>
  )
}

export default Header