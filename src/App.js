
import './App.css';
import rezadrilogo from "./images/logo_editado.png";

import ListaDeTareas from './components/ListaDeTareas';
function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='rezadricontenedor'>

        <img src={rezadrilogo} className="rezadrilogo"/>
      </div>

      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas/>
        </div>
    </div>
  );
}

export default App;
