import React from 'react'
import imgGifs from '../../images/gifandsticker.png'

export default function GifAndStickers() {
    return (
        <div className="projects__items__i">
        <div className="wrapper">
          <div className="card">
            <div className="front">
              <h1>Gifs And Stickers Finder</h1>
              <p>
              It's a didactive project to learn advance React. Powered by Giphy, you can find stickers and gifs
              <br/><span>Status: version 1 completed</span>
              </p>
              <p className="projects__date">Jul-2021 -<span>ongoing</span></p>
            </div>
            <div className="right">
              <h2>Languages {'&'} technologies </h2>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Typescript</li>
                <li>Lazy Load</li>
                <li>Infinity Scroll</li>
                <li>Intersection Observer</li>
              </ul>
              <nav className="projects__items__i__btn"> 
                <a id="right__anchor" href="https://giphsandstickers-finder.vercel.app/" target="_blank" rel="noreferrer"><i className="fas fa-eye"/>Website</a>
                <a id="right__anchor" href="https://github.com/josejaviersanahuja/giphsandstickers-finder" target="_blank" rel="noreferrer"><i className="fab fa-github"/> Github</a>
              </nav>
            </div>
          </div>
          <div className="img-wrapper" style={{top:"14rem", right:"-2rem"}}>
            <img
              src={imgGifs}
              width={90}
              height={90}
              alt=""
            />
          </div>
        </div>
      </div>
  
    )
}
