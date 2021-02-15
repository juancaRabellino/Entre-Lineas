import React, {useState} from 'react'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'

const Register = ( props ) => {

    const [usuario, setUsuario] = useState({})
    const [errores, setErrores] = useState ([])

    const readInput = e => { //receive the event
        const valor = e.target.value // capture the value
        const campo = e.target.name // capture the field

        setUsuario ({ //modify the user I have in the useState
            ...usuario,
            [campo]:valor
        });
    }

    const checkIfInputsAreEmpty = !usuario.firstname || !usuario.lastname || !usuario.birthday || !usuario.email || !usuario.password;

    const validateUser = async e => { // function that runs when you click the create user button
        e.preventDefault() //prevent reloading the page
        if(checkIfInputsAreEmpty){
            alert ('falta de llenar campos')
            return true
        }
        setErrores([])

        const respuesta = await props.makeNewUser(usuario)
        if(respuesta && !respuesta.success){
            setErrores(respuesta.errores.details)
        }else{
            alert ('usuario guardado con exito')
        }
    }


return (
    <div className="containerRegister">
        <div className="imagRegister"></div>
            <div className="registerInput" >
                <div className= "register">
                    <h2>Crear Usuario</h2>
                    <div className="nameAndLastName">
                        <input className="inputRegister" type="text" name="firstname" placeholder="Nombre" onChange={readInput}/>
                        <input className="inputRegister" type="text" name="lastname" placeholder="Apellido" onChange={readInput}/>
                    </div>
                    <input  className="inputRegister" type="date" min="1950-01-01" max="2021-2-31" name="birthday" placeholder="fechas de nacimiento" onChange={readInput}></input>
                    <div className="userNameAndPassword">
                    <input className="inputRegister" type="text" name="email" placeholder="Email" onChange={readInput} />
                    <input className="inputRegister" type="password" name="password" placeholder="Contraseña" onChange={readInput} ></input>
                    </div>
                    <button className="botonRegister" onClick={validateUser} >Crear usuario</button>
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
    makeNewUser: authActions.makeNewUser //mapDispachToProps object that has an action value
}

export default connect(null,mapDispatchToProps) (Register)
