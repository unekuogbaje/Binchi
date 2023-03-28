import React from 'react'
import { Link } from 'react-router-dom';
import CTA from '../../components/header/CTA';

const Projects = () => {
  return (
    <div className="container header__container h-full w-full text-right pt-[120px] bg-black ">
      <h1>Projects</h1>
      <div className='flex flex-col space-y-6'>
        <Link className='font-bold text-xl uppercase'>Binchi</Link>
        <Link className='font-bold text-xl uppercase'>Safron</Link>
        <Link className='font-bold text-xl uppercase'>AfroValley</Link>
        <Link className='font-bold text-xl uppercase'>Floundry</Link>
      </div>

      <CTA/>
    </div>
  )
}

export default Projects;