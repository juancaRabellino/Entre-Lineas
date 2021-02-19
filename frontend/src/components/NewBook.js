import { connect } from "react-redux"
import { useEffect, useState } from "react"
import bookActions from "../redux/actions/bookActions"
import Swal from'sweetalert2';


const NewBook =(props)=>{
  const [book, setBook] = useState({})
  const readInput =(e)=> {
    const value = e.target.value
    const prop = e.target.name
    setBook({
      ...book,
      [prop]:value.trim(),
    })
  }
  useEffect(()=>{
    if(props.newBook._id) props.history.push(`/new-book/${props.newBook._id}`)
  },[props.newBook._id])


  const send=(e)=> {
    e.preventDefault()
    if(!book.genre || book.genre===''|| book.title===''|| book.description===''|| book.user==='' || book.image===''){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se pueden enviar campos vacios!',
      })
    }else{
      const formData = new FormData()
      const imgValue = document.getElementById('image').files[0]
      formData.append('genre', book.genre)
      formData.append('title', book.title)
      formData.append('description', book.description)
      formData.append('user', book.user)
      formData.append('image', imgValue)
      var filesExtension = ['.jpg', '.png', '.jpeg']
      if(imgValue && filesExtension.some(file=>imgValue.name.includes(file))){
        props.addBook(formData, props.loggedUser.token)
        alert('Libro enviado con exito')
      }else{
        alert('Extension de archivo no permitida')
      }
    }

  }
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
          <input type="file" name="image" id="image"/>
          <button onClick={send} className="buttonDiscover"><span>Continuar</span></button>
        </form>
      </div>
    </div>
  </section>
  )
}

const mapStateToProps =state=> {
  return {
    newBook: state.bookR.newBook,
    loggedUser:state.auth.loggedUser
  }
}

const mapDispatchToProps = {
  addBook: bookActions.addBook
}


export default connect(mapStateToProps, mapDispatchToProps)(NewBook)