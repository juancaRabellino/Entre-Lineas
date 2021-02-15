import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.css'
import SearchStories from './components/SearchStories'
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Register from "./components/Register"
import SignIn from "./components/SignIn"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NewBook from './components/NewBook'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={SearchStories}/>
          <Route path="/add-book" component={NewBook}/>
          <Route path="/register" component={Register}/>
          <Route path="/signin" component={SignIn}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
