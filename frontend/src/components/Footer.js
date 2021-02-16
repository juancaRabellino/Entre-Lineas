import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="footerLeft">
      <Link to="/"><img src={'../assets/logo.jpg'} className="logo" alt='logo Entre Líneas'></img></Link>
        <p>© 2020 Entre Líneas.</p>
      </div>
      <div className="footerRight">
        <a href="https://www.facebook.com/">
          <img src={'../assets/socialNetworks/facebook.png'} alt='Entre Líneas Facebook'></img>
        </a>
        <a href="https://twitter.com/">
          <img src={'../assets/socialNetworks/twitter.png'} alt='Entre Líneas Twitter'></img>
        </a>
        <a href="https://www.instagram.com/">
          <img src={'../assets/socialNetworks/instagram.png'} alt='Entre Líneas Instagram'></img>
        </a>
        <a href="https://www.youtube.com/">
          <img src={'../assets/socialNetworks/youtube.png'} alt='Entre Líneas Youtube'></img>
        </a>
      </div>
    </footer>
  )
}

export default Footer