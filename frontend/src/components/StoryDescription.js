import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import bookActions from "../redux/actions/bookActions"
import { Link } from "react-router-dom"
import { Button, Input} from 'reactstrap'
import Comment from './Comment'

const StoryDescription = (props)=>{
    var namePage = props.match.params.id
    var filtro = props.books.filter(libro=> libro._id === namePage)
    
    const [value, setValue] = useState('')
    const [voted, setVoted] = useState(false)
    useEffect(() => {
        if(props.loggedUser) {
            setVoted(props.loggedUser.id)
        }

    }, [])
    const comment = e => {
        setValue(e.target.value)
    }
    const enviar =  (e) => {
        e.preventDefault()
        props.addComment(value, filtro[0]._id, props.loggedUser.token)
        document.getElementById('comment').value= ""
    }
    const votes = () => {
        props.vote(filtro[0]._id, props.loggedUser.token)
        setVoted(!voted)
    }
    const dismissVote = () => {
        props.dismissVote(filtro[0]._id, props.loggedUser.token)
        setVoted(!voted)
    }
    const keyPress = e => {
        if (e.key === 'Enter') {
        enviar()
        }
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
                    <div className="tres">
                        <h5>{filtro[0].user.firstname}</h5>
                        <h5>{filtro[0].user.lastname}</h5>
                    </div>
                    <Link><button className="BotonLeer">Leer</button></Link>
                    {filtro[0].stars.includes(voted) ?
                    
                    <button className="BotonLeer" onClick={props.loggedUser && dismissVote}>Quitar Voto <i class="fas fa-star"></i></button>: 
                    <button className="BotonLeer" onClick={props.loggedUser && votes}>Votar <i class="far fa-star"></i></button>}
                </div>
            </div>
        </div>
        <div className="ocho">
            <div>
                <div className="seis">
                    <h2>Tabla de Contenidos</h2>
                </div>
                <div className="siete">
                {filtro[0].chapters.map(chapter => {
                    return (
                        <Link><button><p>{chapter.title}</p></button></Link>
                    )
                })}
                </div>
            </div>
            <div className="nueve">
                {filtro[0].comments.length !== 0 ?
                <div>

                    {(filtro[0].comments.map(comment => {
                    return <Comment comment={comment} key={comment._id} id={filtro[0]._id}/>
                }))}
                </div>
                 :
                <h2 className="text-center bg-white w-100">Sin Comentarios</h2>}
                {props.loggedUser ? 
                <div className="d-flex justify-content-center">
                    <div className="d-flex">
                        <Input className="comment" id="comment" type="text" placeholder="Comenta!" onChange={comment} onKeyPress={keyPress}/>
                        <Button onClick={enviar}><i class="far fa-paper-plane"></i></Button>
                    </div>
                </div> :
                <div className="d-flex justify-content-center">
                    <Input className="comment w-50 text-center" disabled type="text" placeholder="Firts Logged plz" />

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

    }
  }

const mapDispatchToProps = {
    addComment: bookActions.addComment,
    getBooks: bookActions.getBooks,
    vote: bookActions.vote,
    dismissVote: bookActions.dismissVote

}
export default connect(mapStateToProps, mapDispatchToProps)(StoryDescription);