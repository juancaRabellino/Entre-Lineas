import {connect} from 'react-redux'
import bookActions from "../redux/actions/bookActions"
import { Link } from "react-router-dom"

const StoryDescription = (props)=>{
    var namePage = props.match.params.id
    var filtro = props.books.filter(libro=> libro._id === namePage)


    return(
        <>
        <div className="uno">
            <div className="chauu"></div>
            <div className="cuatro">
                <div className="hola" style={{ backgroundImage:`url('${filtro[0].image}')`, width:'15vw', height:'50vh'}}></div>
                <div className="cinco">
                    <h2>{filtro[0].title}</h2>
                    <h5>{filtro[0].genre}</h5>
                    <div className="dos">
                        <h5><i className="far fa-eye"></i> {filtro[0].views} </h5>
                        <h5><i class="far fa-star"></i> {filtro[0].stars.length} </h5>
                        <h5><i class="fas fa-list-ul"></i> {filtro[0].chapters.length}</h5>
                    </div>
                    <div className="tres">
                        <h5>{filtro[0].user.firstname}</h5>
                        <h5>{filtro[0].user.lastname}</h5>
                    </div>
                    <Link to={`/book/${filtro[0]._id}/${filtro[0].chapters[0]._id}/${0}`}><button className="BotonLeer">Leer</button></Link>
                </div>
            </div>
        </div>
        <div className="ocho">
            <div>
                <div className="seis">
                    <h2>Tabla de Contenidos</h2>
                </div>
                <div className="siete">
                {filtro[0].chapters.map((chapter, index) => {
                    return (
                        <Link to={`/book/${filtro[0]._id}/${chapter._id}/${index}`}><button><p>{chapter.title}</p></button></Link>
                    )
                })}
                </div>
            </div>
            <div className="nueve">
                <p>Comentarios ...</p>
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
    getBooks: bookActions.getBooks

}
export default connect(mapStateToProps, mapDispatchToProps)(StoryDescription);