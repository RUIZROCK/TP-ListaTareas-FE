import { Table } from "react-bootstrap";
import ItemTarea from "./tarea/ItemTarea";
import { useEffect, useState } from "react";
import { leerTareasAPI } from "../../helpers/queries";
import Swal from "sweetalert2";
const Cuerpo = () => {
  
  const [tareas, setTareas] = useState([]);
  useEffect(() => {
    obtenerTareas();
  }, []);

  const obtenerTareas = async () => {
    const respuesta = await leerTareasAPI();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setTareas(datos);
    }else{
      Swal.fire({
        title: "Ocurrio un error",
        text: `Intenta esta operación en unos minutos.`,
        icon: "error"
      });
    }
  };

  return (
    <>
      <section>
        <div className="row d-flex justify-content-evenly align-content-center ">
          <h1 className="col-12 col-md-11">Lista de Tareas</h1>
          <div className="col-12 col-md-1 my-2">
            <button className="btn btn-primary ">Nuevo</button>
          </div>
        </div>
        <hr />
        <article>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Tarea</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                tareas.map((t)=> <ItemTarea key={t._id} tarea={t}></ItemTarea>)
              }
            </tbody>
          </Table>
        </article>
      </section>
    </>
  );
};

export default Cuerpo;
