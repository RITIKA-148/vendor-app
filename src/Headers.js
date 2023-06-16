import React from 'react';
import './Headers.css'

function Headers() {
  return (
    <div class="headers">
        <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <img class="pic"src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png"></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" >Contact-us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" >Help</a>
        </li> <li class="nav-item">
          <a class="nav-link active" href="#">About</a>
        </li>
      
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  )
}

export default Headers