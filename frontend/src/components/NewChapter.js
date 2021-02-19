import { connect } from "react-redux"
import { useState, useEffect } from "react"
import bookActions from "../redux/actions/bookActions"


const NewChapter = (props) => {
  const [title, setTitle] = useState({})
  const [content, setContent] = useState({})
  const id = props.match.params.id
  const book = props.books.filter(book => book._id === id)

  useEffect(()=>{
    props.getBooks()
  },[])

  // console.log(props.newBook)
  const [chapter, setChapter] = useState([])

  const keyPress=(e)=>{
    if(e.key==='Enter'){
      setChapter([
        ...chapter, content,
      ])
      document.getElementById("content").value = "";
    }
  }

  console.log(content)

  const send = (e) => {
    e.preventDefault()

    // props.addChapter(chapter, id)
    // document.getElementById("title").value = "" ;
    document.getElementById("title").focus();
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
              <input className="input-chapter" type="text" name="title" id="title" placeholder="Capitulo" onChange={(e)=>setTitle({...chapter, title:e.target.value})} />
            </div>
            {book.length>0  && <div className="chapterSended"><p>{book[0].chapters[0].chapter[0]}</p></div>}
            <textarea className="textarea-chapter" name="content" id="content" cols="20" rows="5" placeholder="Comenza a escibir tu historia..." 
            onKeyPress={keyPress} style={{ resize: 'none', width: '90%' }} onChange={(e)=>setContent({...content, content: e.target.value})}></textarea>
            <button className="buttonNewChapter" onClick={send}><span>Enviar</span></button>
          </form>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    newBook: state.bookR.newBook,
    books: state.bookR.books
  }
}

const mapDispatchToProps = {
  addChapter: bookActions.addChapter,
  getBooks: bookActions.getBooks
}


export default connect(mapStateToProps, mapDispatchToProps)(NewChapter)