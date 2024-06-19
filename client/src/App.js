import React, { useContext, useEffect } from 'react'
import './App.css';
import { Route, Routes, Router,useLocation} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import PostJob from './components/PostJob';
import Profile from './components/Profile';
import Login from './components/Login';
import Error404 from './components/Error404';


function App() {
  const location = useLocation();
  const hideNavbarPaths = ['*'];
  const showNavbar=()=>{
if(location.pathname==="/" ||location.pathname==="/PostJob"||location.pathname==="/contact"||location.pathname==="/profile"||
  location.pathname==="/login")
  {
    return <Navbar/>;
  }
  }
  return (
    <div className="App">
    {showNavbar()}
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/PostJob" element={<PostJob />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="*" element={<Error404/>}/>
      
      </Routes>
      </div>
  );
}

export default App;
