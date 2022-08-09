import React from 'react';
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Footer from "./components/Footer";
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import FoundaPet from './components/FoundaPet';
import UserPage from './components/UserPage';




function App() {

const [ user, setUser ] = useState(null)


useEffect(()=> {
  fetch('/autologin')
  .then((r)=> {
    if (r.ok) {
      r.json().then((user) => setUser(user));
    }
  })
  console.log(user) 
},[]);



  return (
    <BrowserRouter>
      <nav> <Navbar user={user}></Navbar> </nav>      
        <Routes>
            <Route path='/home' element={<Home></Home> }> </Route>
            <Route path='/login'element={<Login setUser={setUser}></Login> }></Route>
            <Route path='/createaccount' element={<CreateAccount setUser={setUser}></CreateAccount>}> </Route> 
            <Route path='/foundapet' element={<FoundaPet></FoundaPet>}></Route>
            <Route path='/profile' element={<UserPage user={user}></UserPage> }> </Route> 
        </Routes>
      <nav> <Footer></Footer> </nav>      
    </BrowserRouter>
  );
}

export default App;

