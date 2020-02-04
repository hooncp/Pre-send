import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import MainPage from './View/MainPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route path = "/" component = {MainPage}/>
          {/* <Route path = "/about" component = {AboutPage}/> */}
          {/* <Route path = "/faq" component = {FAQPage}/> */}
          {/* <Route path = "/how" component = {HowItWorkPage}/> */}
        </Switch>
      <Footer/>
    </Router>
  )
}

export default App;
