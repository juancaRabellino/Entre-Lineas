import React, {useState} from 'react'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'

const SignIn =(props) => {

    const [userLogueado, setUserLogueado] = useState({})
    const [errores, setErrores] = useState ([])

    const readInput = e => { //receive the event
        const valor = e.target.value // capture the value
        const campo = e.target.name // capture the field
        setUserLogueado ({//modify the user I have in the useState
            ...userLogueado,
            [campo]:valor
        })
    }

    const validateUser = async e => { // function that runs when you click the create user button
        e.preventDefault() //prevent reloading the page
        if( userLogueado.email === "" || userLogueado.password === ""){
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
<div className="containerLogin">
        <div className="imagRegister"></div>
            <div className="registerInput" >
                <div className= "login">
                    <h2>Iniciar Sesion</h2>
                        <input className="inputRegister" type="text" name="email" placeholder="Nombre de Usuario" onChange={readInput}/>
                        <input className="inputRegister" type="password" name="password" placeholder="Contraseña" onChange={readInput}/>
                    <button className="botonRegister" onClick={validateUser} >Iniciar sesion</button>
                </div>
            </div>
            <div style={{height:"50vh", width:"60vw"}}>
            {/* {errores.map(error => {
                <h5>{error.message}</h5>
            })} */}
        </div>
    </div>
    )
}

const mapDispatchToProps = { // map the actions
    logInUser: authActions.logInUser
}

export default connect(null,mapDispatchToProps) (SignIn)