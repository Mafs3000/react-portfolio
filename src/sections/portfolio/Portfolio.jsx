import React from 'react'
import './portfolio.css'
import CookwiseImage from '../../assets/Cookwise.png'
import DesignSystem from '../../assets/DesignSystem.png'
import VectorImage from '../../assets/VectorImage.png'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className='portfolio__title'><h2>Portfolio</h2></div>
      <div className="container portfolio__container">
        <div className="portfolio__left">
          <h2>Group Project "Cookwise AB"</h2>            
            <p>
            In this Figma project, my group and I designed a fictional app for smart ovens for the company "Cookwise AB." 
            The app allows users to program and control their ovens remotely. 
            We put extensive effort into brainstorming and research to develop this app. 
            <br /> Here is a glimpse of our end product:
            </p>
              <a href="https://www.figma.com/proto/WKwWNZfLFEdCnryU9TcqAj/Cookwise%3A?page-id=188%3A146&node-id=263-5479&viewport=421%2C814%2C0.09&scaling=scale-down&starting-point-node-id=263%3A5479&show-proto-sidebar=1" className='btn primary' target="_blank" rel="noopener noreferrer">See Final Result</a> 
        </div>
        <div className="portfolio__right">
          <div className="portfolio__portrait">
            <img src={CookwiseImage} alt="Cookwise" />
          </div>
        </div>
      </div>
      <div className="container portfolio__container1">
        <div className="portfolio__left1">
          <div className="portfolio__img">
            <img src={DesignSystem} alt="Design System" />
          </div>
        </div>
        <div className="portfolio__right1">
          <h2>Design System Project</h2>            
            <p>
            This Figma project showcases my skills in creating design systems, including components, groups, and assets. 
            I created both a mobile app and a website. 
            <br /> Take a look at the project here:
            </p>
              <a href="https://www.figma.com/proto/yj6DaDecG0e12yWEgzLHJI/Figma-Designfil?page-id=0%3A1&type=design&node-id=1-487&viewport=419%2C147%2C0.15&scaling=min-zoom&starting-point-node-id=1%3A12" className='btn primary' target="_blank" rel="noopener noreferrer">See Final Result</a> 
        </div>
      </div>
      <div className="container portfolio__container">
        <div className="portfolio__left">
          <h2>Project Brand Style Guide</h2>            
            <p>
            This project showcases a Brand Style Guide created in Figma. 
            I chose to develop a brand style guide for a gaming company called "Vector." 
            <br /> Click the link below to view it:
            </p>
              <a href="https://www.figma.com/proto/MNlldBI8RzL1CnkJrEofdL/Brand-Style-Guide?page-id=4%3A53&node-id=4-54&viewport=105%2C394%2C0.08&scaling=contain&starting-point-node-id=4%3A54" className='btn primary' target="_blank" rel="noopener noreferrer">See Final Result</a> 
        </div>
        <div className="portfolio__right">
          <div className="portfolio__img2">
            <img src={VectorImage} alt="Vector" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio