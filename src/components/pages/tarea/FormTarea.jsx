import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  crearTareaAPI,
  modificarTareaAPI,
  obtenerTareaAPI,
} from "../../../helpers/queries";

const FormTarea = ({ editar }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    if (editar) {
      cargarDatosTarea();
    }
  }, []);

  const cargarDatosTarea = async () => {
    const respuesta = await obtenerTareaAPI(id);
    if (respuesta.status === 200) {
      const TareaBuscada = await respuesta.json();
      setValue("titulo", TareaBuscada.titulo);
      setValue("detalle", TareaBuscada.detalle);
      setValue("importancia", TareaBuscada.importancia);
    }
  };

  const onSubmit = async (Tarea) => {
    console.log(Tarea)
    if (editar) {
      const respuesta = await modificarTareaAPI(Tarea, id);
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Tarea modificada",
          text: `La Tarea fue modificado correctamente`,
          icon: "success",
        });
        navegacion("/");
      } else {
        Swal.fire({
          title: "Ocurrio un error",
          text: `La tarea no pudo ser modificada. Intenta esta operación luego.`,
          icon: "error",
        });
      }
    } else {
      const respuesta = await crearTareaAPI(Tarea);
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Tarea creada",
          text: `La tarea fue creada correctamente`,
          icon: "success",
        });
        navegacion("/");
      } else {
        Swal.fire({
          title: "Ocurrio un error",
          text: `La tarea no pudo ser creada. Intenta esta operación luego.`,
          icon: "error",
        });
      }
    }
  };

  return (
    <>
      <h2>Nueva Tarea</h2>
      <hr />
      <Form className="py-2" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="py-2 ">
          <Form.Control
            type="text"
            placeholder="Escribe el Titulo aquí..."
            required
            {...register("titulo", {
              required: "El titulo es obligatorio",
              minLength: {
                value: 2,
                message: "Debe ingresar como minimo 2 caracteres",
              },
              maxLength: {
                value: 30,
                message: "Debe ingresar como maximo 30 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.titulo?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="py-2 ">
          <Form.Control
            as="textarea"
            rows={17}
            placeholder="Escribe algo aquí..."
            required
            {...register("detalle", {
              required: "El detalle es obligatorio",
              minLength: {
                value: 2,
                message: "Debe ingresar como minimo 2 caracteres",
              },
              maxLength: {
                value: 300,
                message: "Debe ingresar como maximo 30 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.detalle?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <div className="d-flex row">
            <div className="col-12 col-md-1">
              <Form.Label>*Importancia:</Form.Label>
            </div>
            <div className="col-12 col-md-3">
              <Form.Select
                {...register("importancia", {
                  required: "La importancia es obligatoria",
                })}
              >
                <option value="">Seleccionar...</option>
                <option value="Baja">Baja</option>
                <option value="Media">Media</option>
                <option value="Alta">Alta</option>
                <option value="Muy Alta">Muy Alta</option>
              </Form.Select>
            </div>
          </div>
        </Form.Group>

        <div className="row d-flex justify-content-center py-2 mt-3 ">
          <Button
            className="col-12 col-md-3 mx-1 "
            variant="primary"
            type="submit"
          >
            Guardar
          </Button>
          <Link className="col-12 col-md-3 mx-1 btn btn-secondary " to={"/"}>
            Volver
          </Link>
        </div>
      </Form>
    </>
  );
};

export default FormTarea;
