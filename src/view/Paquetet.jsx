import React from 'react'
import Logo from "../Images/Logo.png"
import { Link } from 'react-router-dom'



const Paquetet = () => {
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
          <Link to="Paquetet" className="nav-link" aria-current="page"><i className="fa-solid fa-box-open fa-2xl"></i>Paquetes</Link>
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

        
<button type="button" className="btn btn-primary" style={{backgroundColor:"#008cba"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
  REGISTRAR UN NUEVO PAQUETE 
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog modal-lg" >
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header"style={{backgroundColor:"#008cba"}}>
        <h5 className="modal-title text-white" id="exampleModalLabel">Ingreso de Paquetes</h5>
        <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

        <form className="row g-3 needs-validation" novalidate>
        <div className="col-md-3">
            <label for="validationCustom02" className="form-label">Codigo Paquete </label>
            <input type="number" className="form-control" id="validationCustom02" required />
            <div className="valid-feedback">
            </div>
          </div>

          <div className="col-md-3">
            <label for="validationCustom01" className="form-label"> Nombre Paquete </label>
            <input type="text" className="form-control" id="validationCustom01" required />
            <div className="valid-feedback">
            </div>
          </div>

          <div className="col-md-3">
            <label for="validationCustom02" className="form-label">ID destino</label>
            <input type="number" className="form-control" id="validationCustom02" required />
            <div className="valid-feedback">
            </div>
          </div>

          <div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Reseña del paquete</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

          <div className="col-md-6">
            <label for="validationCustom02" className="form-label">Valor</label>
            <input type="number" className="form-control" id="validationCustom02" required />
            <div className="valid-feedback">
            </div>
          </div>


          </form>
        </div>

        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar Registro</button>
      </div>
    </div>
  </div>
</div>
</div>

<br></br>
<br></br>

<div className='container-md'>

<table className="table table-info table-bordered ">
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
      <i class="fa-solid fa-pencil"></i>
      <i class="fa-solid fa-trash"></i>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>
      <i class="fa-solid fa-pencil" ></i>
      <i class="fa-solid fa-trash"></i>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td>
      <i class="fa-solid fa-pencil"></i>
      <i class="fa-solid fa-trash"></i>
      </td>
    </tr>


    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>
      <i class="fa-solid fa-pencil"></i> 
      <i class="fa-solid fa-trash"></i>
      </td>
      
    </tr>

  </tbody>
</table>

</div>



</div>
    </div>
  )
}

export default Paquetet