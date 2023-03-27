import React from 'react'
import { Link } from 'react-router-dom';
import CTA from '../../components/header/CTA';

const Projects = () => {
  return (
    <section className="container header__container h-full text-right pt-[120px] ">
      <h1>Projects</h1>
      <div className='flex flex-col space-y-8'>
        <Link className='font-bold italic text-xl uppercase'>Binchi</Link>
        <Link className='font-bold italic text-xl uppercase'>Safron</Link>
        <Link className='font-bold italic text-xl uppercase'>AfroValley</Link>
        <Link className='font-bold italic text-xl uppercase'>Floundry</Link>
      </div>

      <CTA/>
    </section>
  )
}

export default Projects;