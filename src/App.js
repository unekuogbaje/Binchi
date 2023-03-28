import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./routes/home/home";
import Nav from './routes/nav/nav'
import Contact from "./components/contact/contact";

const App = () => {
  return (
    <div className=" min-h-screen bg-black">
      <Routes>
        <Route path='/' element={<Nav/>} />
        
        <Route index element={<Home/>}/>    
      </Routes>
    </div>
  );
}

export default App;
