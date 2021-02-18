import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'
import Button from 'react-bootstrap/Button';


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
    setEmail(props.loggedUser.email)
    setFirstname(props.loggedUser.firstname)
    setLastname(props.loggedUser.lastname)
    setBirthday(props.loggedUser.birthday.substr(-25, 10))
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
    if(imageValue.name.includes('.jpg' || '.jpeg')){
      props.modifyUser(formData)
      alert('correcta validacion')
    }else {
      alert('error en el archivo')
    }
  }

  return (
    <section className="settings">
      <div className="userImage" style={{width: '20vw', height: '20vh', backgroundColor:"black", backgroundImage: `url('${props.loggedUser.image}')`}}></div>
      <i onClick={edit} className="fas fa-pencil-alt editPencil"></i>
      <form className="form-settings">
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
          <input type="date" name="birthday" id="birthday" disabled={!change ? true : false} value={birthday} onChange={(e)=>setEmail(e.target.email)} />
        </div>
        <div className="line">
          <label htmlFor="image">URL imagen</label>
          <input type="file" name="image" id="image" value={image} onChange={(e)=>setImage(e.target.value)}/>
        </div>
        <div className="line">
          <div className="buttonSettings" onClick={send}>Confirmar cambios</div>
        </div>
      </form>
      <Button variant="primary">Primary</Button>
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