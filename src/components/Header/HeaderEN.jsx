import React, { useState } from 'react'
import s from './Header.module.css'
import logo from '../../img/logo.svg'
import phone from '../../img/phone.svg'
import LangEN from './LangEN'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import PortalModalRoot from '../Portals/PortalModalRoot'
import DonatFormEN from '../Forms/DonatFormEN'

const Header = () => {
  const [donate, setDonat] = useState ({
    openModal:false
  })
  return (
    <header className={s.header__wrap}>
      <div className={s.header__inner}>
          <div className={s.header__img}>
            <a href="#"><img src={logo} alt="Logo" /></a>
          </div>
        <div className={s.header__panel}>
          <LangEN/>
          <div className={s.header__phone__button}>
            <div className={s.header__icon__wrap}>
               <img src={phone} alt="" />
            </div>
           
            <span onClick={(e)=>{
              navigator.clipboard.writeText(e.target.value)
            }}>+380932080760</span>
          </div>
          <button onClick={()=>{
            setDonat({...donate,openModal:true})
          }} className={s.header__support__button}>support us</button>
          <BurgerMenu/>
        </div>
      </div>
      {
        donate.openModal && (
          <PortalModalRoot>
            <DonatFormEN close = {()=>setDonat({...donate,openModal:false})}/>
          </PortalModalRoot>
        )
      }
    </header>
  )
}

export default Header