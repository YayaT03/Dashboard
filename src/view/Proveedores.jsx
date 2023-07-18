import React from 'react'
import Logo from "../Images/Logo.png"
import { Link } from 'react-router-dom'



const Proveedores = () => {
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
          <Link to="Home" className="nav-link" aria-current="page" ><i className="fa-solid fa-house fa-2xl"></i>Inicio</Link>
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


<div className='container-md'>
<form className="row g-3 needs-validation" novalidate>


<div className="col-md-3">
    <label for="validationCustom02" className="form-label">Codigo Proveedores</label>
    <input type="number" className="form-control" id="validationCustom02" required/>
    <div className="valid-feedback">
    </div>
  </div>


  <div className="col-md-4">
    <label for="validationCustom04" className="form-label">Tipo Documento</label>
    <select className="form-select" id="validationCustom04" required>
      <option selected disabled value="">Elige...</option>
      <option>Cédula de Ciudadania</option>
      <option>Tarjeta de Identidad</option>
      <option>Registro Civil</option>
      <option>Cedula Extranjera</option>
      <option>Número de Pasaporte</option>
      <option>NIT</option>

    </select>
    <div className="invalid-feedback">
      Selecciona un estado válido.
    </div>
  </div>


  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Numero de Identificacion</label>
    <input type="text" className="form-control" id="validationCustom02" required/>
    <div className="valid-feedback">
    </div>
  </div>


  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Proveedores col</label>
    <input type="text" className="form-control" id="validationCustom02" required/>
    <div className="valid-feedback">
    </div>
  </div>


  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Razon Social</label>
    <input type="text" className="form-control" id="validationCustom02" required/>
    <div className="valid-feedback">
    </div>
  </div>



  <div className="col-md-4">
    <label for="validationCustom01" className="form-label"> Primer Nombre</label>
    <input type="text" className="form-control" id="validationCustom01"  required/>
    <div className="valid-feedback">  
    </div>
  </div>


  <div className="col-md-4">
    <label for="validationCustom01" className="form-label">Segundo Nombre</label>
    <input type="text" className="form-control" id="validationCustom01"  required/>
    <div className="valid-feedback">
    </div>
  </div>


  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Primer Apellido</label>
    <input type="text" className="form-control" id="validationCustom02" required/>
    <div className="valid-feedback">
    </div>
  </div>


  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Segundo Apellido</label>
    <input type="text" className="form-control" id="validationCustom02" required/>
    <div className="valid-feedback">
    </div>
  </div>


  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Proveedores col 1</label>
    <input type="text" className="form-control" id="validationCustom02" required/>
    <div className="valid-feedback">
    </div>
  </div>
 

  <div className="col-md-4">
    <label for="validationCustom02" className="form-label"> Tipo de Proveedor</label>
    <input type="text" className="form-control" id="validationCustom02" required/>
    <div className="valid-feedback">
    </div>
  </div>


  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Telefono 1</label>
    <input type="text" className="form-control" id="validationCustom02" required/>
    <div className="valid-feedback">
    </div>
  </div>


  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Telefono2</label>
    <input type="text" className="form-control" id="validationCustom02" required/>
    <div className="valid-feedback">
    </div>
  </div>

  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Correo Electronico</label>
    <input type="email" className="form-control" id="validationCustom02" required/>
    <div className="valid-feedback">
    </div>
  </div>

  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">WhatsApp</label>
    <input type="text" className="form-control" id="validationCustom02" required/>
    <div className="valid-feedback">
    </div>
  </div>


  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Pais</label>
    <input type="text" className="form-control" id="validationCustom02" required/>
    <div className="valid-feedback">
    </div>
  </div>


  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Departamento</label>
    <input type="text" className="form-control" id="validationCustom02" required/>
    <div className="valid-feedback">
    </div>
  </div>


  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Municipio/Ciudad</label>
    <input type="text" className="form-control" id="validationCustom02" required/>
    <div className="valid-feedback">
    </div>
  </div>


  <div className="col-md-4">
    <label for="validationCustom03" className="form-label">Direccion principal</label>
    <input type="text" className="form-control" id="validationCustom03" required/>
    <div className="invalid-feedback">
      Proporciona una ciudad válida.
    </div>
  </div>
  
  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Proveedores col 2</label>
    <input type="text" className="form-control" id="validationCustom02" required/>
    <div className="valid-feedback">
    </div>
  </div>
  
  
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Enviar Registro</button>
  </div>
</form>
</div>


    </div>
  )
}

export default Proveedores