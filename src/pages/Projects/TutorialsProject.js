import React from 'react'
import imgTutorials from '../../images/imgTutorials.png'

export default function TutorialsProject() {
    return (
        <div className="projects__items__i">
        <div className="wrapper">
          <div className="card">
            <div className="front">
              <h1>Tutorials</h1>
              <p>
              It's my first project. It's basically a log of notes taken on each course I made.
              <br/><span>Status: ongoing</span>
              </p>
              <p className="projects__date">2020 -<span>ongoing</span></p>
            </div>
            <div className="right">
              <h2>Languages {'&'} technologies </h2>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
              <nav className="projects__items__i__btn"> 
                <a id="right__anchor" href="https://tutorials-vert.vercel.app/" target="_blank" rel="noreferrer"><i className="fas fa-eye"/>Website</a>
                <a id="right__anchor" href="https://github.com/josejaviersanahuja/tutorials" target="_blank" rel="noreferrer"><i className="fab fa-github"/> Github</a>
              </nav>
            </div>
          </div>
          <div className="img-wrapper">
            <img
              src={imgTutorials}
              alt=""
            />
          </div>
        </div>
      </div>
  
    )
}
