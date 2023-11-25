import React from 'react'
import s from './Header.module.css'
import { useState } from 'react'

const Lang = () => {
    const [lang,setLang] = useState({
        ua:true,
        en:false,
        de:false
    })
    return (
        <div className={s.lang__wrap}>
            <span className={lang.ua?s.active:null} onClick={()=>{
                setLang({...lang,ua:!lang.ua,en:false,de:false})
            }}>ua</span>
            <div className={s.lang__line}></div>
            <span className={lang.en?s.active:null} onClick={()=>{
                setLang({...lang,ua:false,en:!lang.eng,de:false})
            }}>en</span>
            <div className={s.lang__line}></div>
            <span className={lang.de?s.active:null} onClick={()=>{
                setLang({...lang,ua:false,en:false,de:!lang.de})
            }}>de</span>
        </div>
    )
}

export default Lang