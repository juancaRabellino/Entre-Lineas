import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header>
      <div className="headerLeft">
        <Link to="/"><img src={'./assets/logo.jpg'} className="logo" alt='logo Entre Líneas'></img></Link>
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
                <td><Link to="/">Fantasía</Link></td>
                <td><Link to="/">Ciencia Ficción</Link></td>
              </tr>
              <tr>
                <td><Link to="/">Clásicos</Link></td>
                <td><Link to="/">Humor</Link></td>
                <td><Link to="/">Suspenso</Link></td>
              </tr>
              <tr>
                <td><Link to="/">Terror</Link></td>
                <td><Link to="/">Aventura</Link></td>
                <td><Link to="/">Romance</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link to ="/search"><div>
          <i className="fas fa-search"></i>
          <input placeholder="Buscar"></input>
        </div></Link>
      </div>
      <div className="headerRight">
        <Link to="/"><p>Iniciar sesión</p></Link>
        <Link to="/"><p>Regístrate</p></Link>
      </div>
    </header>
  )
}

export default Header