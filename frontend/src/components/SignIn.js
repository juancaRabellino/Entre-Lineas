import React, {useState} from 'react'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'

const SignIn =(props) => {

    const [userLogueado, setUserLogueado] = useState({})
    const [errores, setErrores] = useState ([])

    const readInput = e => { //recibe el evento
        const valor = e.target.value // captura el valor
        const campo = e.target.name // captura el campo
        setUserLogueado ({ //modifica el usuariologueado que tengo en el state
            ...userLogueado,//con lo que ya tiene
            [campo]:valor//y en el campo con el valor
        })
    }

    const validateUser = async e => {// funcion cuando le hace click a validar
        e.preventDefault()//prevenir que recargue la pagina
        if( userLogueado.username === "" || userLogueado.password === ""){
            alert('falta llenar campos')
            return false
        }
        setErrores([])
        const respuesta = await props.logInUser(userLogueado)
        if(respuesta && !respuesta.success){
            setErrores([respuesta.errores])
        }else{
            alert('Bienvenido a Entre Lineas!')
        }
    }

    return (
        <div className="containerRegister" >
            <div style={{height: '80vh',width: '65vw', backgroundSize: 'cover'}} className="imgRegister">
                <input type="text"  name="username" placeholder="Nombre de Usuario" className="inputRegister" onChange={readInput}/>
                <input type="password" name="password" placeholder="Contraseña" className="inputRegister" onChange={readInput}/>
                <button className="botonRegister" onClick={validateUser}>Iniciar sesion</button>
            </div>
            <div>
                {errores.map(error=> {
                    <h5>{error}</h5>
                    console.log(error)
                })}
            </div>
        </div>
    )
}

const mapDispatchToProps = { // map las acciones, lo que despacho
    logInUser: authActions.logInUser //newUser es una funcion que despacha una accion
}

export default connect(null,mapDispatchToProps) (SignIn)