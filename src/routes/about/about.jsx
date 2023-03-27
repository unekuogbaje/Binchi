import React from 'react'
import Contact from '../../components/contact/contact';
import { Outlet } from 'react-router-dom';
import CTA from '../../components/header/CTA';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className='container about_containder'>
        <div className='about_me'>
          <div className=''>
            
          </div>
        </div>

        <div className='about_content'>
        
        </div>
      </div>
      <Contact/>
      <CTA/>
      <Outlet/>
    </section>
  )
}

export default About;