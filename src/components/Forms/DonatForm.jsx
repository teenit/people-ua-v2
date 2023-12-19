import React, { useState } from "react";
import s from './DonatForm.module.css';




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
                    <div className={s.line}>
                        <div className={s.line_title}>На рахунок "ГО ЛЮДИ ЮЕЙ"</div>
                        <div className={s.item}>
                            <div className={s.item_title}>Найменування організації:</div>
                            <div className={s.item_description}>ЛЮДИ ЮЕЙ ГО</div>
                        </div>
                        <div className={s.item}>
                            <div className={s.item_title}>Код отримувача:</div>
                            <div className={s.item_description}>44814017</div>
                        </div>
                        <div className={s.item}>
                            <div className={s.item_title}>Назва банку:</div>
                            <div className={s.item_description}>АТ КБ "ПРИВАТБАНК"</div>
                        </div>
                        <div className={s.item}>
                            <div className={s.item_title}>Рахунок отримувача у форматі IBAN: </div>
                            <div className={s.item_description}>UA323052990000026006030125781</div>
                        </div>
                        <div className={s.item}>
                            <div className={s.item_title}>Валюта:  </div>
                            <div className={s.item_description}>UAH</div>
                        </div>
                
                        <div className={s.item}>
                            <div className={s.item_title}>Призначення платежу</div>
                            <div className={s.item_description}>Безповоротна грошова допомога</div>
                        </div>
                 
                    </div>
                    <div className={s.line}>
                        <div className={s.line_title}>На карту Приват банку</div>
                        <div className={s.item}>
                            <div className={s.item_title}>Номер карти</div>
                            <div className={s.item_description}>5169335100430582</div>
                        </div>
                        <div className={s.item}>
                            <div className={s.item_title}>Призначення платежу</div>
                            <div className={s.item_description}>Безповоротна грошова допомога</div>
                        </div>
                    </div>
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