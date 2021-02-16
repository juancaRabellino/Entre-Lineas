import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.css'
import Search from './components/Search'
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Register from "./components/Register"
import SignIn from "./components/SignIn"
import Stories from './components/Stories'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import NewBook from './components/NewBook'
import Settings from './components/Settings'
import StoryDescription from './components/StoryDescription'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search}/>
          <Route path="/add-book" component={NewBook}/>
          <Route path="/register" component={Register}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/stories/:genre" component={Stories}/>
          <Route path="/story/:id" component={StoryDescription}/>
          <Route path="/settings" component={Settings}/>
          <Redirect to="/"/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
