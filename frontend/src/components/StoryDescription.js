import {connect} from 'react-redux'
import bookActions from "../redux/actions/bookActions"
const StoryDescription = (props)=>{
    var namePage = props.match.params.id
    var filtro = props.books.filter(libro=> libro._id === namePage)
    return(
        <>
            <h1>SOY LA DESCRIPT DE {filtro[0].title}</h1>
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