import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.css'
import SearchStories from './components/SearchStories'
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={SearchStories}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
