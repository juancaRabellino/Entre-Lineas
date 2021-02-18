import { useState } from 'react'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'
import Button from 'react-bootstrap/Button';


const Settings = (props) => {
  const [user, setUser] = useState({})
  const [visible, setVisible] = useState(false);

  const readInput = e => {
    const value = e.target.value
    const prop = e.target.name
    setUser({
      ...user,
      [prop]:value,
    })
  }
  console.log(user)
  
  const send = e => {
    e.preventDefault()
    props.modifyUser(user)
  }

  console.log(props)

  return (

    <Button variant="primary">Primary</Button>
   

  )
}


const mapStateToProps = state => {
  return {
    loggedUser: state.auth.loggedUser
  }
}

const mapDispatchToProps = {
  modifyUser: authActions.modifyUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)