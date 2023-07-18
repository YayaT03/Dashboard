import { Route, Routes } from 'react-router-dom';
import Login from './view/Login';
import Home from "./view/Home";
import Cliente from "../src/view/Cliente"
import Destinos from "../src/view/Destinos"
import Paquetet from './view/Paquetet';
import Proveedores from "../src/view/Proveedores"
import Reserva from "../src/view/Reserva"



import './App.css';

function App() {
  return (
    <div className="App">

      <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/Home/*' element={<Home/>}/>
      <Route path='Home/Cliente' element={<Cliente/>}/>
      <Route path='Home/Destinos' element={<Destinos/>}/>
      <Route path='Home/Paquetet' element={<Paquetet/>}/>
      <Route path='Home/Proveedores' element={<Proveedores/>}/>
      <Route path='Home/Reserva' element={<Reserva/>}/>



      </Routes>
     


    </div>
  );
}

export default App;
