import React from 'react';
import NavbarWrapper from './Components/Navbar/NavbarWrapper'
import FooterWrapper from './Components/Footer/FooterWrapper'
import MainPage from './View/MainPage';
import NotFoundPage from './View/NotFoundPage'
import ProductPage from './View/ProductPage'
import CategoryPage from './View/CategoryPage'
import FAQPage from './View/FAQPage'
import AboutPage from './View/AboutPage'
import HowPage from './View/HowPage'
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavbarWrapper/>
        <Switch>

          <Route exact path = "/"><MainPage/></Route>
          <Route path = "/product/:id" component = {ProductPage}/>
          <Route path = "/category/:name" component = {CategoryPage}/>
          <Route path = "/about" component = {AboutPage}/>
          <Route path = "/faq" component = {FAQPage}/>
          <Route path = "/how" component = {HowPage}/>
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      <FooterWrapper/>
    </Router>
  )
}

export default App;
