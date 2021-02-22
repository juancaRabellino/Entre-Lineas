import { connect } from "react-redux"
import { useEffect, useState } from "react"
import bookActions from "../redux/actions/bookActions"
import Swal from'sweetalert2';


const NewBook =(props)=>{
  const [book, setBook] = useState({})

  const readInput =(e)=> {
    var value = e.target.value
    const prop = e.target.name
    if (prop ==='image') value = e.target.files[0]
    setBook({
      ...book,
      [prop]:value,
    })
  }

  useEffect(()=>{
    if(props.newBook._id) props.history.push(`/new-book/${props.newBook._id}`)
  },[props.newBook._id])


  const send= async (e) => {
    e.preventDefault();

    if(!book.genre || book.genre === ''|| book.title ===''|| book.description ===''|| book.user ==='' || book.image ===''){
        Swal.fire({
          icon: 'error',
          title: 'Verifique que todos los campos esten llenos.',
          showConfirmButton: false,
          timer: 4000
        })
    } else {
      const formData = new FormData()
      formData.append('genre', book.genre.trim())
      formData.append('title', book.title.trim())
      formData.append('description', book.description.trim())
      const respuesta = await props.addBook(formData, props.loggedUser.token)

      if(respuesta && !respuesta.success){
        Swal.fire({
          icon: 'error',
          title: '¡CUIDADO!',
          text: respuesta.mensaje,
          showConfirmButton: false,
          timer: 4000
        });
      } else {
        Swal.fire({
          icon: 'success',
          title: 'Listo',
          text: '¡Nuevo libro creado!',
          showConfirmButton: false,
          timer: 4000
        })
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
          {/* <input type="file" name="image" id="image" onChange={readInput}/> */}
          <button onClick={send} className="buttonDiscover"><span>Escribir capítulo </span></button>
        </form>
      </div>
    </div>
  </section>
  )
}

const mapStateToProps =state=> {
  return {
    newBook: state.bookR.newBook,
    loggedUser: state.auth.loggedUser
  }
}

const mapDispatchToProps = {
  addBook: bookActions.addBook
}


export default connect(mapStateToProps, mapDispatchToProps)(NewBook)