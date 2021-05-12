import React from 'react'

export default function MenuList({isOpen, url, text}) {
    
    const extraerClase=()=>{
    let isActive=isOpen? "menu-nav__item open":"menu-nav__item"
    if (document.querySelector('.home')) {
        if(text==="Home") {
            isActive= isActive+" active"
        }
    }
    if (document.querySelector('.aboutme')) {
        if(text==="About me") {
            isActive= isActive+" active"
        }
    }
    if (document.querySelector('.projects')) {
        if(text==="Repository") {
            isActive= isActive+" active"
        }
    }
    if (document.querySelector('.contact')) {
        if(text==="Contact me") {
            isActive= isActive+" active"
        }
    }
    
    return isActive
    }
  

    return (
        <li className={extraerClase()}>
                <a className={isOpen? "menu-nav__item__link open":"menu-nav__item__link"} href={url}>{text}</a>
        </li>
    )
}
