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
    props.addChapter(chapter, '602c552cf50b811f40c8add3')
  }

  return (
    <section className="chapter">
      <h3>Agregar nuevo capítulo</h3>
      <form className="form-chapter">
        <div className="line">
          <label htmlFor="title">Capítulo</label>
          <input type="text" name="title" id="title" onChange={readInput} />
        </div>
        <label htmlFor="content" className="labelContent">Contenido</label>
        <textarea name="content" id="content" cols="30" rows="10" style={{ resize: 'none', width: '90%' }} onChange={readInput}></textarea>
        <button className="buttonNewChapter" onClick={send}>Enviar</button>
      </form>
    </section>
  )
}

const mapDispatchToProps = {
  addChapter: bookActions.addChapter
}


export default connect(null, mapDispatchToProps)(NewChapter)