import { connect } from "react-redux"
import { useState, useEffect } from "react"
import bookActions from "../redux/actions/bookActions"


const NewChapter = (props) => {
  const [title, setTitle] = useState({})
  const [content, setContent] = useState({})
  const [newBook, setNewBook] = useState([])
  const id = props.match.params.id

  useEffect(()=>{
    props.getBooks()
    var book = props.books.filter(book => book._id === id)
    setNewBook(book[0]) 
  },[props.books.length > 0])

  // console.log(props.newBook)
  const [chapter, setChapter] = useState([])

  const [newChapter, setNewChapter] = useState([])

  const keyPress=(e)=>{
    if(e.key==='Enter'){
      setChapter([
        ...chapter, {content}
      ])
      // props.sendContent(content, id, props.userLogged.token)
      document.getElementById("content").value = "";
    }
  }

  const prueba =(e)=> {
    e.preventDefault()
    setNewChapter([
      {title: title, chapter}
    ])
  }
  console.log(newChapter)
  const send = (e) => {
    e.preventDefault()

    // props.addChapter(chapter, id)
    // document.getElementById("title").value = "" ;
    // document.getElementById("title").focus();
    document.getElementById("content").value = "";
  }
  console.log(chapter)
  return (
    <section className="chapter">
      <div className="imag-form-chapter"></div>
      <div className="frase-form">
        <div className="frase-chapter">
          <h4>« ¡Atrapá al lector desde la primera página y lográ que tu historia este entre las más populares! »</h4>
        </div>
        <div className="container-form-chapter">
          <form className="form-chapter">
            <h3>Agregar nuevo capítulo</h3>
            <div className="line">
              <input className="input-chapter" type="text" name="title" id="title" placeholder="Capitulo" onChange={(e)=>setTitle(e.target.value)} />
            </div>
            {/* {book[0].chapters.length > 0  && <div className="chapterSended"><p>{book[0].chapters[0].chapter[0]}</p></div>} */}
            <input type="text" className="textarea-chapter" name="content" id="content" cols="20" rows="5" placeholder="Comenza a escibir tu historia..." 
            onKeyPress={keyPress} style={{ resize: 'none', width: '90%' }} onChange={(e)=>setContent(e.target.value)}></input>
            <button onClick={prueba}>PRUEBA</button>
            <button className="buttonNewChapter" onClick={send}><span>Enviar</span></button>
          </form>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    loggedUser: state.auth.loggedUser,
    newBook: state.bookR.newBook,
    books: state.bookR.books
  }
}

const mapDispatchToProps = {
  addChapter: bookActions.addChapter,
  getBooks: bookActions.getBooks,
  sendContent: bookActions.sendContent
}


export default connect(mapStateToProps, mapDispatchToProps)(NewChapter)