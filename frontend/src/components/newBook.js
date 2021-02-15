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

  const send=()=> {
    console.log(book)
    if(!book.genre || book.genre===''){
      alert('no se puede')
    }
    props.addBook(book)
  }

  console.log(book)

  return (
    <section>
      <form>
        <label htmlFor="title">Titulo</label>
        <input type="text" name="title" id="title" onChange={readInput} />
        <label htmlFor="description">Descripcion</label>
        <input type="text" name="description" id="description" onChange={readInput} />
        <label htmlFor="mainCharacters">Personajes Principales</label>
        <input type="text" name="mainCharacters" id="mainCharacters" onChange={readInput} />
        <label htmlFor="genre">Genero</label>
        <select name="genre" id="genre" defaultValue={'Elige un Género'} onChange={readInput}>
          <option value="" >Elige un Género</option>
          <option value="Accion">Accion</option>
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
      </form>
        <button onClick={send}>Continuar</button>
    </section>
  )
}

const mapDispatchToProps = {
  addBook: bookActions.addBook
}


export default connect(null, mapDispatchToProps)(NewBook)