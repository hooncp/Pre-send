import React from 'react';
import Popular from './Components/Popular';
import Explore from './Components/Explore';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div>
    <Navbar/>
    <div className = "App">
    <Explore/>
    <Popular/>

    </div>
    <Footer/>
    </div>
  )
}

export default App;
