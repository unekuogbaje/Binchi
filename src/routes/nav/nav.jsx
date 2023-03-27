import { Fragment } from 'react'
import { Outlet } from 'react-router-dom';
import { 
  Linkedin,
  Github,
  Twitter
} from 'feather-icons-react/build/IconComponents';

const Nav = () => {

  return (
    <nav className=' flex flex-col px-7 py-3 bg-[#000000] opacity-80 w-max rounded-3xl z-[2] fixed left-[75%] translate-[-50%] bottom-[85%] mb-[25px] gap-2 backdrop-blur-lg fill-prmClrVrnt active '>
    <div className='flex gap-2'>
      <a href='https://www.linkedin.com/in/uneku-ogbaje/' target='_blank'><Linkedin className='fill-prmClr' size={16}/></a>
      <a href='https://github.com/unekuogbaje?tab=repositories' target='_blank'><Github className='fill-prmClr' size={16}/></a>
      <a href='https://twitter.com/loneroflagos' target='_blank'><Twitter
      className='fill-prmClr' size={16}/></a>
    </div>
    <span className=' h-1 bg-prmClrVrnt w-20 mt-2'></span>
      <Outlet/>
    </nav>
  )
}

export default Nav;