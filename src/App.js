import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./routes/home/home";
import Nav from './components/nav/nav'

const App = () => {
  return (
    <div className=" min-h-screen ">
      <Routes>
        <Route path='/' element={<Nav/>} />
        
        <Route index element={<Home/>}/>    
      </Routes>
    </div>
  );
}

export default App;
