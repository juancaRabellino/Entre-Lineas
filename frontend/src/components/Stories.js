import {connect} from 'react-redux'
import {useState,useEffect}from'react'
import bookActions from "../redux/actions/bookActions"
import Story from './Story'

const Stories = (props)=>{
    const namePage = props.match.params.genre
    console.log(props.booksFiltered)
    const [filter, setFilter]=useState([])
    const [boolean,setBoolean]=useState(true)

    var books = props.books.filter(libro => libro.genre === namePage)
    useEffect(()=>{
        setFilter(books)
        setBoolean(!boolean)
    },[])

    function sortFilter(value) {
        if(value ==="mostPopular"){
           setFilter(books.sort((a,b)=> b.views - a.views))
           setBoolean(!boolean)
        }else if(value === "lessPopular"){
            setFilter(books.sort((a,b)=> a.views - b.views))
            setBoolean(!boolean)
        }
    }

    return (
        <>
        <div className='storiesContainer'>
            <h1>Historias de <span className='capitalize'>{namePage}</span></h1>
            <div className='boxStories'>
                <div className='upContainerStories'>
                    <p className='storyNumber'>{filter.length} Historias</p>
                    <div className='boxInputStories'>
                        <label for="popular">Filtrar Por:</label>
                        <select onChange={e => sortFilter(e.target.value)} name="popular" id="cars">
                            <option value="lessPopular">Menos Populares</option>
                            <option value="mostPopular">Mas Populares</option>
                        </select>
                    </div>
                </div>
                <div className='downContainerStories'>
                    {boolean ? filter.map(libro=>{
                        return(
                            <Story libro={libro}/>
                        )
                    }): filter.map(libro=>{
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
    filteredBooks: bookActions.filteredBooks,

}
export default connect(mapStateToProps,mapDispatchToProps)(Stories);