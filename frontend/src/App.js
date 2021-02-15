import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles.css"

function App() {
  return (
    <> 
    <BrowserRouter>
       <Header/>
       <Switch>
       <Route exact path='/' component = {Home} />
       </Switch>
       <Footer/>
    </BrowserRouter>
    </> 
  );
}

export default App;
