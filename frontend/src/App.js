import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import './styles/styles.css'
import SearchStories from './components/SearchStories'
import Header from "./Components/Header"
import Home from "./Components/Home"
import Footer from "./Components/Footer"
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" componente={SearchStories}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
