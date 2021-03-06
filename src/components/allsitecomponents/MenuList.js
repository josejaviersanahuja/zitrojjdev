import React from 'react'

export default function MenuList({isOpen, url, text, active}) {
    
    const extraerClase=()=>{
    let isActive=isOpen? "menu-nav__item open":"menu-nav__item"
        if(text===active) {
            isActive= isActive+" active"
        }
    
    return isActive
    }
    

    return (
        <li className={extraerClase()}>
                <a className={isOpen? "menu-nav__item__link open":"menu-nav__item__link"} href={url}>{text}</a>
        </li>
    )
}
