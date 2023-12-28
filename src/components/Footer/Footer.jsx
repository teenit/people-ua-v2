import React, { useState } from 'react'
import s from './Footer.module.css'
import logo from '../../img/footer-logo.svg'
import phone from '../../img/phone.svg'
import location from '../../img/location.svg'
import PortalModalRoot from '../Portals/PortalModalRoot'
import DonatForm from '../Forms/DonatForm'

const Footer = () => {
  const [donate, setDonat] = useState ({
    openModal:false
  })
  return (
    <div className={s.footer__wrap}>
      <div className={s.footer__inner}>
        <div className={s.img__wrap}>
          <a href="#"><img src={logo} alt="Громадська органзація ЛЮДИ ЮЕЙ" /></a>
          
        </div>
        <div className={s.footer__links__wrap}>
          <p><a onClick={()=>{
            document.getElementById("ourDirections").scrollIntoView({behavior:"smooth",block:"start"})
          }}>Напрямки діяльності</a></p>
          <p><a onClick={()=>{
            document.getElementById("aboutUs").scrollIntoView({behavior:"smooth",block:"start"})
          }}>Про нас</a></p>
          <p><a onClick={()=>{
            document.getElementById("ourPartners").scrollIntoView({behavior:"smooth",block:"start"})
          }}>Наші партнери</a></p>
        </div>
        <div className={s.footer__buttons__wrap}>
          <div className={s.footer__phone__button}>
            <div className={s.footer__icon__wrap}>
              <img src={location} alt="" />
            </div>
            <span>м. Київ, Раїси Окіпної 4Б</span>
          </div>
          <div className={s.footer__phone__button}>
            <div className={s.footer__icon__wrap}>
              <img src={phone} alt="" />
            </div>
            <span>+380932080760</span>
          </div>
        </div>
        <div onClick={()=>{
            setDonat({...donate,openModal:true})
          }} className={s.footer__support__button}>підртримати</div>
      </div>
      <p>Copyright © 2023 People UA | Powered by <a href="https://studio.itclub.in.ua/">IT Club studio</a></p>
      {
        donate.openModal && (
          <PortalModalRoot>
            <DonatForm close = {()=>setDonat({...donate,openModal:false})}/>
          </PortalModalRoot>
        )
      }
    </div>
  )
}

export default Footer