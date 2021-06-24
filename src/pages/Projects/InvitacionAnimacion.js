import React from 'react'
import kaion from '../../images/kaion.png'

export default function InvitacionAnimacion() {
    return (
        <div className="projects__items__i">
        <div className="wrapper">
          <div className="card">
            <div className="front">
              <h1>Invitaciones</h1>
              <p>
              It's a basic animation on pure HTML5 and CSS3. It was made as a real project to invite family to my son's birthday party
              <br/><span>Status: Finished but could improve the gifs though</span>
              </p>
              <p className="projects__date">June 2021 -<span>June 2021</span></p>
            </div>
            <div className="right">
              <h2>Languages {'&'} technologies </h2>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
              <nav className="projects__items__i__btn"> 
                <a id="right__anchor" href="https://dazzling-heisenberg-2935e6.netlify.app/" target="_blank" rel="noreferrer"><i className="fas fa-eye"/> Website</a>
                <a id="right__anchor" href="https://github.com/josejaviersanahuja/invitaciones" target="_blank" rel="noreferrer"><i className="fab fa-github"/> Github</a>
              </nav>
            </div>
          </div>
          <div className="img-wrapper" style={{top:"11rem", right:"-2rem"}}>
            <img
              src={kaion}
              width={92}
              height={151}
              alt=""
            />
          </div>
        </div>
      </div>
  
    )
}
