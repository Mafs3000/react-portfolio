import React from 'react'
import data from './data'
import './floating-nav.css'

const FloatingNav = () => {
  return (
    <section id="floating-nav">
      <div className="floating-nav__container">
      <ul className='floating-nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        </div>
    </section>
  )
}

export default FloatingNav
