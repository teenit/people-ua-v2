import React, { useState } from 'react'
import s from './BurgerMenu.module.css'
import PortalModalRoot from '../Portals/PortalModalRoot'
import BurgerModal from './BurgerModal'

const BurgerMenu = () => {
    const [active,setActive] = useState(false)
  return (
    <div className={s.burger__wrap} onClick={()=>{
        setActive(!active)
    }}>
        <div className={`${s.line} ${ active&&(s.l1)}`}></div>
        <div className={`${s.line} ${ active&&(s.l2)}`}></div>
        <div className={`${s.line} ${ active&&(s.l3)}`}></div>
        {active?<BurgerModal setActive={setActive}/>:null}
    </div>
  )
}

export default BurgerMenu