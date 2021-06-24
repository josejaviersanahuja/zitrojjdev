import React from 'react'
import pikachu from '../../images/Pikachutransparente.png'

export default function SmartPokemonGoProject() {
    return (
        <div className="projects__items__i">
        <div className="wrapper">
          <div className="card">
            <div className="front">
              <h1>Smart Pokemon Go</h1>
              <p>
              An app created only to help you improve your pvp records in Pokemon Go.
              <br/><span>Status: working on new version</span>
              </p>
              <p className="projects__date">April 2021 -<span>ongoing</span></p>
            </div>
            <div className="right">
              <h2>Languages {'&'} technologies </h2>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>SCSS</li>
                <li>API REST</li>
              </ul>
              <nav className="projects__items__i__btn"> 
                <a id="right__anchor" href="https://smartpokemongo.vercel.app/" target="_blank" rel="noreferrer">
                  <i className="fas fa-eye"/> Website
                </a>
                <a id="right__anchor" href="https://github.com/josejaviersanahuja/smartpokemongo" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"/> Github
                </a>
              </nav>
            </div>
          </div>
          <div className="img-wrapper" style={{top:"15rem"}}>
            <img
              src={pikachu}
              width={120}
              height={120}
              alt=""
            />
          </div>
        </div>
      </div>
  
    )
}
