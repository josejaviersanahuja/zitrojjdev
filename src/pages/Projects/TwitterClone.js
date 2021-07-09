import React from 'react'
import imgTutorials from '../../images/imgTutorials.png'

export default function TwitterClone() {
    return (
        <div className="projects__items__i">
            <div className="wrapper">
                <div className="card">
                    <div className="front">
                        <h1>TwitterClone</h1>
                        <p style={{ fontSize:"18px"}}>
                        It's a common project for educational purpose. In the current version you could log-in with google or github, send twits with a pic, and follow other users. There are 3 possible timelines, global, a profile page timeline and the home timeline.
                        <br /><span>Status: v1 completed.</span>
              </p>
                    <p className="projects__date">June 2021 -<span>July 2021</span></p>
                </div>
                <div className="right">
                    <h2>Languages {'&'} technologies </h2>
                    <ul>
                        <li>Next JS</li>
                        <li>Server Side Rendering in some pages</li>
                        <li>styled-jsx</li>
                        <li>Firebase</li>
                    </ul>
                    <nav className="projects__items__i__btn">
                        <a id="right__anchor" href="https://twitterclone-ten.vercel.app/" target="_blank" rel="noreferrer"><i className="fas fa-eye" />Website</a>
                        <a id="right__anchor" href="https://github.com/josejaviersanahuja/twitterclone" target="_blank" rel="noreferrer"><i className="fab fa-github" /> Github</a>
                    </nav>
                </div>
            </div>
            <div className="img-wrapper">
                <img
                    src="https://twitterclone-ten.vercel.app/_next/image?url=%2Fstatic%2FlogoFinal.png&w=384&q=75"
                    alt=""
                    height={50}
                    weight={116}
                    style={{position:"relative",right:"60px", top:"200px"}}
                />
            </div>
        </div>
      </div >
  
    )
}
