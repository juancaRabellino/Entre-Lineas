import {connect} from 'react-redux'
import { Link } from "react-router-dom"

const StoryBook = (props)=>{
    var namePage = props.match.params.id
    var filtro = props.books.filter(libro=> libro._id === namePage)
    var indexPage = parseInt(props.match.params.index)

  var parrafos = [{chapter:[{parrafo:"soy el parrafo 1 del cap1"}, {parrafo:"soy el parrafo2 del cap1"}]},
{chapter:[{parrafo:"parrafito1 del cap2"}, {parrafo:"parrafito2 del cap2"}]}]
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
                        {parrafos[indexPage].chapter.map(parrafo=>{
                           return(
                               <p>soy el {parrafo.parrafo}</p>
                           )
                        })}
                        
                    </div>
                    {/* <Link to={`/book/${filtro[0]._id}/${filtro[0].chapters[indexPage+1]._id}/${indexPage + 1}`}><button>Sigue leyendo la parte siguiente {'>'}</button></Link> */}
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