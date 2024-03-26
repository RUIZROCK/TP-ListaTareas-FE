import Swal from "sweetalert2";
import { borrarTareaAPI, leerTareasAPI } from "../../../helpers/queries";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ItemTarea = ({ tarea, setTareas }) => {
  const borrarTarea = () => {
    Swal.fire({
      title: "¿Esta seguro de eliminar La Tarea?",
      text: "No se puede revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarTareaAPI(tarea._id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Tarea eliminada",
            text: `La Tarea fue eliminado correctamente`,
            icon: "success",
          });
          //actualizar la tabla del admin
          const respuestaTareas = await leerTareasAPI();
          if (respuestaTareas.status === 200) {
            const tareasRestantes = await respuestaTareas.json();
            setTareas(tareasRestantes);
          } else {
            Swal.fire({
              title: "Ocurrio un error",
              text: `No se pudo listar las Tareas`,
              icon: "error",
            });
          }
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: `La Tarea no fue eliminada. Intente esta operación luego`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <tr>
      <td>{tarea._id}</td>
      <td>{tarea.titulo}</td>
      <td>{tarea.importancia}</td>
      <td>
        <Link
          className="btn btn-success me-lg-2"
          to={"/detalleTarea/" + tarea._id}
        >
          Ver
        </Link>
        <Link
          className="btn btn-warning me-lg-2"
          to={"/editarTarea/" + tarea._id}
        >
          Editar
        </Link>
        <Button variant="danger" onClick={borrarTarea}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemTarea;
