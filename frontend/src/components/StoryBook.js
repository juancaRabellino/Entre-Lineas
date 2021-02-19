import {connect} from 'react-redux'
import { Link } from "react-router-dom"

const StoryBook = (props)=>{
    var namePage = props.match.params.id
    var filtro = props.books.filter(libro=> libro._id === namePage)
    var indexPage = parseInt(props.match.params.index)

    return(
        <>
            <div>
                <div>
                    <div> 
                        <p>{filtro[0].chapters[indexPage].title}</p>
                    </div>
                    <div>por {filtro[0].user.firstname} {filtro[0].user.lastname}</div>
                </div>
                <div>
                    <div>
                        {filtro[0].chapters[indexPage].chapter.map(parrafo=>{
                           return(
                               <p>{parrafo.content}</p>
                           )
                        })}
                        
                    </div>
                    {indexPage === filtro[0].chapters.length -1 ? <Link to={`/story/${filtro[0]._id}`}><button>Volver al libro</button></Link> : <Link to={`/book/${filtro[0]._id}/${filtro[0].chapters[indexPage]._id}/${indexPage+1}`}><button>Sigue leyendo la parte siguiente {'>'}</button></Link>}
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

export default connect(mapStateToProps)(StoryBook);