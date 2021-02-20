import { connect } from "react-redux"
import { useState } from "react"
import bookActions from "../redux/actions/bookActions"


const FinishBook=(props)=>{

  const id = props.match.params.id

  const [book, setBook] = useState({})
  const [fileUrl, setFileUrl] = useState(null)

  const processImage = () => {
    const imagen = document.getElementById('image').files[0]
    const foto = URL.createObjectURL(imagen)
    setFileUrl(foto)
  }

  const selectImag = (e) => {
    processImage()
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
    <section className="conteiner-finishBook">
      <div className="imagFinishBook"></div>
      <div className="form-finishBook">
        <div className="inputAndButtonFinishBook">
          <div className="finishBook">
            <h3>Elegir foto de portada</h3>
            <div className="selectImagPort">
              <label  for="image">
                <i for="image" class="fas fa-hand-pointer"></i>
                <h6>Click para seleccionar Imagen</h6>
              </label>
            </div>
            <input className="imagePort" type="file" name="image" id="image" onChange={selectImag}/>
            <button onClick={send} className="buttonFinshBook"><span>TERMINAR EL LIBRO</span></button>
          </div>
          <div className="portadaImage" style={{backgroundColor:"black", backgroundImage: `url('${fileUrl}')`}}></div>
        </div>
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