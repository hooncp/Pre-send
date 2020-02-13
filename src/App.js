import React from 'react';
import NavbarWrapper from './Components/Navbar/NavbarWrapper'
import FooterWrapper from './Components/Footer/FooterWrapper'
import MainPage from './View/MainPage';
import NotFoundPage from './View/NotFoundPage'
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavbarWrapper/>
        <Switch>

          <Route exact path = "/"><MainPage/></Route>
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
          {/* <Route path = "/about" component = {AboutPage}/> */}
          {/* <Route path = "/faq" component = {FAQPage}/> */}
          {/* <Route path = "/how" component = {HowItWorkPage}/> */}
        </Switch>
      <FooterWrapper/>
    </Router>
  )
}

export default App;
