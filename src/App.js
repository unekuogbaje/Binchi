import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Fragment } from "react";
import Header from "./components/header/header";
import Nav from './routes/nav/nav'
import About from "./routes/about/about";
import Experience from "./components/experience/experience";
import Services from "./components/services/services";
import Projects from "./routes/projects/projects";
import Contact from "./routes/contact/contact";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div className=" min-h-screen border-2 border-white bg-black">
      <Routes>
        <Route path='/' element={<Header/>} />
        
        <Route path='navlinks' element={<Nav/>}/>
        <About/>
        <Experience/>
        <Services/>
        <Projects/>
        <Contact/>
        <Footer/>
      </Routes>
    </div>
  );
}

export default App;
