import CardCategory from "./CardCategory"
import {connect} from "react-redux"
import {useEffect} from "react"
import bookActions from "../redux/actions/bookActions"
import cardActions from '../redux/actions/cardActions'

const Search = (props) => {
        
    useEffect( () => {
        props.getBooks()
        props.getCardsCategories()
    },[])

    return(
        <div className='containerComponentSearchStories'>
            <div className='containerSearchBar'>
                <input type='text' className='inputSearchStories' placeholder='¿Qué vas a leer hoy?'></input>
                <div className='iconSearchStories'><i className="fas fa-search"></i></div>
            </div>
            <div className='containerTitleSearch'>
                <h1>Explorá las categorías<span>&#160;</span></h1>
            </div>
            <div className='containerViewCardsCategories'>
                {props.genres.map(cardCategory => {
                    return <CardCategory cardCategory={cardCategory}/>
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        books: state.bookR.books,
        filter: state.bookR.filter,
        genres: state.cardR.genres
    }
}   

const mapDispatchToProps = {
    getBooks: bookActions.getBooks,
    search: bookActions.searchBooks,
    getCardsCategories: cardActions.getCardsCategories
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);