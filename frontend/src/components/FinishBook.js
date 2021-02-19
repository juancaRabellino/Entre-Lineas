import { connect } from "react-redux"
import { useState } from "react"
import bookActions from "../redux/actions/bookActions"


const FinishBook=(props)=>{
  const id = props.match.params.id
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

  const send=()=>{
    const formData = new FormData()
    formData.append('image', book.image)
    formData.append('id', id)
      var filesExtension = ['.jpg', '.png', '.jpeg']
      if(book.image && filesExtension.some(file=>book.image.name.includes(file))){
        props.addImage(formData, props.loggedUser.token)
      alert('Libro enviado con exito')
      }else{
         alert('Extension de archivo no permitida')
      }

  }

  return (
    <section>
      <div style={{width:'50vw', height: '50vh', display: "flex", flexDirection: 'column'}}>
        <input type="file" name="image" id="image" onChange={readInput}/>
        <button onClick={send}> TERMINAR EL LIBRO</button>
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    loggedUser: state.auth.loggedUser
  }
}

const mapDispatchToProps = {
  addImage: bookActions.addImage
}


export default connect(mapStateToProps, mapDispatchToProps)(FinishBook)