import React, { useState } from "react";
import s from './DonatForm.module.css';
import arrowImg from './../../img/read-more.svg';
import monoImg from './../../img/uah_50.png'
import privatImg from './../../img/privatbank-r0-square_medium.jpg'
import monoLogoImg from './../../img/monobank.jpg'

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
                        <h2>Підтримайте нас зручним для Вас способом</h2>
                    </div>
                    <div onClick={close} className={s.close_btn}>
                        <span className={s.f}></span>
                        <span className={s.s}></span>
                    </div>
                </div>
                <div className={s.body}>
                <DropElement 
                        active={true}
                        title={<><span><a href="https://send.monobank.ua/jar/9yixFpAKaA" target="_blank" rel="noopener noreferrer">На монобанку</a></span><img className={s.monoImg} src={monoImg} alt="Mono banka" />
                        <img className={s.monoImg} src={monoLogoImg} alt="Mono bank дщпщ" /></>}
                        children={<div>
                            <div className={s.item}>
                                <div className={s.item_title}>За посиланням</div>
                                <div className={s.item_description}>
                                    <a href="https://send.monobank.ua/jar/9yixFpAKaA" target="_blank" rel="noopener noreferrer">МОНОБАНКА</a>
                                </div>
                            </div>
                                <div className={s.item}>
                                <div className={s.item_title}>Номер картки банки</div>
                                <div className={s.item_description} onClick={(e)=>{
                                    navigator.clipboard.writeText(e.target.innerText)
                                }}>5375 4112 1108 2388</div>
                            </div>
                            <div className={s.item}>
                                <div className={s.item_title}>Призначення платежу</div>
                                <div className={s.item_description} onClick={(e)=>{
                                    navigator.clipboard.writeText(e.target.innerText)
                                }}>Безповоротна грошова допомога</div>
                            </div>
                            </div>}
                    />
                    <DropElement 
                        active={true}
                        title={<><span>На картку Приватбанку</span><img className={s.monoImg} src={privatImg} alt="" /></>}
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
                    <DropElement 
                        title={'На рахунок "ГО ЛЮДИ ЮЕЙ"'}
                        active={true}
                        children={<div className="children__elements">
                            <div className={s.item}>
                            <div className={s.item_title}>Найменування організації:</div>
                            <div className={s.item_description} onClick={(e)=>{
                                navigator.clipboard.writeText(e.target.innerText)
                            }}>ЛЮДИ ЮЕЙ ГО</div>
                        </div>
                        <div className={s.item}>
                            <div className={s.item_title}>Код отримувача:</div>
                            <div className={s.item_description} onClick={(e)=>{
                                navigator.clipboard.writeText(e.target.innerText)
                            }}>44814017</div>
                        </div>
                        <div className={s.item}>
                            <div className={s.item_title}>Назва банку:</div>
                            <div className={s.item_description} onClick={(e)=>{
                                navigator.clipboard.writeText(e.target.innerText)
                            }}>АТ КБ "ПРИВАТБАНК"</div>
                        </div>
                        <div className={s.item}>
                            <div className={s.item_title}>Рахунок отримувача у форматі IBAN: </div>
                            <div className={s.item_description} onClick={(e)=>{
                                navigator.clipboard.writeText(e.target.innerText)
                            }}>UA323052990000026006030125781</div>
                        </div>
                        <div className={s.item}>
                            <div className={s.item_title}>Валюта:  </div>
                            <div className={s.item_description} onClick={(e)=>{
                                navigator.clipboard.writeText(e.target.innerText)
                            }}>UAH</div>
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