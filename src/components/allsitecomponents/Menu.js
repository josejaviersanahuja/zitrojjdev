import React, {useState} from 'react'
import MenuList from './MenuList'

const home= "Home"
const aboutMe="About me"
const repository= "Repository"
const contactMe="Contact me"
const list=[home, aboutMe,repository,contactMe]
const urlList ={
    [home]:"/",
    [aboutMe]:"/about",
    [repository]:"/projects",
    [contactMe]:"/contact"
}
export default function Menu({active}) {

    const [isOpen, setisOpen] = useState(false)
        
        
    const toggleMenu=()=>{
        setisOpen(prev=>!prev)
    }

    return (<>
        <div  className="menu-btn" onClick={toggleMenu} >
          <span id="test" className={isOpen? "menu-btn__burger open" :"menu-btn__burger"} >

          </span>
        </div>
        <nav className={isOpen? "nav open":"nav"}>
            
            <ul className={isOpen? "menu-nav open":"menu-nav"}>
            {list.map(  
                e=> <MenuList 
                    key={e}
                    isOpen={isOpen}
                    text={e}
                    url={urlList[e]}
                    active={active}
                />
                )
            }
            </ul>
          </nav>
      </>
    )
}

 