import React, {useState} from 'react'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'

const ForgotPassword = ( props ) => {

    const [usuario, setUsuario] = useState({
       password:''
    })
    const [errores, setErrores] = useState ([])
    const [visible, setVisible] = useState(false)

    const readInput = e => { //receive the event
        const valor = e.target.value // capture the value
        const campo = e.target.name // capture the field

        setUsuario ({ //modify the user I have in the useState
            ...usuario,
            [campo]:valor
        });
    }

    const checkIfInputsAreEmpty = !usuario.password
    const changePassword = async e => { // function that runs when you click the create user button
        e.preventDefault() //prevent reloading the page
        if(checkIfInputsAreEmpty){
            alert ('Debe ingresar una nueva contraseña')
            return true
        }
        setErrores([])

        const respuesta = await props.makeNewPassword(usuario)
        if(respuesta && !respuesta.success){
            setErrores(respuesta.errores.details)
        }else{
            alert ('Password almacenada con exito')
        }
    }

  




return (
    <div className="containerRegister">
        <div className="imagRegister"></div>
            <div className="registerInput" >
                <div className= "register">
                    <h2>Recuperar Contraseña</h2>
                    <div className="userNameAndPassword">
                        <div style={{display:'flex',alignItems:'center'}}>
                            <input className="inputRegister" type={visible ? "text" : "password"} name="password" placeholder="Contraseña" onChange={readInput} />
                            <i className={visible ? "far fa-eye-slash" : "far fa-eye"} onClick={()=>setVisible(!visible)}></i>
                        </div>
                    </div>
                    <button className="botonRegister" onClick={changePassword} >Restablecer Contraseña</button>
                </div>
            </div>
        <div style={{height:"50vh", width:"60vw"}}>
            {/* {errores.map(error => alert(error))} */}
        </div>
    </div>
        )
    }

const mapDispatchToProps = { // map the actions
    makeNewPassword: authActions.makeNewPassword //mapDispachToProps object that has an action value
}

export default connect(null,mapDispatchToProps) (ForgotPassword)