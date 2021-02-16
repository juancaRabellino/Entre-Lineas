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

  return (
    <section className="settings">
      <form className="form-settings">
        <div className="line">
          <label htmlFor="username">Nombre de usuario</label>
          <input type="text" name="username" id="username" onChange={readInput} />
        </div>
        <div className="line">
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" onChange={readInput} />
        </div>
        <div className="line">
          <label htmlFor="email">Correo electrónico</label>
          <input type="text" name="email" id="email" onChange={readInput} />
        </div>
        <div className="line">
          <label htmlFor="firstName">Nombre</label>
          <input type="text" name="firstName" id="firstName" onChange={readInput} />
        </div>
        <div className="line">
          <label htmlFor="lastName">Apellido</label>
          <input type="text" name="lastName" id="lastName" onChange={readInput} />
        </div>
        <div className="line">
          <label htmlFor="showName">Mostrar nombre</label>
          <div className="checkbox">
            <input type="checkbox" name="showName" id="showName" onChange={readInput} />
          </div>
        </div>
        <div className="line">
          <label htmlFor="birthday">Fecha de nacimiento</label>
          <input type="date" min="1920-01-01" max="2021-2-31" name="birthday" id="birthday" onChange={readInput}></input>
        </div>
        <div className="line">
          <label htmlFor="gender">Género</label>
          <select name="gender" id="gender" defaultValue={'Select gender'} onChange={readInput}>
            <option value="" >Elige un Género</option>
            <option value="masc">Masculino</option>
            <option value="fem">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div className="line">
          <label htmlFor="urlPic">URL imagen</label>
          <input type="text" name="urlPic" id="urlPic" onChange={readInput} />
        </div>
        <div className="line">
          <div className="buttonSettings" onClick={send}>Enviar</div>
        </div>
      </form>
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