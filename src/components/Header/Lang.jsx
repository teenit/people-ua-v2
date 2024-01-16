import React from 'react'
import s from './Header.module.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Lang = () => {
    const [lang,setLang] = useState({
        ua:true,
        en:false,
        de:false
    })
    return (
        <div className={s.lang__wrap}>
            <NavLink to={"/"} className={lang.ua?s.active:s.lang__span} onClick={()=>{
                setLang({...lang,ua:!lang.ua,en:false,de:false})
            }}>ua</NavLink>
            <div className={s.lang__line}></div>
            <NavLink to={"/en"} className={lang.en?s.active:s.lang__span} onClick={()=>{
                setLang({...lang,ua:false,en:!lang.eng,de:false})
            }}>en</NavLink>
            {/* <div className={s.lang__line}></div>
            <span className={lang.de?s.active:null} onClick={()=>{
                setLang({...lang,ua:false,en:false,de:!lang.de})
            }}>de</span> */}
        </div>
    )
}

export default Lang