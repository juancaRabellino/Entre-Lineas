import CardCategory from "./CardCategory"
import { connect } from 'react-redux'
import bookActions from "../redux/actions/bookActions"
import { useEffect } from "react"

const SearchStories = (props) => {
    useEffect( () => {
        props.getBooks()
    }, [])
    
    return(
        <div className='containerComponentSearchStories'>
            <div className='containerSearchBar'>
                <input type='text' className='inputSearchStories' placeholder='¿Qué vas a leer hoy?' onChange={(e) => console.log(e.target.value)}></input>
                <div className='iconSearchStories'><i class="fas fa-search"></i></div>
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
        filter: state.bookR.filter
    }
  }

const mapDispatchToProps = {
    getBooks: bookActions.getBooks,
    search: bookActions.searchBooks
}


export default connect(mapStateToProps,mapDispatchToProps) (SearchStories)