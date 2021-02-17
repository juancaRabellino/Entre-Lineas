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
      <div className="imag-form-chapter"></div>
      <div className="frase-form">
        <div className="frase-chapter">
          <h4>« ¡Atrapá al lector desde la primera página y lográ que tu historia este entre las más populares! »</h4>
        </div>
        <div className="container-form-chapter">
          <form className="form-chapter">
            <h3>Agregar nuevo capítulo</h3>
            <div className="line">
              <input className="input-chapter" type="text" name="title" id="title" placeholder="Capitulo" onChange={readInput} />
            </div>
            <textarea className="textarea-chapter" name="content" id="content" cols="30" rows="10" placeholder="Comenza a escibir tu historia..." style={{ resize: 'none', width: '90%' }} onChange={readInput}></textarea>
            <button className="buttonNewChapter" onClick={send}><span>Enviar</span></button>
          </form>
        </div>
      </div>
    </section>
  )
}

const mapDispatchToProps = {
  addChapter: bookActions.addChapter
}


export default connect(null, mapDispatchToProps)(NewChapter)