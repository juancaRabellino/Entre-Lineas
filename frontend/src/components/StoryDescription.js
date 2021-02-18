import {connect} from 'react-redux'
import bookActions from "../redux/actions/bookActions"
import {Link} from 'react-router-dom'
const StoryDescription = (props)=>{
    var namePage = props.match.params.id
    var filtro = props.books.filter(libro=> libro._id === namePage)
    console.log(props.match)

    var contador = 0

    return(
        <>
            <h1>SOY LA DESCRIPT DE {filtro[0].title}</h1>
            <h1>Lo hizo {filtro[0].user.firstname}</h1>
            <Link to={`/${filtro[0]._id}/${filtro[0].chapters[contador]._id}`}><button>Prueba</button></Link>
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