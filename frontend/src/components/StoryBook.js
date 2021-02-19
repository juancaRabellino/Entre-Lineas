import {connect} from 'react-redux'
import { Link } from "react-router-dom"

const StoryBook = (props)=>{
    var namePage = props.match.params.id
    var filtro = props.books.filter(libro=> libro._id === namePage)
    var indexPage = parseInt(props.match.params.index)

  /*   var parrafos = [1,2,3,4,5,6,7] */
    return(
        <>
            <div>
                <div>
                    {/* <div> */}
                        {/* <p>{filtro[0].chapters[0].title}</p>
                        <p>{filtro[0].chapters[indexPage].title}</p>
                    </div>
                    {/* <div>por {filtro[0].user.firstname} {filtro[0].user.lastname}</div> */}
                </div>
                <div>
                    <div>
                        {/* <p>{filtro[0].chapters[0].content}</p> */}
                        {/* {parrafos.map(parrafo=>{
                            return(
                                <p>soy el parrafo {parrafo}</p>
                            )
                        })} */}
                        {/* {<p>{filtro[0].chapters[indexPage].content}</p>} */}
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