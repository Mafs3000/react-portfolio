import React from 'react'
import './contact.css'
import data from '../contact/data'
import ContactForm from '../../components/ContactForm'

const Contact = () => {
  return (
    <section id="contact">
        <div className="container__contact">
          <h2>Lets Talt!</h2>
          <div className="contact__socials">
            {
              data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer"> {item.icon}</a>)
            }
          </div>
          <div className="contactform"><ContactForm/></div>
        </div>  
    </section>
  )
}

export default Contact
