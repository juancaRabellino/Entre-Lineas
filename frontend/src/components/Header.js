import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'


const Header = (props) => {
  console.log(props)

  if(props.loggedUser !== null) {
    var links =
    <>
    <div className="containerHeader">
      <div className="headerLeft">
        <Link to="/"><img src={'../assets/logo.jpg'} className="logo" alt='logo Entre Líneas'></img></Link>
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
                <td><Link to="/">Acción</Link></td>
                <td><Link to="/">Aventura</Link></td>
                <td><Link to="/">Ciencia Ficción</Link></td>
              </tr>
              <tr>
                <td><Link to="/">Clásicos</Link></td>
                <td><Link to="/">Historias cortas</Link></td>
                <td><Link to="/">Históricas</Link></td>
              </tr>
              <tr>
                <td><Link to="/">Humor</Link></td>
                <td><Link to="/">Romance</Link></td>
                <td><Link to="/">Suspenso</Link></td>
              </tr>
              <tr>
                <td><Link to="/">Terror</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link to ="/search"><div className="toSearch">
          <i className="fas fa-search"></i>
          <p>Buscar</p>
        </div></Link>
      </div>
      <div className="headerRight">
        <p className="botonNav">Bienvenido! {props.loggedUser.userName}</p>
        <p style={{display:'inline-block', marginTop:'2.5vh'}} onClick={()=> props.logOutUser()}>Cerrar Sesion</p>
      </div>
      </div>
    </>
  }else {
    var links =
    <>
    <div className="containerHeader">
      <div className="headerLeft">
        <Link to="/"><img src={'../assets/logo.jpg'} className="logo" alt='logo Entre Líneas'></img></Link>
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
                <td><Link to="/">Acción</Link></td>
                <td><Link to="/">Aventura</Link></td>
                <td><Link to="/">Ciencia Ficción</Link></td>
              </tr>
              <tr>
                <td><Link to="/">Clásicos</Link></td>
                <td><Link to="/">Historias cortas</Link></td>
                <td><Link to="/">Históricas</Link></td>
              </tr>
              <tr>
                <td><Link to="/">Humor</Link></td>
                <td><Link to="/">Romance</Link></td>
                <td><Link to="/">Suspenso</Link></td>
              </tr>
              <tr>
                <td><Link to="/">Terror</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link to ="/search"><div className="toSearch">
          <i className="fas fa-search"></i>
          <p>Buscar</p>
        </div></Link>
      </div>
      <div className="headerRight">
        <Link to="/signin"><p>Iniciar sesión</p></Link>
        <Link to="/register"><p>Regístrate</p></Link>
      </div>
    </div>
    </>
  }
  return (
    <header>
      <nav>
        {links}
      </nav>
    </header>
  )
}

const mapStateToProps = state => {
  return {
      loggedUser: state.auth.loggedUser
  }
}

const mapDispatchToProps = {
  logOutUser:authActions.logOutUser
}

export default connect(mapStateToProps, mapDispatchToProps) (Header)