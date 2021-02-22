import React, { useEffect } from 'react'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import bookActions from '../redux/actions/bookActions'

const ModifyBook = (props) => {
  var namePage = props.match.params.id
  var filtro = props.books.filter(libro => libro._id === namePage)

  useEffect(() => {
  }, [])

  const deleteBook=async()=>{
    await props.deleteBook(namePage)
    props.history.push("/userprofile")
  }

  return (
    <>
      {!props.books ?
        <h1>NO HAY NADA</h1>
        :
        <> <div className="oneModify">
          <div className="twoModify"></div>
          <div className="threeModify">
            <div className="fourModify" style={{ backgroundImage: `url('${filtro[0].image}')`, width: '15vw', height: '50vh' }}></div>
            <div className="fiveModify">
              <h2>{filtro[0].title}</h2>
              <h5>{filtro[0].genre}</h5>
              <Link to={`/modify-book/${namePage}/image`}><button className="buttonModify">Modificar Imagen</button></Link>
              <button onClick={deleteBook} className="buttonModify" style={{backgroundColor: 'red', marginLeft: '1vw'}}>Eliminar Libro</button>
            </div>
          </div>
        </div>
          <div className="sixModify">
            <div className="sevenModify">
              <div className="eightModify">
                <h2>Tabla de Contenidos</h2>
              </div>
              <div className="nineModify">
                {filtro[0].chapters.map((chapter, index) => {
                  return (
                    <Link to={`/modify-book/${filtro[0]._id}/${chapter._id}/${index}`}><button><p>{chapter.title}</p></button></Link>)})}
                </div>
            </div>
        </div>
      </>}
    </>
=======
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const ModifyBook =(props)=>{
  var namePage = props.match.params.id
  var filtro = props.books.filter(libro => libro._id === namePage)
  
  useEffect(()=>{
  },[])
  console.log(props.loggedUser)
  console.log(filtro[0])
  return (
    <>
    {!props.books ?
    <h1>NO HAY NADA</h1>
    :
    <> <div className="oneModify">
    <div className="twoModify"></div>
    <div className="threeModify">
        <div className="fourModify" style={{backgroundImage:`url('${filtro[0].image}')`, width:'15vw', height:'50vh'}}></div>
        <div className="fiveModify">
            <h2>{filtro[0].title}</h2>
            <h5>{filtro[0].genre}</h5>

            <Link >
            <button className="buttonModify">Modificar Imagen</button></Link>     
        </div>
    </div>
</div>
<div className="sixModify">
    <div className="sevenModify">
        <div className="eightModify">
            <h2>Tabla de Contenidos</h2>
        </div>
        <div className="nineModify">
            {filtro[0].chapters.map((chapter, index) => {
                return (
                    <Link to={`/book/${filtro[0]._id}/${chapter._id}/${index}`}><button><p>{chapter.title}</p></button></Link>
                )
            })}
        </div>
    </div>
    
</div></>}
</>
   
>>>>>>> 2477efb19c64f5d4db672102842421b40da00cb0
  )
}



const mapStateToProps = state => {
  return {
    books: state.bookR.books,
    loggedUser: state.auth.loggedUser
  }
}

const mapDispatchToProps = {
  deleteBook: bookActions.deleteBook
}


export default connect(mapStateToProps, mapDispatchToProps)(ModifyBook)