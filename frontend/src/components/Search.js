import CardCategory from "./CardCategory"
import {connect} from "react-redux"
import {useEffect} from "react"
import bookActions from "../redux/actions/bookActions"

const Search = (props) => {
    
    useEffect( () => {
        props.getBooks()
    },[])

    return(
        <div className='containerComponentSearchStories'>
            <div className='containerSearchBar'>
                <input type='text' className='inputSearchStories' placeholder='¿Qué vas a leer hoy?'></input>
                <div className='iconSearchStories'><i class="fas fa-search"></i></div>
            </div>
            <div className='containerTitleSearch'>
                <h1>Explorá las categorías</h1>
            </div>
            <div className='containerViewCardsCategories'>
                <CardCategory />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        books: state.bookR.books,
        filter: state.bookR.filter,
        genero: state.bookR.genre
    }
  }

const mapDispatchToProps = {
    getBooks: bookActions.getBooks,
    search: bookActions.searchBooks
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);