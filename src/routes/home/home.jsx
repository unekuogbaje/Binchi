import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Nav from '../nav/nav';
import Projects from '../projects/projects';
import About from '../about/about';

import React from 'react'

const Home = () => {
  return (
    <div className='bg-black'>
        <Header/>
        <Nav/>
        <Footer/>
        <Outlet/>
    </div>
  )
}

export default Home;