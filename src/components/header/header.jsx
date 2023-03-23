import React from 'react'
import CTA from './CTA';
import Flo from '../../assets/Flo 3.JPG'
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <header className='h-screen p-28 overflow-hidden md:h-[68vh] sm:[100vh'>
      <div className="container header__container h-full relative text-center">
        <h5>Hi there! I'm</h5>
        <h1>Uneku Ogbaje</h1>
        <h5 className='text-light'>
          Frontend Developer
        </h5>
        <CTA/>
        <HeaderSocials/>

        <a href='#contact' className='scroll__down font-light text-sm absolute right-[-2.3rem] bottom-[5rem] rotate-90 ' >
          Scroll Down
        </a>

        
      </div>
    </header>
  )
}

export default Header;