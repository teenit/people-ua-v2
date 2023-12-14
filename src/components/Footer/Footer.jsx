import React from 'react'
import s from './Footer.module.css'
import logo from '../../img/footer-logo.svg'
import phone from '../../img/phone.svg'
import location from '../../img/location.svg'

const Footer = () => {
  return (
    <div className={s.footer__wrap}>
      <div className={s.footer__inner}>
        <div className={s.img__wrap}>
          <a href="#"><img src={logo} alt="" /></a>
          
        </div>
        <div className={s.footer__links__wrap}>
          <p><a href="#">Напрямки діяльності</a></p>
          <p><a href="#">Про нас</a></p>
          <p><a href="#">Стати партнером</a></p>
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
        <div className={s.footer__support__button}>підртримати</div>
      </div>
      <p>Copyright © 2023 People UA | Powered by <a href="https://studio.itclub.in.ua/">IT Club studio</a></p>
    </div>
  )
}

export default Footer