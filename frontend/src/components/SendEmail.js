import React, {useState} from 'react'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'


const SendEmail = ( props ) => {

    const [usuario, setUsuario] = useState({
        email:''
    })
    const [errores, setErrores] = useState ([])
 

    const readInput = e => { //receive the event
        const valor = e.target.value // capture the value
        const campo = e.target.name // capture the field

        setUsuario ({ //modify the user I have in the useState
            ...usuario,
            [campo]:valor
        });
    }

    const checkIfInputsAreEmpty = !usuario.email;

    const validateUser = async e => { // function that runs when you click the create user button
        e.preventDefault() //prevent reloading the page
        if(checkIfInputsAreEmpty){
            alert ('Debes escribir un email valido!')
            return true
        }
        setErrores([])

        const respuesta = await props.sendForgotPassword(usuario)
        if(respuesta && !respuesta.success){
            setErrores(respuesta.errores.details)
        }else{
            alert ("La solicitud de restablecimiento de contraseña fue generada con exito")
        }
    }

   


return (
    <div className="containerRegister">
        <div className="imagRegister"></div>
            <div className="registerInput" >
                <div className= "register">
                    <h2>Solicitud de restablecimiento de contraseña</h2>
                    <div className="userNameAndPassword">
                        <input className="inputRegister" type="text" name="email" placeholder="Email" onChange={readInput} />
                    </div>
                    <button className="botonRegister" onClick={validateUser} >Recuperar contraseña!</button>
                </div>
            </div>
        <div style={{height:"50vh", width:"60vw"}}>
            {/* {errores.map(error => alert(error))} */}
        </div>
    </div>
        )
    }

const mapDispatchToProps = { // map the actions
   sendForgotPassword : authActions.sendForgotPassword //mapDispachToProps object that has an action value
}

export default connect(null,mapDispatchToProps) (SendEmail)
