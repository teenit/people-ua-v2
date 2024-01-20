import React, { useState } from "react";
import s from './DonatForm.module.css';
import arrowImg from './../../img/read-more.svg';
import monoImg from './../../img/uah_50.png'
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
                        title={<><span>PayPal</span><img className={s.monoImg} src={paypal} alt="" /></>}
                        children={<div>
                            <div className={s.item}>
                            <div className={s.item_title}>Номер картки</div>
                            <div className={s.item_description} onClick={(e)=>{
                                navigator.clipboard.writeText(e.target.innerText)
                            }}>5169335100430582</div>
                        </div>
                        <div className={s.item}>
                            <div className={s.item_title}>Призначення платежу</div>
                            <div className={s.item_description} onClick={(e)=>{
                                navigator.clipboard.writeText(e.target.innerText)
                            }}>Безповоротна грошова допомога</div>
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