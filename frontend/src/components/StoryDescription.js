import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import bookActions from "../redux/actions/bookActions"
import { Link } from "react-router-dom"
import { Button, Input} from 'reactstrap'
import Comment from './Comment'

const StoryDescription = (props)=>{
    const [reload, setReload] = useState(false)
    const [value, setValue] = useState('')
    const [voted, setVoted] = useState('')
    var namePage = props.match.params.id
    var filtro = props.books.filter(libro=> libro._id === namePage)

    useEffect(() => {
        if(props.loggedUser) {
            setVoted(props.loggedUser.id)
        }
    }, [props.loggedUser])


    const enviar =  async (e) => {
        await props.addComment(value, filtro[0]._id, props.loggedUser.token)
        setValue("")
    }
    const votes = async () => {
        props.vote(filtro[0]._id, props.loggedUser.token)
        filtro[0].stars.push(props.loggedUser.id)
        console.log(filtro[0].stars)
        setReload(!reload)
    }
    const dismissVote = async () => {
        props.dismissVote(filtro[0]._id, props.loggedUser.token)
        filtro[0].stars.pop(props.loggedUser.id)
        setReload(!reload)
    }
    const keyPress = e => {
        if (e.key === 'Enter') {
        enviar()
        }
    }

    const redirect = () =>{
        alert("Esta historia todavia no tiene capitulos")
        props.history.push(`/stories/${filtro[0].genre}`)
    }

    return(
        <>
        <div className="uno">
            <div className="chauu"></div>
            <div className="cuatro">
                <div className="hola" style={{ backgroundImage:`url('${filtro[0].image}')`, width:'15vw', height:'50vh'}}></div>
                <div className="cinco">
                    <h2>{filtro[0].title}</h2>
                    <h5>{filtro[0].genre}</h5>
                    <div className="dos">
                        <h5><i className="far fa-eye"></i> {filtro[0].views} </h5>
                        <h5><i class="far fa-star"></i> {filtro[0].stars.length}</h5>
                        <h5><i class="fas fa-list-ul"></i> {filtro[0].chapters.length}</h5>
                    </div>
                    <div>
                        <h5>{filtro[0].user.firstname} {filtro[0].user.lastname}</h5>
                    </div>
                    {filtro[0].chapters.length > 0
                    ? <Link to={`/book/${filtro[0]._id}/${filtro[0].chapters[0]._id}/${0}`}>
                    <button className="BotonLeer">Leer</button></Link> : redirect()}
                    {filtro[0].stars.includes(voted) 
                    ?
                    <button className="BotonLeer" onClick={props.loggedUser && dismissVote}>Quitar Voto <i class="fas fa-star"></i></button>
                    : 
                    <button className="BotonLeer" onClick={props.loggedUser ? votes : ()=>alert('Necesitas iniciar sesion para poder votar!')}>Depositar voto <i class="far fa-star"></i></button>}
                </div>
            </div>
        </div>
        <div className="ocho">
            <div className="diez">
                <div className="seis">
                    <h2>Tabla de Contenidos</h2>
                </div>
                <div className="siete">
                    {filtro[0].chapters.map((chapter, index) => {
                        return (
                            <Link to={`/book/${filtro[0]._id}/${chapter._id}/${index}`}><button><p>{chapter.title}</p></button></Link>
                        )
                    })}
                </div>
            </div>
            <div className="nueve">
                <div className="chichi">
                    {props.comments.comments ?
                    <div>
                        {(props.comments.comments.map(comment => {
                            return <Comment comment={comment} key={comment._id} id={filtro[0]._id}/>
                        }))}
                    </div>
                    :
                    <h2 className="text-center bg-white w-100">Sin Comentarios</h2>}
                </div>
                <div>
                    {props.loggedUser ?
                    <div>
                        <div className="inputButtomEnvComment">
                            <Input className="comment" id="comment" type="text" placeholder="Comenta!" value={value} onChange={(e)=> setValue(e.target.value)} onKeyPress={keyPress}/>
                            <Button onClick={enviar}><i class="far fa-paper-plane"></i></Button>
                        </div>
                    </div> :
                    <div className="d-flex justify-content-center">
                        <Input className="comment w-50 text-center" disabled type="text" placeholder="Firts Logged plz" />
                    </div>}
                </div>
                 :
                <h2 className="text-center bg-white w-100">Sin Comentarios</h2>
                {props.loggedUser ? 
                <div className="">
                    <div className="inputButtomEnvComment">
                        <Input className="comment" id="comment" type="text" placeholder="Comenta!" value={value} onChange={(e)=> setValue(e.target.value)} onKeyPress={keyPress}/>
                        <Button onClick={enviar}><i class="far fa-paper-plane"></i></Button>
                    </div>
                </div> :
                <div className="d-flex justify-content-center">
                    <Input className="comment w-50 text-center" disabled type="text" placeholder="Necesitas iniciar sesion para comentar!" />
                </div>}
            </div>
        </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        loggedUser: state.auth.loggedUser,
        books: state.bookR.books,
        comments: state.bookR.comments
    }
  }

const mapDispatchToProps = {
    addComment: bookActions.addComment,
    getBooks: bookActions.getBooks,
    vote: bookActions.vote,
    dismissVote: bookActions.dismissVote,
    incViews: bookActions.incViews

}
export default connect(mapStateToProps, mapDispatchToProps)(StoryDescription);