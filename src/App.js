import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import MainPage from './View/MainPage';
import NotFoundPage from './View/NotFoundPage'
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>

          <Route exact path = "/"><MainPage/></Route>
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
          {/* <Route path = "/about" component = {AboutPage}/> */}
          {/* <Route path = "/faq" component = {FAQPage}/> */}
          {/* <Route path = "/how" component = {HowItWorkPage}/> */}
        </Switch>
      <Footer/>
    </Router>
  )
}

export default App;
