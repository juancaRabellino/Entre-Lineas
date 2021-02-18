import { useState } from 'react'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'

const Settings = (props) => {
  const [user, setUser] = useState({})
  const readInput = e => {
    const value = e.target.value
    const prop = e.target.name
    setUser({
      ...user,
      [prop]:value,
    })
  }
  console.log(user)
  
  const send = e => {
    e.preventDefault()
    props.modifyUser(user)
  }

  console.log(props)

  return (
    <section className="settings">
      <div className="imagSettings"></div>
      <div className="container-form-register">
        <form className="form-settings">
          <div className="tituloIcon">
            <div className="iconoAjus"></div>
            <h4>Ajustes de usuario</h4>
          </div>
          <div className="line">
            <label htmlFor="email">Nombre de usuario</label>
            <input type="text" name="email" id="email" placeholder={props.loggedUser.email} onChange={readInput} />
          </div>
          <div className="line">
            <label htmlFor="password">Contraseña</label>
            <input type="text" name="email" id="email" placeholder="******" onChange={readInput} />
          </div>
          <div className="line">
            <label htmlFor="firstname">Nombre</label>
            <input type="text" name="firstname" id="firstname" placeholder={props.loggedUser.firstname} onChange={readInput} />
          </div>
          <div className="line">
            <label htmlFor="lastName">Apellido</label>
            <input type="text" name="lastname" id="lastname" placeholder={props.loggedUser.lastname} onChange={readInput} />
          </div>
          <div className="line">
            <label htmlFor="birthday">Fecha de nacimiento</label>
            <input type="text" name="birthday" id="birthday" placeholder={props.loggedUser.birthday} onChange={readInput} />
          </div>
          <div className="line">
            <label htmlFor="urlPic">URL imagen</label>
            <input type="text" name="urlPic" id="urlPic" onChange={readInput} />
          </div>
          <div className="line">
            <div className="buttonSettings" onClick={send}><span>Enviar</span></div>
          </div>
        </form>
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