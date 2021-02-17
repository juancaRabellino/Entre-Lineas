import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.css'
import Search from './components/Search'
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Register from "./components/Register"
import SignIn from "./components/SignIn"
import Stories from './components/Stories'
import StoryDescription from './components/StoryDescription'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import NewBook from './components/NewBook'
import Settings from './components/Settings'
import authActions from './redux/actions/authActions'

const App = (props) => {
  const [reload, setReload] = useState(false)

  if(props.loggedUser){
    var routes = 
    <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search}/>
      <Route path="/add-book" component={NewBook}/>
      <Route path="/stories/:genre" component={Stories}/>
      <Route path="/story/:id" component={StoryDescription}/>
      <Route path="/settings" component={Settings}/>
      <Redirect to ="/search"/>
    </Switch>
    </>
  }else if(localStorage.getItem('token')){
    props.logFromLS(localStorage.getItem('token'))
    .then(response=> {
      response && setReload(!reload)
    })
  }else{
    routes = 
    <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search}/>
      <Route path="/register" component={Register}/>
      <Route path="/signin" component={SignIn}/>
      <Route path="/stories/:genre" component={Stories}/>
      <Route path="/story/:id" component={StoryDescription}/>
      <Redirect to="/"/>
    </Switch>
    </>
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        {routes}
        <Footer />
      </BrowserRouter>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedUser: state.auth.loggedUser
  }
}

const mapDispatchToProps = {
  logFromLS: authActions.logFromLS
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
