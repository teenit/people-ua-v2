import React, { useState } from 'react'
import s from './Footer.module.css'
import logo from '../../img/footer-logo.svg'
import phone from '../../img/phone.svg'
import location from '../../img/location.svg'
import PortalModalRoot from '../Portals/PortalModalRoot'
import DonatFormEN from '../Forms/DonatFormEN'

const Footer = () => {
  const [donate, setDonat] = useState ({
    openModal:false
  })
  return (
    <div className={s.footer__wrap}>
      <div className={s.footer__inner}>
        <div className={s.img__wrap}>
          <a href="#"><img src={logo} alt="NGO PEOPLE UA" /></a>
          
        </div>
        <div className={s.footer__links__wrap}>
          <p><a onClick={()=>{
            document.getElementById("ourDirections").scrollIntoView({behavior:"smooth",block:"start"})
          }}>Main directions of our activities</a></p>
          <p><a onClick={()=>{
            document.getElementById("aboutUs").scrollIntoView({behavior:"smooth",block:"start"})
          }}>About us</a></p>
          <p><a onClick={()=>{
            document.getElementById("ourPartners").scrollIntoView({behavior:"smooth",block:"start"})
          }}>Our partners</a></p>
        </div>
        <div className={s.footer__buttons__wrap}>
          <div className={s.footer__phone__button}>
            <div className={s.footer__icon__wrap}>
              <img src={location} alt="" />
            </div>
            <span> <a href="https://maps.app.goo.gl/PmF3kEfUg1zvJRBH9" target='_blank'> м. Київ, Раїси Окіпної 4Б</a></span>
          </div>
          <div className={s.footer__phone__button}>
            <div className={s.footer__icon__wrap}>
              <img src={phone} alt="" />
            </div>
            <span><a href="tel:0932080760">+380932080760</a></span>
          </div>
        </div>
        <div onClick={()=>{
            setDonat({...donate,openModal:true})
          }} className={s.footer__support__button}>support us</div>
      </div>
      <p>Copyright © 2024 People UA | Powered by <a href="https://studio.itclub.in.ua/">IT Club studio</a></p>
      {
        donate.openModal && (
          <PortalModalRoot>
            <DonatFormEN close = {()=>setDonat({...donate,openModal:false})}/>
          </PortalModalRoot>
        )
      }
    </div>
  )
}

export default Footer