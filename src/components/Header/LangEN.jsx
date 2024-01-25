import React from 'react'
import s from './Header.module.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Lang = () => {
    return (
        <div className={s.lang__wrap}>
            <NavLink to={"/"} className={s.lang__span}>ua</NavLink>
            <div className={s.lang__line}></div>
            <NavLink to={"/en"} className={`${s.active} ${s.lang__span}`}>en</NavLink>
            {/* <div className={s.lang__line}></div>
            <span className={lang.de?s.active:null} onClick={()=>{
                setLang({...lang,ua:false,en:false,de:!lang.de})
            }}>de</span> */}
        </div>
    )
}

export default Lang