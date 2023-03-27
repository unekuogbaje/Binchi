import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./routes/home/home";
import Nav from './routes/nav/nav'
import About from "./routes/about/about";
import Experience from "./components/experience/experience";
import Services from "./components/services/services";
import Projects from "./routes/projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div className=" min-h-screen bg-black">
      <Routes>
        <Route path='/' element={<Nav/>} />
        
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>} />
        
        
      </Routes>
    </div>
  );
}

export default App;
