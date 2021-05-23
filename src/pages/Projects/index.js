import React from 'react'
import tutorials from '../../images/tutorials.jpg'
import api from '../../images/apiheroku.jpg'

export default function index() {
    return (
        <main>
        <section className="projects">
          <div className="projects__img">
           <h2>Here you can find <span>my repository</span></h2>
          </div>
          <div className="projects__items">
            <div className="projects__items__i">
              <p> <span>Tutorials</span> It's my first project. It's basically a log of notes taken on each course i made</p>
              <img src={tutorials} alt="project1"/>
              <nav className="projects__items__i__btn">
                <a href="https://tutorials-vert.vercel.app/" target="_blank" rel="noreferrer"><i className="fas fa-eye"/>Check it.</a>
                <a href="https://github.com/josejaviersanahuja/tutorials" target="_blank" rel="noreferrer"><i className="fab fa-github"/> Github</a>
              </nav>
            </div>
            <div className="projects__items__i">
            <p> <span>Myfirstnode</span> It's about my first API rest creation. I am currently learning back-end. I´ll be fullstack Dev very soon.</p>
              <img src={api} alt="project2"/>
              <nav className="projects__items__i__btn">
                <a href="https://dry-spire-72214.herokuapp.com/" target="_blank" rel="noreferrer"><i className="fas fa-eye"/> Check it.</a>
                <a href="https://github.com/josejaviersanahuja/myfirstnode" target="_blank" rel="noreferrer"><i className="fab fa-github"/> Github</a>
              </nav>
            </div>
            <div className="projects__items__i">
            <p> <span>Proident</span> aute elit cupidatat dolore.</p>
              <img src={tutorials} alt="project1"/>
              <nav className="projects__items__i__btn">
                <a href="/projects" target="_blank" rel="noreferrer"><i className="fas fa-eye"/> Preview</a>
                <a href="/projects" target="_blank" rel="noreferrer"><i className="fab fa-github"/> Github</a>
              </nav>
            </div>
          </div>
        </section>
      </main>
    )
}
