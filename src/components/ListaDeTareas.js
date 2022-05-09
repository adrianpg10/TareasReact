import React, { useState } from "react";
import Formulario from "./Formulario";
import "../estilos/ListaDeTareas.css";
import Tareas from "./Tareas";
function ListaDeTareas() {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        if (tarea.texto.trim()) {

            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    }

    const eliminarTarea = id => {

        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada
            }
            return tarea;
        });
        setTareas(tareasActualizadas);

    }
    return (
        <>
            <Formulario onSubmit={agregarTarea} />
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea) =>
                        <Tareas key={tarea.id} id={tarea.id} texto={tarea.texto} 
                        completada={tarea.completada} completarTarea={completarTarea} eliminarTarea={eliminarTarea} />

                    )
                }
            </div>
        </>
    );
}

export default ListaDeTareas;