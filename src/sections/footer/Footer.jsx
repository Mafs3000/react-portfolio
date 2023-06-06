import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <section id="footer__container">
        <h2>Thanks for taking a look at my Portfolio!</h2>
        <div className="footer__cta">
          <a href="#header" className='btn primary'>Back up!</a>
        </div>
        <p>Mafalda Nicolau UXF22</p>
      </section>
    </footer>
  )
}

export default Footer