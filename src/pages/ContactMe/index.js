import React from 'react'

export default function index() {
    return (
        <main>
        <section className="contact">
          <h2>Contact <span>me</span></h2>
          <div className="contact__list"></div>
          <div className="contact__items">
            <div className="contact__items__item">
              <i className="fas fa-envelope"/> Email
              <div className="contact__items__text">
              <a href="mailto:josejaviersanahuja@gmail.com"><span style={{color:'white'}}>josejaviersanahuja</span>@gmail.com</a>
              </div>
            </div>
            <div className="contact__items__item">
              <i className="fab fa-facebook"/> Facebook
              <div className="contact__items__text">
                  Visita mi <a href="https://www.facebook.com/zitrojj" target="_blank" rel="noreferrer">facebook</a> y escríbeme.
              </div>
            </div>
            <div className="contact__items__item">
              <i className="fab fa-twitter"/> Twitter
              <div className="contact__items__text">
              Visita mi <a href="https://www.twitter.com/zitrojj" target="_blank" rel="noreferrer">twitter</a> y escríbeme. <span>@zitrojj</span>
              </div>
            </div>
            <div className="contact__items__item">
              <i className="fab fa-github"/> Github
              <div className="contact__items__text">
              Visita mi <a href="https://www.github.com/josejaviersanahuja" target="_blank" rel="noreferrer">github</a>.
              </div>
            </div>
          </div>
        </section>
      </main>
    )
}
