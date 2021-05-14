import React from 'react'
import foto3 from '../../images/foto3.jpg'

export default function index() {
    return (
        <main>
        <section className="projects">
          <div className="projects__img">
           <h2>Here you can find <span>my repository</span></h2>
          </div>
          <div className="projects__items">
            <div className="projects__items__i">
              <p> <span>Proident</span> aute elit cupidatat dolore.</p>
              <img src={foto3} alt="project1"/>
              <nav className="projects__items__i__btn">
                <a href="/projects" target="_blank" rel="noreferrer"><i className="fas fa-eye"/> Preview</a>
                <a href="/projects" target="_blank" rel="noreferrer"><i className="fab fa-github"/> Github</a>
              </nav>
            </div>
            <div className="projects__items__i">
            <p> <span>Proident</span> aute elit cupidatat dolore.</p>
              <img src={foto3} alt="project2"/>
              <nav className="projects__items__i__btn">
                <a href="/projects" target="_blank" rel="noreferrer"><i className="fas fa-eye"/> Preview</a>
                <a href="/projects" target="_blank" rel="noreferrer"><i className="fab fa-github"/> Github</a>
              </nav>
            </div>
            <div className="projects__items__i">
            <p> <span>Proident</span> aute elit cupidatat dolore.</p>
              <img src={foto3} alt="project1"/>
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
