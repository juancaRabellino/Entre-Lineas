import { connect } from "react-redux"
import { useState } from "react"
import bookActions from "../redux/actions/bookActions"


const NewChapter = (props) => {
  const [chapter, setChapter] = useState({})

  const readInput = (e) => {
    const value = e.target.value
    const prop = e.target.name
    setChapter({
      ...chapter,
      [prop]: value,
    })
  }
  console.log(chapter)

  const send = (e) => {
    e.preventDefault()
    
    props.addChapter(chapter)
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