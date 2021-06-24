import React from 'react'
import InvitacionAnimacion from './InvitacionAnimacion'
import MyFirstNodeProject from './MyFirstNodeProject'
import SmartPokemonGoProject from './SmartPokemonGoProject'
import TutorialsProject from './TutorialsProject'

export default function index() {
    return (
        <main>
        <section className="projects">
          <div className="projects__img">
           <h2>Here you can find <span>my repository</span></h2>
          </div>
          <div className="projects__items">
            <InvitacionAnimacion/>
            <TutorialsProject/>
            <MyFirstNodeProject/>
            <SmartPokemonGoProject/>
          </div>
        </section>
      </main>
    )
}
