import React from 'react'
import Logo from "../Images/Logo.png"
import { Link } from 'react-router-dom'


const Reserva = () => {
  return (
    <div>

      <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#008cba", textSizeAdjust: "textlgstart" }}>
          <div className="container-fluid">
            <img className='rounded-circle border border-5' src={Logo} alt="logoW" width="100" height="100"></img>
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
                  <Link to="Destinos" className="nav-link" aria-current="page"><i className="fa-solid fa-plane fa-2xl"></i>Destinos</Link>
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
            <label for="validationCustom02" className="form-label">Codigo Reserva</label>
            <input type="number" className="form-control" id="validationCustom02" required />
            <div className="valid-feedback">
            </div>
          </div>

          <div className="col-md-3">
            <label for="validationCustom01" className="form-label"> Fecha Reserva </label>
            <input type="date" className="form-control" id="validationCustom01" required />
            <div className="valid-feedback">
            </div>
          </div>

          <div className="col-md-3">
            <label for="validationCustom02" className="form-label">Codigo Cliente</label>
            <input type="number" className="form-control" id="validationCustom02" required />
            <div className="valid-feedback">
            </div>
          </div>

          <div className="col-md-3">
            <label for="validationCustom01" className="form-label"> Fecha Salida</label>
            <input type="date" className="form-control" id="validationCustom01" required />
            <div className="valid-feedback">
            </div>
          </div>

          <div className="col-md-3">
            <label for="validationCustom01" className="form-label"> Fecha Regreso</label>
            <input type="date" className="form-control" id="validationCustom01" required />
            <div className="valid-feedback">
            </div>
          </div>

          <div className="col-md-3">
            <label for="validationCustom01" className="form-label"> Numero paquete turistico</label>
            <input type="number" className="form-control" id="validationCustom01" required />
            <div className="valid-feedback">
            </div>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Pasajeros</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>



          <div className="col-12">
            <button className="btn btn-primary" type="submit">Enviar Registro</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Reserva