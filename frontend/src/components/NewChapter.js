import { connect } from "react-redux"
import { useState, useEffect } from "react"
import bookActions from "../redux/actions/bookActions"


const NewChapter = (props) => {
  const [title, setTitle] = useState({})
  const [content, setContent] = useState({})
  const id = props.match.params.id

  useEffect(()=>{
    props.getBooks()
  },[])
  const [chapter, setChapter] = useState([])


  const [newChapter, setNewChapter] = useState([])

  const keyPress=(e)=>{
    if(e.key==='Enter'){
      setChapter([
        ...chapter, {content}
      ])
      document.getElementById("content").value = "";
      
    }
  }
  // console.log('chapter ',chapter[0])
  const send = (e) => {
    e.preventDefault()
    setNewChapter([
      {title: title, chapter}
    ])
    props.addChapter(newChapter, id, props.loggedUser.token)
    document.getElementById("title").value = "" ;
    // document.getElementById("title").focus();
    document.getElementById("content").value = "";

  }

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
            {chapter.length > 0 && <div className="chapterSended">
              {chapter.map(content=> <p>{content.content}</p>)}</div>}
            <input type="text" className="textarea-chapter" name="content" id="content" cols="20" rows="5" placeholder="Comenza a escibir tu historia..." 
            onKeyPress={keyPress} style={{ resize: 'none', width: '90%' }} onChange={(e)=>setContent(e.target.value)}></input>
          </form>
            <button className="buttonNewChapter" onClick={send}><span>Agregar Imagen de portada</span></button>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    loggedUser: state.auth.loggedUser,
    books: state.bookR.books,
    newBook: state.bookR.books
  }
}

const mapDispatchToProps = {
  addChapter: bookActions.addChapter,
  getBooks: bookActions.getBooks,
}


export default connect(mapStateToProps, mapDispatchToProps)(NewChapter)