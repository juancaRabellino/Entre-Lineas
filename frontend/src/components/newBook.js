import { connect } from "react-redux"
import { useState } from "react"
import bookActions from "../redux/actions/bookActions"


const NewBook =(props)=>{
  const [book, setBook] = useState({})

  const readInput =(e)=> {
    const value = e.target.value
    const prop = e.target.name
    setBook({
      ...book,
      [prop]:value
    })
  }

  const send=(e)=> { 
    e.preventDefault()
    console.log(book)
    if(!book.genre || book.genre===''){
      alert('no se puede')
    }
    props.addBook(book)
  }

  console.log(book)

  return (
    <section className="section-form-book">
      <div className="imag-form-book"></div>
      <div className="frase-form">
        <div className="frase">
          <h4>« Escribir es la manera más profunda de leer la vida »</h4>
          <h3>- Francisco Umbral. -</h3>
        </div>
        <div className="container-form-book">
          <form className="form-book">
            <h5 className="newBook">Nuevo Libro</h5>
            <input className="input-formBook" type="text" name="title" id="title" placeholder="Titulo" onChange={readInput} />
            <textarea className="textarea-formBook" name="description" id="description" cols="30" rows="10" placeholder="Descripcion" onChange={readInput}></textarea>
            <input className="input-formBook" type="text" name="user" id="user" placeholder="User id" onChange={readInput}/>
            <select className="input-formBook" name="genre" id="genre" defaultValue={'Elige un Género'} onChange={readInput}>
              <option value="" >Elige un Género</option>
              <option value="Acción">Acción</option>
              <option value="Aventura">Aventura</option>
              <option value="Ciencia Ficción">Ciencia Ficción</option>
              <option value="Clásicos">Clásicos</option>
              <option value="Historias Cortas">Historias Cortas</option>
              <option value="Históricas">Históricas</option>
              <option value="Humor">Humor</option>
              <option value="Romance">Romance</option>
              <option value="Suspenso">Suspenso</option>
              <option value="Terror">Terror</option>
            </select>
            <button onClick={send} className="buttonDiscover"><span>Continuar</span></button>
          </form>
        </div>
      </div>
    </section>
  )
}

const mapDispatchToProps = {
  addBook: bookActions.addBook
}


export default connect(null, mapDispatchToProps)(NewBook)