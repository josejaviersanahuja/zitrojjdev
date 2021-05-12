import React from 'react'
import {BrowserRouter, Route, Switch, useParams} from 'react-router-dom'
import './css/index.css'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'
import Menu from './components/allsitecomponents/Menu'

export default function App() {

  return (
    <BrowserRouter>
      <header >
        <Menu/>
      </header>
      <Switch>
          <Route exact path="/:id" children={<Child />} />
          <Route exact path="/" children={<Home />} />
        </Switch>
      <div className="social-icons">
              <a href="https://twitter.com/zitrojj" target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="https://www.facebook.com/zitrojj" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="https://github.com/josejaviersanahuja" target="_blank" rel="noreferrer">
                  <i className="fab fa-github fa-2x"></i>
              </a>
          </div>
      <footer>
        &copy; Copyright 2021
      </footer>
      
    </BrowserRouter>
  );
}

function Child(){
 
 let {id}=useParams()
 console.log(id);
  return(<>
    
    {id==="about"? <AboutMe />:null}
    {id==="projects"? <Projects/>:null}
    {id==="contact"? <ContactMe />:null}
  </>
   )}
