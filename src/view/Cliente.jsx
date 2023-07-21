import React from 'react'
import Logo from "../Images/Logo.png"
import { Link } from 'react-router-dom'
//import Modal from "../Modal"


const Cliente = () => {
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
          <Link to="Home" className="nav-link" style={{color:"#e3e8ea"}} aria-current="page" ><i className="fa-solid fa-house fa-2xl"></i>Inicio</Link>
        </li>
        <li className="nav-item center">
          <Link to="Cliente" className="nav-link" style={{color:"#e3e8ea"}} aria-current="page"><i className="fa-sharp fa-solid fa-person fa-2xl"></i>Clientes</Link>
          <i class="fa-solid fa-people-simple"></i>
        </li>
        <li className="nav-item center">
          <Link to="Reserva" className="nav-link" style={{color:"#e3e8ea"}}  aria-current="page" ><i className="fa-solid fa-hotel fa-2xl"></i>Reservas</Link>
        </li>
        <li className="nav-item center">
          <Link to="Proveedores" className="nav-link" style={{color:"#e3e8ea"}} aria-current="page" ><i className="fa-solid fa-parachute-box fa-2xl"></i>Proveedores</Link>
        </li>
        <li className="nav-item center">
          <Link to="Paquetet" className="nav-link" style={{color:"#e3e8ea"}} aria-current="page"><i className="fa-solid fa-box-open fa-2xl"></i>Paquetes Turisticos</Link>
        </li>
        <li className="nav-item center">
          <Link to="Destinos" className="nav-link" style={{color:"#e3e8ea"}}  aria-current="page"><i className="fa-solid fa-plane fa-2xl"></i>Destinos</Link>
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

<button type="button" className="btn btn-primary" style={{backgroundColor:"#008cba"}}  data-bs-toggle="modal" data-bs-target="#exampleModal">
  REGISTRO DE CLIENTES
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog modal-xl" >
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header"style={{backgroundColor:"#008cba"}}>
        <h5 className="modal-title text-white" id="exampleModalLabel">Ingreso de Clientes</h5>
        <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
      <form className="row g-3 needs-validation" novalidate>       
<div className="col-md-3">
    <label for="validationCustom02" className="form-label">Codigo Cliente</label>
    <input type="number" className="form-control" id="validationCustom02" required/>
    <div className="valid-feedback">
    </div>
  </div>

  <div className="col-md-3">
    <label for="validationCustom01" className="form-label"> Primer Nombre</label>
    <input type="text" className="form-control" id="validationCustom01"  required/>
    <div className="valid-feedback">  
    </div>
  </div>

  <div className="col-md-3">
    <label for="validationCustom01" className="form-label">Segundo Nombre</label>
    <input type="text" className="form-control" id="validationCustom01"  required/>
    <div className="valid-feedback">
    </div>
  </div>

  <div className="col-md-3">
    <label for="validationCustom02" className="form-label">Primer Apellido</label>
    <input type="text" className="form-control" id="validationCustom02" required/>
    <div className="valid-feedback">
    </div>
  </div>

  <div className="col-md-3">
    <label for="validationCustom02" className="form-label">Segundo Apellido</label>
    <input type="text" className="form-control" id="validationCustom02" required/>
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
    <label for="validationCustom02" className="form-label">Fecha de Nacimiento</label>
    <input type="date" className="form-control" id="validationCustom02" required/>
    <div className="valid-feedback">
    </div>
  </div>




  <div className="col-md-4">
    <label for="validationCustom04" className="form-label">Es menor de edad</label>
    <select className="form-select" id="validationCustom04" required>
      <option selected disabled value="">Elige...</option>
      <option>SI</option>
      <option>NO</option>
     
    </select>
    <div className="invalid-feedback">
      Selecciona un estado válido.
    </div>
  </div>
 

  <div className="col-md-4">
    <label for="validationCustom04" className="form-label"> Parentezco(si es menor de edad)</label>
    <select className="form-select" id="validationCustom04" required>
      <option selected disabled value="">Elige...</option>
      <option>Madre</option>
      <option>Padre</option>
      <option>Hermano mayor de edad</option>
      <option>Tutor legal</option>
      <option>Otro</option>
    </select>
    <div className="invalid-feedback">
      Selecciona un estado válido.
    </div>
  </div>



  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">¿Cual?</label>
    <input type="text" className="form-control" id="validationCustom02" required/>
    <div className="valid-feedback">
    </div>
  </div>


  <div className="col-md-4">
    <label for="validationCustom04" className="form-label">Tipo Documento Titular</label>
    <select className="form-select" id="validationCustom04" required>
      <option selected disabled value="">Elige...</option>
      <option>Cédula de Ciudadania</option>
      <option>Tarjeta de Identidad</option>
      <option>Registro Civil</option>
      <option>Cedula Extranjera</option>
      <option>Número de Pasaporte</option>

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
    <label for="validationCustom02" className="form-label">Correo Electronico</label>
    <input type="email" className="form-control" id="validationCustom02" required/>
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
 
      </form>
     </div>


      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" className="btn btn-primary">Guardar Registro</button>
      </div>

    </div>
  </div>
</div>
</div>

<br></br>
<br></br>

<div className='container-md'>

<table className="table table-primary table-bordered ">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Primero</th>
      <th scope="col">Último</th>
      <th scope="col">Handle</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>
      <span style={{border: "1px solid silver", borderRadius: "0.25em", padding:"0.5em"}}> <i class="fa-solid fa-pencil space-i"></i></span>
      <span style={{border: "1px solid silver", borderRadius: "0.25em", padding:"0.5em"}}><i class="fa-solid fa-trash"></i></span>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>
      <span style={{border: "1px solid silver", borderRadius: "0.25em", padding:"0.5em"}}> <i class="fa-solid fa-pencil space-i"></i></span>
      <span style={{border: "1px solid silver", borderRadius: "0.25em", padding:"0.5em"}}><i class="fa-solid fa-trash"></i></span>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td>
      <span style={{border: "1px solid silver", borderRadius: "0.25em", padding:"0.5em"}}> <i class="fa-solid fa-pencil space-i"></i></span>
      <span style={{border: "1px solid silver", borderRadius: "0.25em", padding:"0.5em"}}><i class="fa-solid fa-trash"></i></span>
      </td>
    </tr>


    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>
      <span style={{border: "1px solid silver", borderRadius: "0.25em", padding:"0.5em"}}> <i class="fa-solid fa-pencil space-i"></i></span>
      <span style={{border: "1px solid silver", borderRadius: "0.25em", padding:"0.5em"}}><i class="fa-solid fa-trash"></i></span>
      </td>
      
    </tr>

  </tbody>
</table>

</div>




</div>

    </div>
  )
}

export default Cliente