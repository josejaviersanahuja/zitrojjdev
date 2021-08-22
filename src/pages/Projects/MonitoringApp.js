import React from 'react'
import nodepng from '../../images/nodejspng.png'

export default function MonitoringApp() {
    return (
        <div className="projects__items__i">
        <div className="wrapper">
          <div className="card">
            <div className="front">
              <h1 style={{marginBottom:"0rem"}}>Uptime Monitor</h1>
              <p>
              Its an App to monitor websites or Servers. It's special as it has only one dependency (mongoose). The rest is pure raw node.
              <br/><span>Status: Finished</span>
              </p>
              <p className="projects__date">22 / August / 2021</p>
            </div>
            <div className="right">
              <h2>Languages {'&'} technologies </h2>
              <ul>
                <li>NODE JS</li>
                <li>Mongoose</li>
                <li>Built my own View Engine</li>
                <li>Built my own Router</li>
                <li>NO EXPRESS</li>
              </ul>
              <nav className="projects__items__i__btn"> 
                <a id="right__anchor" href="https://mighty-headland-82380.herokuapp.com/" target="_blank" rel="noreferrer">
                  <i className="fas fa-eye"/> Website
                </a>
                <a id="right__anchor" href="https://github.com/josejaviersanahuja/api-monitoring-app" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"/> Github
                </a>
              </nav>
            </div>
          </div>
          <div className="img-wrapper" style={{top:"17rem", right:"-2.5rem"}}>
            <img
              src={nodepng}
              width={120}
              height={120}
              alt=""
            />
          </div>
        </div>
      </div>
  
    )
}
