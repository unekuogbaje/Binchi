import React from 'react'

import { 
    Linkedin,
    Github,
    Twitter
 } from 'feather-icons-react/build/IconComponents';

const HeaderSocials = () => {
  return (
    <div className='header__socials flex flex-col gap-4 items-center bottom-12 absolute left-0'>
        <a href='https://www.linkedin.com/in/uneku-ogbaje/' target='_blank'><Linkedin className='fill-prmClr'/></a>
        <a href='https://github.com/unekuogbaje?tab=repositories' target='_blank'><Github className='fill-prmClr'/></a>
        <a href='https://twitter.com/loneroflagos' target='_blank'><Twitter
        className='fill-prmClr'/></a>
        <span className=' h-20 bg-prmClrVrnt w-1 mt-2'></span>
        
    </div>
  )
}

export default HeaderSocials;