import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
  <nav class="navbar navbar-expand-lg" style={{background: "#e3e3e3"}}>
  <div class="container">
    <Link class="navbar-brand fw-bold" to="/">Codegptech</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
    aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0 fw-bold">
    
        <li class="nav-item">
          <Link class="nav-link" to="/login">LogIn</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/signup">SignUp</Link>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
