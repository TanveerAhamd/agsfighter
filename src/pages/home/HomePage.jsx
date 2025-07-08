
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Description from '../../components/desctiption/Description'
import "./homeStyle.css"

const HomePage = () => {
  return (
    <div>
      <div className="superparent">
        {/* <Navbar /> */}
        <Hero />
        <Description />

        <div className="container">
          <div className="experienceWith">EXPERIENCE WITH</div>
          <div className="icons">
            <span>
              <img className="icon" src="./img/nodejs.png" alt="" />
            </span>
            <span>
              <img className="icon" src="./img/javascript.png" alt="" />
            </span>
            <span>
              <img className="icon" src="./img/html.png" alt="" />
            </span>
            <span>
              <img className="icon" src="./img/css.png" alt="" />
            </span>
            <span>
              <img className="icon" src="./img/reactjs.png" alt="" />
            </span>
          </div>
        </div>
        
        <div className="container text-center">
          <span className="gradientTxt">Projects</span>
        </div>
        <div className="container">
          <div className="cardsWrapper">
            <div className="card">
              <div className="cardhead">
                <img className="cardimg" src="./img/htmlcardpic.png" alt="" />
              </div>
              <div className="cardbody">
                <div className="cardTitle" />
              </div>
            </div>
            <div className="card">
              <div className="cardhead">
                <img className="cardimg" src="./img/csscardpic.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center">
          <span className="gradientTxt">Experience</span>
        </div>
      </div>

    </div>
  )
}

export default HomePage