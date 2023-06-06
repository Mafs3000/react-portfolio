import React from 'react'
import data from './data'
import HeaderImage from '../../assets/Frame2.png'
import './header.css'

const Header = () => {
  return (
    <header id="header">
      <div className="header__profile">
          <img src={HeaderImage} alt="Header Profile" />  
      </div>
        <div className="container header__container">
           
            <div className="header__text">
              <h3>Mafalda Nicolau</h3>
              <h5>UX & UI Designer with Frontendskills</h5>
              <p>I'm actively seeking an internship opportunity within the field of UX/UI design, with a strong focus on frontend development.  
                If you're looking for a motivated and talented individual to join your team, I would love to hear from you. 
                Please feel free to contact me using the form below to discuss potential internship opportunities. 
                Thank you!
              </p>
            </div>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Lets Talk!</a>
          <a href="#portfolio" className='btn secondary'>My Work!</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer"> {item.icon}</a>)
          }
        </div>
      </div> 
    </header>
  )
}

export default Header