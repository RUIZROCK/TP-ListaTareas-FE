import { Table } from "react-bootstrap";
import ItemTarea from "./tarea/ItemTarea";

const Cuerpo = () => {
  let array=[{id:1,titulo:"t1",detalle:"d1",importancia:"i1"},
  {id:2,titulo:"t1",detalle:"d1",importancia:"i1"},
  {id:3,titulo:"t1",detalle:"d1",importancia:"i1"},
  {id:4,titulo:"t1",detalle:"d1",importancia:"i1"},
  {id:5,titulo:"t1",detalle:"d1",importancia:"i1"},
  {id:6,titulo:"t1",detalle:"d1",importancia:"i1"},
  {id:1,titulo:"t1",detalle:"d1",importancia:"i1"},
  {id:1,titulo:"t1",detalle:"d1",importancia:"i1"},
  {id:1,titulo:"t1",detalle:"d1",importancia:"i1"},
  {id:1,titulo:"t1",detalle:"d1",importancia:"i1"},
  {id:1,titulo:"t1",detalle:"d1",importancia:"i1"},
  {id:1,titulo:"t1",detalle:"d1",importancia:"i1"}];

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
                array.map((t)=> <ItemTarea key={t.id} tarea={t}></ItemTarea>)
              }
            </tbody>
          </Table>
        </article>
      </section>
    </>
  );
};

export default Cuerpo;
