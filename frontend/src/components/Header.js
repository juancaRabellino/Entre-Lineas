import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'
import bookActions from '../redux/actions/bookActions'
import cardActions from '../redux/actions/cardActions'
import { useEffect } from 'react'

const Header = (props) => {
  useEffect(() => {
    props.getBooks()
    props.getCardsCategories()
  }, [])

  return (
    <header>
      <div className="headerLeft">
        <Link to="/"><img src={'../assets/Logo-EntreLineas-Pluma-inclinada.png'} className="logo" alt='logo Entre Líneas'></img></Link>
        <div className="dropdown">
          <p>Navegar</p>
          <div className="dropdown-content">
            <div className="genres">
              {props.genres.map((genre, i) => <Link to={`/stories/${genre.genre}`} key={"linkGenre"+i}><p className="genre">{genre.genre}</p></Link>)}
            </div>
          </div>
        </div>
      </div>
      <Link to="/search"><div className="toSearch">
        <i className="fas fa-search"></i>
        <p>Buscar</p>
      </div></Link>
      {props.loggedUser ?
        <div className="headerRight">
          <Link to="/" onClick={props.logout}><p>LogOut</p></Link>
          <h4>Hola! {(props.loggedUser.firstname).toUpperCase()}</h4>
          <div className="dropDownPic" >{props.loggedUser.firstname.toUpperCase().substr(0, 1)}</div>
        </div>
        :
        <div className="headerRight">
          <Link to="/signin"><p>Iniciar sesión</p></Link>
          <Link to="/register"><p>Regístrate</p></Link>
        </div>
      }
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedUser: state.auth.loggedUser,
    genres: state.cardR.genres,
    cardsCategories: state.cardR.cardsCategories,
    books: state.bookR.books
  }
}

const mapDispatchToProps = {
  logout: authActions.logOutUser,
  getBooks: bookActions.getBooks,
  getCardsCategories: cardActions.getCardsCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)