import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import authActions from '../redux/actions/authActions'

const Header = (props) => {

  return (
    <header>
      {props.loggedUser && <h4>Hola! {(props.loggedUser.firstname).toUpperCase()}</h4>}
      <div className="headerLeft">
        <Link to="/"><img src={'../assets/Logo-EntreLineas-Pluma-inclinada.png'} className="logo" alt='logo Entre Líneas'></img></Link>
        <div className="dropdown">
          <p>Navegar</p>
          <table className="dropdown-content">
            <thead>
              <tr>
                <th colSpan="3" className="th">Género:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Link to="/stories/Acción">Acción</Link></td>
                <td><Link to="/stories/Aventura">Aventura</Link></td>
                <td><Link to="/stories/Ciencia Ficción">Ciencia Ficción</Link></td>
              </tr>
              <tr>
                <td><Link to="/stories/Clásicos">Clásicos</Link></td>
                <td><Link to="/stories/Historias cortas">Historias cortas</Link></td>
                <td><Link to="/stories/Históricas">Históricas</Link></td>
              </tr>
              <tr>
                <td><Link to="/stories/Humor">Humor</Link></td>
                <td><Link to="/stories/Romance">Romance</Link></td>
                <td><Link to="/stories/Suspenso">Suspenso</Link></td>
              </tr>
              <tr>
                <td><Link to="/stories/Terror">Terror</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link to ="/search"><div className="toSearch">
          <i className="fas fa-search"></i>
          <p>Buscar</p>
        </div></Link>
      </div>
        {props.loggedUser ?
        <div className="headerRight">
        <Link to="/" onClick={props.logout}><p>LogOut</p></Link></div>
        :
        <div className="headerRight">
        <Link to="/signin"><p>Iniciar sesión</p></Link>
        <Link to="/register"><p>Regístrate</p></Link>
        <Link to='/userprofile'><p>Mi Perfil</p></Link>
        </div>
        }
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedUser: state.auth.loggedUser
  }
}

const mapDispatchToProps = {
  logout: authActions.logOutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
