import React from 'react'
import rotomDex from '../../images/RotomDex.png'

export default function MyFirstNodeProject() {
    return (
        <div className="projects__items__i">
        <div className="wrapper">
          <div className="card">
            <div className="front">
              <h1>My First Node</h1>
              <p>
              It's about my first API rest creation. I am currently learning back-end. I´ll be fullstack Dev very soon.
              <br/><span>Status: working on new version</span>
              </p>
              <p className="projects__date">April 2021 -<span>ongoing</span></p>
            </div>
            <div className="right">
              <h2>Languages {'&'} technologies </h2>
              <ul>
                <li>NodeJs</li>
                <li>JavaScript</li>
                <li>MongoDB</li>
                <li>Express</li>
              </ul>
              <nav className="projects__items__i__btn"> 
                <a id="right__anchor" href="https://dry-spire-72214.herokuapp.com/" target="_blank" rel="noreferrer"><i className="fas fa-eye"/> Website</a>
                <a id="right__anchor" href="https://github.com/josejaviersanahuja/myfirstnode" target="_blank" rel="noreferrer"><i className="fab fa-github"/> Github</a>
              </nav>
            </div>
          </div>
          <div className="img-wrapper" style={{top:"15rem"}}>
            <img
              src={rotomDex}
              width={125}
              height={91}
              alt=""
            />
          </div>
        </div>
      </div>
  
    )
}
