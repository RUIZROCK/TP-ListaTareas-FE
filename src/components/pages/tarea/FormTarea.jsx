import { Button, Form } from "react-bootstrap";

const FormTarea = () => {
  return (
    <>
      <h2>Nueva Tarea</h2>
      <hr />
      <Form className="py-2">
        <Form.Group className="py-2 ">
          <Form.Control type="text" placeholder="Escribe el Titulo aquí..." required/>
        </Form.Group>
        <Form.Group className="py-2 ">
          <Form.Control
            as="textarea"
            rows={17}
            placeholder="Escribe algo aquí..."
            required
          />
        </Form.Group>

        <Form.Group className="row d-flex py-2">
          <div className="col-12 col-md-1">
            <Form.Label>*Importancia:</Form.Label>
          </div>
          <div className="col-12 col-md-5">
            <Form.Control as="select" required>
              <option value="">Seleccionar...</option>
              <option value="baja">Baja</option>
              <option value="media">Media</option>
              <option value="alta">Alta</option>
              <option value="muy-alta">Muy Alta</option>
            </Form.Control>
          </div>
        </Form.Group>
        <div className="row d-flex justify-content-center py-2">
          <Button
            className="col-12 col-md-3 mx-1 "
            variant="primary"
            type="submit"
          >
            Guardar
          </Button>
          <Button
            className="col-12 col-md-3 mx-1 "
            variant="secondary"
            type="submit"
          >
            Volver
          </Button>
        </div>
      </Form>
    </>
  );
};

export default FormTarea;
