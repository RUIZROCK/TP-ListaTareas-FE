const URI_TAREA = import.meta.env.VITE_API_TAREA;

export const crearTareaAPI = async (tareaNueva) => {
    try {
      const respuesta = await fetch(URI_TAREA, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tareaNueva),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };

  export const leerTareasAPI = async () => {
    try {
      const respuesta = await fetch(URI_TAREA);
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };

  export const borrarTareaAPI = async (id) => {
    try {
      const respuesta = await fetch(`${URI_TAREA}/${id}`, {
        method: "DELETE",
      });
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };

  export const obtenerTareaAPI = async (id) => {
    try {
      const respuesta = await fetch(`${URI_TAREA}/${id}`);
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const modificarTareaAPI = async (tarea, id) => {
    try {
      const respuesta = await fetch(`${URI_TAREA}/${id}`,{
        method: "PUT",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(tarea)
      })
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };