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
      [prop]:value,
    })
  }
  console.log(book)

  const send=(e)=> { 
    e.preventDefault()
    if(!book.genre || book.genre===''){
      alert('no se puede')
    }
    props.addBook(book)
  }

  return (
    <section>
      <form className="form-book">
        <label htmlFor="title">Titulo</label>
        <input type="text" name="title" id="title" onChange={readInput} />
        <label htmlFor="description">Descripcion</label>
        <textarea name="description" id="description" cols="30" rows="10" onChange={readInput}></textarea>
        <label htmlFor="user">User id</label>
        <input type="text" name="user" id="user" onChange={readInput}/>
        <label htmlFor="genre">Genero</label>
        <select name="genre" id="genre" defaultValue={'Elige un Género'} onChange={readInput}>
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
        <button onClick={(e)=>send(e)}>Continuar</button>
      </form>
    </section>
  )
}

const mapDispatchToProps = {
  addBook: bookActions.addBook
}


export default connect(null, mapDispatchToProps)(NewBook)