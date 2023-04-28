import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Nav from '../../components/nav/nav';

import React from 'react'

const Home = () => {
  return (
    <div className=''>
        <Nav/>
        <Footer/>
        <Outlet/>
    </div>
  )
}

export default Home;