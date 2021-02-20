import React, {useState} from 'react'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login';

const SignIn =(props) => {

    const [userLogueado, setUserLogueado] = useState({})
    const [errores, setErrores] = useState ([])
    const [visible, setVisible] = useState(false)

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

    const responseGoogle = async (response) => {
        console.log(response)
        if(response.error){
            alert('Algo salio mal con tu cuenta de Google')
        }else{
            const respuesta = await props.logInUser({
                email: response.profileObj.email,
                password:response.profileObj.googleId
            })
        if(respuesta && !respuesta.success){
            setErrores(respuesta.errores.details)

        }else{
            alert ('Bienvenido a Entre Lineas!')
            console.log(respuesta)
            console.log(response)
        }
    }
}

const responseFacebook = async (response) => {
    if(response.error){
        alert('Algo salio mal con tu cuenta de Facebook')
    }else{
        const respuesta = await props.logInUser({
            email: response.email,
            password:response.id
        })
    if(respuesta && !respuesta.success){
        setErrores(respuesta.errores)
    }else{
        alert ('Bienvenido a Entre Lineas!')
        }
    }
}

    return (
<div className="containerLogin">
        <div className="imagRegister"></div>
            <div className="registerInput" >
                <div className= "login">
                    <h2>Iniciar Sesion</h2>
                        <input className="inputRegister" type="text" name="email" placeholder="Nombre de Usuario" onChange={readInput}/>
                        <div className="a">
                            <input className="inputRegisterPassword" type={visible ? "text" : "password"} name="password" placeholder="Contraseña" onChange={readInput}/>
                            <div className='ojito'><i class={visible ? "far fa-eye-slash" : "far fa-eye"} onClick={()=>setVisible(!visible)}></i></div>
                        </div>
                    <button className="botonRegister" onClick={validateUser} >Iniciar sesion</button>
                    <GoogleLogin
                        clientId="1087968275357-m12u0vuij7mp2vs76frlkn5of8ae1are.apps.googleusercontent.com"
                        buttonText="Iniciar sesion con google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    <FacebookLogin
                        appId="781019919514137"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={responseFacebook}
                        textButton="Iniciar sesion con Facebook"
                        icon="fa-facebook"
                        cssClass="iconoFacebook"
                    />
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