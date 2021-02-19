import { useState } from 'react'
import { connect } from 'react-redux'
import { Button, Input } from 'reactstrap'
import bookActions from '../redux/actions/bookActions'

const Comment = (props) => {
    console.log(props)
    const [value, setValue] = useState('')
    const [input, setInput] = useState(false)

    const deleteC = async (e) => {
        e.preventDefault()
        await props.deleteComments(props.id, props.comment._id, props.loggedUser.token)
    }
    console.log(props.id)
    const modiComment = async (e) => {
        await props.modComment(value, props.comment._id, props.id, props.loggedUser.token)
    }
    
  const keyPress = e => {
    if (e.key === 'Enter') {
        modiComment()
    }
  }
    return (
        <div className="containerComment">
            <div className="containerComments">
                <div className="userPicAndName">
                    <img src={props.loggedUser.image} className="rounded-circle" alt="..."/>
                    <h6 className="index">{props.comment.firstName}</h6>
                </div>
                {!input ?
                <div className="contentComment">
                    <p>{props.comment.content}</p>
                </div>
                :
                <div className="d-flex">
                    <Input className="comment" id="comment" type="text" placeholder="Edit comment" onChange={(e) => {setValue(e.target.value)}} onKeyPress={keyPress}/>
                    <Button onClick={modiComment}><i className="fas fa-paper-plane"></i></Button>
                </div>}
                {props.loggedUser ?
                <>
                <div className="botonesEditAndBorrar">
                    <Button onClick={deleteC}><i className="far fa-trash-alt"></i></Button>
                    <Button onClick={() => {setInput(!input)}}><i className="fas fa-edit"></i></Button>
                </div>
                </>
                :
                ""
            }
            </div>
        </div>
        
    )
}
const mapStateToProps = state => {
    return {
      loggedUser: state.auth.loggedUser
    }
  }

const mapDispatchToProps = {
    deleteComments: bookActions.deleteComment,
    modComment: bookActions.modComment
}
export default connect(mapStateToProps, mapDispatchToProps)(Comment)