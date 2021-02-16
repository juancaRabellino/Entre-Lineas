import {connect} from 'react-redux'
import {useState,useEffect}from'react'
import bookActions from "../redux/actions/bookActions"
import Story from './Story'
const Stories = (props)=>{
    const namePage = props.match.params.genre

    const [filtro, setFiltro]=useState([])

    useEffect(()=>{
        var books = props.books.filter(libro => libro.genre.genre === namePage)
        setFiltro(books)
    },[])


    return (
        <>
        <div className='storiesContainer'>
            <h1>Historias de <span className='capitalize'>{namePage}</span></h1>
            <div className='boxStories'>
                <div className='upContainerStories'>
                    <p>{filtro.length} Historias</p>
                    <div className='boxInputStories'>
                        <label for="popular">Filtrar Por:</label>
                        <select name="popular" id="cars">
                            <option value="mostPopular">Mas Populares</option>
                            <option value="lessPopular">Menos Populares</option>
                        </select>
                    </div>
                </div>
                <div className='downContainerStories'>
                    {filtro.map(libro=>{
                        return(
                            <Story libro={libro}/>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        books: state.bookR.books,

    }
  }

const mapDispatchToProps = {
    getBooks: bookActions.getBooks,

}
export default connect(mapStateToProps,mapDispatchToProps)(Stories);