import React from 'react'
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
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App