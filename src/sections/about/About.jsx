import React from 'react'
import AboutImage from '../../assets/Frame5.png'
import CV from '../../assets/CV.pdf'
import {AiOutlineDownload} from 'react-icons/ai'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="Portrait of Mafalda" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>  
            <p>
            I am a 21-year-old woman with a quick learning ability, comfortable both working independently and as part of a team. 
            While I may initially appear shy, those who know me well discover that I am a cheerful and vibrant individual who loves to laugh and enjoy life. 
            I thrive on solving problems and eagerly embrace new challenges, preferring to stay busy and engaged.
            </p>
          <a href={CV} download className='btn primary'>Download CV <AiOutlineDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About