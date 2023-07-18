import React from 'react'
import Logo from "../Images/Logo.png"
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <div>
   <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#008cba", textSizeAdjust:"textlgstart" }}>
  <div className="container-fluid">
  <img className='rounded-circle border border-5' src={Logo}  alt="logoW" width="100" height="100"></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item center">
          <Link to="/" className="nav-link" aria-current="page" ><i className="fa-solid fa-house fa-2xl"></i>Inicio</Link>
        </li>
        <li className="nav-item center">
          <Link to="Cliente" className="nav-link" aria-current="page"><i className="fa-sharp fa-solid fa-person fa-2xl"></i>Clientes</Link>
          <i class="fa-solid fa-people-simple"></i>
        </li>
        <li className="nav-item center">
          <Link to="Reserva" className="nav-link" aria-current="page" ><i className="fa-solid fa-hotel fa-2xl"></i>Reservas</Link>
        </li>
        <li className="nav-item center">
          <Link to="Proveedores" className="nav-link" aria-current="page" ><i className="fa-solid fa-parachute-box fa-2xl"></i>Proveedores</Link>
        </li>
        <li className="nav-item center">
          <Link to="Paquetet" className="nav-link" aria-current="page"><i className="fa-solid fa-box-open fa-2xl"></i>Paquetes Turisticos</Link>
        </li>
        <li className="nav-item center">
          <Link to="Destinos" className="nav-link"  aria-current="page"><i className="fa-solid fa-plane fa-2xl"></i>Destinos</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
<br></br>
<br></br>
<br></br>
<div className="container-md">
  <div className="row align-items-start"style={{backgroundColor:"#008cba"}}>
    <div className="col fs-2 text-white">
      Proximas Salidas 
    </div>
    <div className="col fs-2 text-white">
      Paquetes Vigentes
    </div>
    <div className="col fs-2 text-white">
     Tabla de Precios 
    </div>
  </div>
















  </div>
    </div>
  )
}

export default Home