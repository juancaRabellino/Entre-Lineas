import React, { useEffect } from 'react'
import {connect} from 'react-redux'

const ModifyBook =(props)=>{

  var book = props.books.map(book=> console.log(book._id === props.match.params.id))

  useEffect(()=>{
  },[])
  console.log(props.loggedUser)
  console.log(props.books)
  return (
    <>
    {!props.books ?
    <h1>NO HAY NADA</h1>
    :
    <div className="modify-book">
      <div className="modify-book-image">IMAGEN DEL LIBRO</div>
      <h2 className="modify-book-title">NOMBRE DEL LIBRO</h2>
      <div className="modify-book-chapters">CAPITULOS</div>
    </div>
    }
    </>
  )
}



const mapStateToProps = state => {
  return {
    books: state.bookR.books,
    loggedUser: state.auth.loggedUser
  }
}

export default connect(mapStateToProps)(ModifyBook)