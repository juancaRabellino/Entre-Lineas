import React, {useState} from 'react'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login';

const Register = ( props ) => {

    const [usuario, setUsuario] = useState({
        firstname:'',lastname:'',birthday:'',email:'',password:''
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

    const responseGoogle = async (response) => {
        if(response.error){
            alert('Algo salio mal con tu cuenta de Google')
        }else{
            const respuesta = await props.makeNewUser({
                firstname: response.profileObj.givenName,
                lastname: response.profileObj.familyName,
                // birthday: response.profileObj.googleId,
                email: response.profileObj.email,
                password:response.profileObj.googleId
            })
        if(respuesta && !respuesta.success){
            setErrores(respuesta.errores.details)
        }else{
            alert ('usuario guardado con exito')
        }
    }
}

const responseFacebook = async (response) => {
    var name = response.name.split(" ")

    if(response.error){
        alert('Algo salio mal con tu cuenta de Facebook')
    }else{
        const respuesta = await props.makeNewUser({
            firstname:name[0],
            lastname:name[1],
            // birthday: response.profileObj.googleId,
            email: response.email,
            password:response.id
        })
    if(respuesta && !respuesta.success){
        setErrores(respuesta.errores)
    }else{
        alert ('usuario guardado con exito')
        }
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
                        <GoogleLogin
                            clientId="1087968275357-m12u0vuij7mp2vs76frlkn5of8ae1are.apps.googleusercontent.com"
                            buttonText="Crear usuario con google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                        <FacebookLogin
                            appId="781019919514137"
                            autoLoad={false}
                            fields="name,email,picture"
                            callback={responseFacebook}
                            textButton="   Crear usuario con Facebook"
                            icon="fa-facebook "
                            cssClass="iconoFacebook"
                        />
                </div>
            </div>
        <div style={{height:"50vh", width:"60vw"}}>
            {/* {errores.map(error => alert(error))} */}
        </div>
    </div>
        )
    }

const mapDispatchToProps = { // map the actions
    makeNewUser: authActions.makeNewUser //mapDispachToProps object that has an action value
}

export default connect(null,mapDispatchToProps) (Register)
