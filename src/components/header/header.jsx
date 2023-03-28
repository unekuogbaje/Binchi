import React from 'react'
import Projects from '../../routes/projects/projects';

const Header = () => {
  return (
    <div className='h-screen p-8 md:h-[68vh] sm:[100vh] '>
      <div className="container header__container relative text-left">
        <h5 className='pt-[30px] '>Hi there! I'm</h5>
        <h1>Uneku Ogbaje</h1>
        <h5 className='text-light w-[50%] '>
        I'm a front-end developer who likes to travel. I have designed and developed multiple frontedn applications for many organizations all over the world. Lorem ipsum dolor sit amet and all the wonderful, marvellous, fantastic, durable, enduring things of this world .
        </h5>
        <Projects/>
      </div>
      

      
    </div>
  )
}

export default Header;