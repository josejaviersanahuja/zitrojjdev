import {useState, useEffect} from 'react'

export default function useActive() {
    const [active, setactive] = useState("")
    const [footerClass, setfooterClass]= useState("")
    
    useEffect(() => {
        
        if (document.querySelector('.home')) {
            setactive("Home")
            setfooterClass("a")
        }
        if (document.querySelector('.aboutme')) {
            setactive("About me")
            setfooterClass("b")
        }
        if (document.querySelector('.projects')) {
            setactive("Repository")
            setfooterClass("b")
        }
        if (document.querySelector('.contact')) {
            setactive("Contact me")
            setfooterClass("b")
        }
        
        return () => {
            
        }
    }, [active, footerClass])

    return {active, footerClass }
}
