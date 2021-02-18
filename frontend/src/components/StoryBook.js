import {connect} from 'react-redux'

const StoryBook = (props)=>{
    var namePage = props.match.params.id
    var chapterPage= props.match.params.chapter
    var filtro = props.books.filter(libro=> libro.chapters._id === chapterPage && libro._id === namePage)
    console.log(filtro)
    return(
        <>
            <div>
                <div>
                    <div>
                        <p>{filtro[0].chapters[0].title}</p>
                    </div>
                    <div>por {filtro[0].user.firstname} {filtro[0].user.lastname}</div>
                </div>
                <div>
                    <div>
                        <p>{filtro[0].chapters[0].content}</p>
                    </div>
                    <button>Sigue leyendo la parte siguiente {'>'}</button>
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