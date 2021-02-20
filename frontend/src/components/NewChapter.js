import { connect } from "react-redux"
import { useState, useEffect } from "react"
import {Link} from 'react-router-dom'
import bookActions from "../redux/actions/bookActions"


const NewChapter = (props) => {
  const [title, setTitle] = useState({})
  const [content, setContent] = useState({})
  const id = props.match.params.id
  console.log(props)
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
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'8vh'}}>
            <h3>Agregar nuevo capítulo</h3>
            <div className="line">
              <input className="input-chapter" type="text" name="title" id="title" placeholder="Capitulo" onChange={(e)=>setTitle(e.target.value)} />
            </div>
          </div>
          <div className="form-chapter">
            {chapter.length > 0 && <div className="chapterSended">
              {chapter.map(content=> <p>{content.content}</p>)}</div>}
            <input type="text" className="textarea-chapter" name="content" id="content" cols="20" rows="5" placeholder="Comenzá a escibir tu historia..." 
            onKeyPress={keyPress} style={{ resize: 'none', width: '90%' }} onChange={(e)=>setContent(e.target.value)}></input>
          </div>
            <div style={{display:'flex', width:'46vw', justifyContent:'space-between', marginBottom:'10vh'}}>
              <button className="buttonNewChapter" onClick={send}><span>Agregar foto de portada</span></button>
              <Link to={`/finish-book/${id}`} id={id}><button className="buttonNewChapter"><span>Finalizar</span></button></Link>
            </div>
            <p style={{fontSize:'2.2vh'}}> * Cada vez que aprietes la tecla "Enter" se crea un nuevo párrafo .</p>
            <p style={{marginBottom:'3vh', fontSize:'2.2vh'}}> * Al hacer click en "Finalizar" tu libro se guarda sin foto de portada.</p>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    loggedUser: state.auth.loggedUser,
    books: state.bookR.books,
  }
}

const mapDispatchToProps = {
  addChapter: bookActions.addChapter,
  getBooks: bookActions.getBooks,
}


export default connect(mapStateToProps, mapDispatchToProps)(NewChapter)