import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../Images/Logo.png"



const Login = () => {
  return (
    
 <div className="img-fluid"  style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL + '/Bg.jpg'})`,
  backgroundSize: 'cover',
  width: `1300px`,
  height: `600px`,
  
}}> ,


<ul className="nav justify-content-center">
  <li className="nav-item">
  <img className='rounded-circle border border-5' src={Logo}  alt="logoW" width="150" height="150" aling="center" />
  </li>
</ul>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <div className='container-md '>
    <div className="row justify-content-between">
    <div className="col-6 -md">
    <h1 className="display-5 text-white strong">Bienvenidos al sistema de Jukumari Travels</h1>  
    </div>


    <div className="col-6 -md">
    <form>
  <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label bg-primary text-white">Usuario</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label bg-primary text-white">Contraseña</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3"/>
    </div>
  </div>
  <button type="submit" className="btn btn-warning"><Link to="Home">Ingresar</Link></button>
</form>

    </div>
  </div>
        
    </div>
    </div>
    
  )
}

export default Login