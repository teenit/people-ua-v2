import React, { useState } from "react";
import s from './DonatForm.module.css';
import arrowImg from './../../img/read-more.svg';
import qrCodeImg from './../../img/QR-code-paypal.png'
import privatImg from './../../img/privatbank-r0-square_medium.jpg'
import monoLogoImg from './../../img/monobank.jpg'
import paypal from './../../img/paypal.png'
import swift from './../../img/swift.png'

const DropElement = ({children, title, active = false}) => {
    const [state, setState] = useState({
        active:active
    })
    return (
        <div className={`${s.drop__container} ${state.active ? s.active : ''}`}>
            <div className={s.drop__title}  onClick={()=>setState({...state,active:!state.active})}>
                <div className={s.drop__title__elem}>{title}</div>
                <div className={`${s.drop__arrow} ${state.active ? s.active : ''}`}><img src={arrowImg} alt="Read more" /></div>
            </div>
            <div className={`${s.drop__description} ${state.active ? s.active : ''}`}>
                <div className={s.drop__line}></div>
                {children}
            </div>
        </div>
    )
}


const DonatForm = ({close}) => {
    const [state, setState] = useState({})

    return (
        <div className={s.form}>
            <div className={s.form_inner}>
                <div className={s.header}>
                    <div className={s.title}>
                        <h2>Support us in a way that is comfortable to you</h2>
                    </div>
                    <div onClick={close} className={s.close_btn}>
                        <span className={s.f}></span>
                        <span className={s.s}></span>
                    </div>
                </div>
                <div className={s.body}>
                <DropElement 
                        active={true}
                        title={<><span>SWIFT</span>
                        <img className={s.monoImg} src={swift} alt="Swift" /></>}
                        children={<div>
                                <div className={s.item}>
                                <div className={s.item_title}>IBAN</div>
                                <div className={s.item_description} onClick={(e)=>{
                                    navigator.clipboard.writeText(e.target.innerText)
                                }}>UA903220010000026201304562617</div>
                            </div>
                            <div className={s.item}>
                                <div className={s.item_title}>SWIFT/BIC code</div>
                                <div className={s.item_description} onClick={(e)=>{
                                    navigator.clipboard.writeText(e.target.innerText)
                                }}>UNJSUAUKXXX</div>
                            </div>
                            <div className={s.item}>
                                <div className={s.item_title}>Receiver</div>
                                <div className={s.item_description} onClick={(e)=>{
                                    navigator.clipboard.writeText(e.target.innerText)
                                }}>MELNYKOV PAVLO</div>
                            </div>
                            <div className={s.item}>
                                <div className={s.item_title}>Address</div>
                                <div className={s.item_description} onClick={(e)=>{
                                    navigator.clipboard.writeText(e.target.innerText)
                                }}>01001, Ukraine, c. Kyiv, st. Pavla Tychyny, build. 10, fl. 91</div>
                            </div>
                            </div>}
                    />
                    <DropElement 
                        active={true}
                        title={<><a href="https://www.paypal.com/donate/?hosted_button_id=AQUH5TV8FZ3BC"><span>PayPal</span></a><img className={s.monoImg} src={paypal} alt="" /></>}
                        children={<div className={s.grid}>
                            <div className={s.item}>
                            <div className={s.item_title}>PayPal link</div>
                            <div className={s.item_description} onClick={(e)=>{
                                navigator.clipboard.writeText(e.target.innerText)
                            }}><a className={s.paypal_link} href="https://www.paypal.com/donate/?hosted_button_id=AQUH5TV8FZ3BC">Support us</a></div>
                        </div>
                            <div className={s.item}>
                            <div className={s.item_title}>PayPal mail</div>
                            <div className={s.item_description} onClick={(e)=>{
                                navigator.clipboard.writeText(e.target.innerText)
                            }}><p>donate@people-ua.org</p></div>
                        </div>
                        <div className={s.item}>
                            <div className={s.item_title}>PayPal QR-code</div>
                            <div className={s.item_description} onClick={(e)=>{
                                navigator.clipboard.writeText(e.target.innerText)
                            }}><img src={qrCodeImg} alt="PayPal QR-code" /></div>
                        </div>
                        </div>}
                    />
                    
                    
                    {/* <div className={s.line}>
                        <div className={s.line_title}></div>
                        <div className={s.item}>
                            <div className={s.item_title}></div>
                            <div className={s.item_description}></div>
                        </div>
                    </div> */}
                </div>
                <div className={s.footer}></div>
            </div>
        </div>
    )
}

export default DonatForm;