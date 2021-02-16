import { connect } from "react-redux"
import { useState } from "react"
import bookActions from "../redux/actions/bookActions"


const NewChapter = (props) => {
  const [book, setBook] = useState({})

  const readInput = (e) => {
    const value = e.target.value
    const prop = e.target.name
    setBook({
      ...book,
      [prop]: value,
    })
  }
  console.log(book)

  const send = (e) => {
    e.preventDefault()
    if (!book.genre || book.genre === '') {
      alert('no se puede')
    }
    props.addBook(book)
  }

  return (
    <section className="chapter">
      <h3>Agregar nuevo capítulo</h3>
      <form className="form-chapter">
        <div className="line">
          <label htmlFor="chapter">Capítulo</label>
          <input type="text" name="chapter" id="chapter" onChange={readInput} />
        </div>
        <label htmlFor="content" className="labelContent">Contenido</label>
        <textarea name="description" id="description" cols="30" rows="10" style={{ resize: 'none' }} onChange={readInput}></textarea>
        <div className="buttonNewChapter" onClick={send}>Enviar</div>
      </form>
    </section>
  )
}

const mapDispatchToProps = {
  addChapter: bookActions.addChapter
}


export default connect(null, mapDispatchToProps)(NewChapter)