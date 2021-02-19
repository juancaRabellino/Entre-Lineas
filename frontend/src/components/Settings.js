import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'


const Settings = (props) => {
  const [change, setChange] = useState(false)
  const [email, setEmail] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [birthday, setBirthday] = useState('')
  const [image, setImage] = useState('')

  useEffect(()=>{
    setEmail(props.loggedUser.email)
    setFirstname(props.loggedUser.firstname)
    setLastname(props.loggedUser.lastname)
    setBirthday(props.loggedUser.birthday.substr(-25, 10))
  },[])

  const edit = (e) => {
    e.preventDefault()
    setChange(!change)
  }

  const send = e => {
    e.preventDefault()
    const emailValue = document.getElementById('email').value
    const firstnameValue= document.getElementById('firstname').value
    const lastnameValue= document.getElementById('lastname').value
    const birthdayValue= document.getElementById('birthday').value
    const imageValue= document.getElementById('image').files[0]
    const formData = new FormData()

    formData.append('email', emailValue.trim())
    formData.append('firstname', firstnameValue.trim())
    formData.append('lastname', lastnameValue.trim())
    formData.append('birthday', birthdayValue)
    formData.append('image', imageValue)
    formData.append('id', props.loggedUser.id)

    var filesExtension = ['.jpg', '.png', '.jpeg']
    
    if(emailValue==='' || firstnameValue=== '' || lastnameValue === ''||  imageValue=== ''){
      alert('tienes que completar todos los campos')
    }else if(imageValue && filesExtension.some(file=>imageValue.name.includes(file))){
      props.modifyUser(formData)
      alert('correcta validacion')
    }else {
      alert('error en el archivo')
    }
  }

  return (
    <section className="settings">
      <div className="imagSettings"></div>
      <div className="container-form-settings">
        <form className="form-settings">
          <div className="tituloIcon">
            <div className="iconoAjus"></div>
              <h4>Ajustes de usuario</h4>
              <button className="settingsEdit" onClick={edit}>
                <i className="fas fa-pencil-alt editPencil" style={{color: 'white'}}></i>
                <p>Comezar</p>
              </button>
          </div>
          <div className="line">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" value={email} disabled={!change ? true : false} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="line">
            <label htmlFor="firstname">Nombre</label>
            <input type="text" name="firstname" id="firstname" disabled={!change ? true : false} value={firstname} onChange={(e)=>setFirstname(e.target.value)} />
          </div>
          <div className="line">
            <label htmlFor="lastname">Apellido</label>
            <input type="text" name="lastname" id="lastname" disabled={!change ? true : false} value={lastname} onChange={(e)=>setLastname(e.target.value)} />
          </div>
          <div className="line">
            <label htmlFor="birthday">Fecha de nacimiento</label>
            <input type="date" name="birthday" id="birthday" disabled={!change ? true : false} value={birthday} onChange={(e)=>setBirthday(e.target.value)} />
          </div>
          <div className="lineImgUser">
            <label htmlFor="image">Foto de perfil</label>
            <input type="file" name="image" id="image" value={image} onChange={(e)=>setImage(e.target.value)}/>
          </div>
          <div className="line">
            <div className="buttonSettings" onClick={send}><span>Confirmar cambios</span></div>
          </div>
        </form>
        <div className="userImage" style={{width: '20vw', height: '50vh', backgroundColor:"black", backgroundImage: `url('${props.loggedUser.image}')`}}>
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
  modifyUser: authActions.modifyUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)