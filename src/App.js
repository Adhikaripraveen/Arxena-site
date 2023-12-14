import React from 'react';
import Home from "./Components/Home";
import SignUp from './Components/SignUp';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Components/Login';
// import Phone from './Components/Phone';
const App = () => {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/Login/" element={<Login/>}/>
      {/* <Route path="/phone/" element={<Phone/>}/> */}
    </Routes>
    </Router>
    </>
  )
}

export default App
