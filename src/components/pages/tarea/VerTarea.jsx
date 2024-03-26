import { Link, useParams } from "react-router-dom";
import { obtenerTareaAPI } from "../../../helpers/queries";
import { useEffect, useState } from "react";

const VerTarea = () => {
  const [tarea, setTarea] = useState({});
  const { id } = useParams();

  useEffect(() => {
    cargarDatosTarea();
  }, []);

  const cargarDatosTarea = async () => {
    const respuesta = await obtenerTareaAPI(id);
    if (respuesta.status === 200) {
      setTarea(await respuesta.json());
    }
  };

  return (
    <section>
      <h2>{tarea.titulo}</h2>
      <h5>Importancia: {tarea.importancia}</h5>
      <hr />
      <p>{tarea.detalle}</p>
      <hr />
      <Link className="col-12 col-md-3 mx-1 btn btn-secondary " to={"/"}>
        Volver
      </Link>
    </section>
  );
};

export default VerTarea;
