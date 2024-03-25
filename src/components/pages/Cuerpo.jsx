import { Table } from "react-bootstrap";

const Cuerpo = () => {
  return (
    <>
      <section>
        <div className="row d-flex justify-content-evenly align-content-center ">
          <h1 className="col-12 col-md-11">Lista de Tareas</h1>
          <div className="col-12 col-md-1 my-2">
            <button className="btn btn-primary ">Nuevo</button>
          </div>
        </div>
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
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>
                  <button className="btn btn-success mx-1">Ver</button>
                  <button className="btn btn-warning">Editar</button>
                  <button className="btn btn-danger">Borrar</button>
                </td>
              </tr>
            </tbody>
          </Table>
        </article>
      </section>
    </>
  );
};

export default Cuerpo;
