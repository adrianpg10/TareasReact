import React, { useState } from "react";
import "../estilos/Formulario.css";
import { v4 as uuidv4 } from "uuid";
function Formulario(props) {

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);


    }
    const manejarEnvio = e => {
        e.preventDefault();
        
        const tareaNueva = {

            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
    }

    return (
        <form onSubmit={manejarEnvio} className="tarea-formulario">

            <input className="tarea-input" type="text" placeholder="Escribe una Tarea" name="texto" onChange={manejarCambio} />
            <button className="tarea-boton">Agregar Tarea</button>
        </form>

    );

}

export default Formulario;