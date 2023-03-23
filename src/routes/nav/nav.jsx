import React from 'react'
import { 
  Home,
  User,
  Book,
  Briefcase,
  Inbox,
  Archive
 } from 'feather-icons-react/build/IconComponents';

 import { useState } from 'react';

const Nav = () => {
  const [ setActiveNav] = useState('#');
  return (
    <nav className='{px-7 py-3 bg-[#000000] opacity-30 w-max flex rounded-3xl z-[2] fixed left-[5%] translate-[-50%] bottom-8 gap-3.5 backdrop-blur-lg fill-prmClrVrnt active} '>
      <a 
      href='#' 
      className='bg-transparent p-[0.9rem] rounded[50%] flex text-white text-base hover:bg-[#000000] hover:opacity-30 active:bg-prmClrVrnt' 
      onClick={() => setActiveNav('#')}>
      <Home /> 
      </a>

      <a href='#about' className='bg-transparent p-[0.9rem] rounded[50%] flex text-white text-base hover:bg-[#000000] hover:opacity-30 active:bg-prmClrVrnt'
      onClick={() => setActiveNav('#about')} >
      <User/> 
      </a>

      <a href='#experience' className='bg-transparent p-[0.9rem] rounded[50%] flex text-white text-base hover:bg-[#000000] hover:opacity-30 active:bg-prmClrVrnt' 
      onClick={() => setActiveNav('#experience')}>
      <Archive/> 
      </a>

      <a href='#services' className='bg-transparent p-[0.9rem] rounded[50%] flex text-white text-base hover:bg-[#000000] hover:opacity-30 active:bg-prmClrVrnt' 
      onClick={() => setActiveNav('#services')}>
      <Briefcase/> 
      </a>

      <a href='#contact' className='bg-transparent p-[0.9rem] rounded[50%] flex text-white text-base hover:bg-[#000000] hover:opacity-30 active:bg-prmClrVrnt' 
      onClick={() => setActiveNav('#contact')}>
      <Inbox/> 
      </a>
    </nav>
  )
}

export default Nav;