const ItemTarea = ({tarea}) => {
  return (
    <tr>
      <td>{tarea.id}</td>
      <td>{tarea.titulo}</td>
      <td>
        <button className="btn btn-success mx-1">Ver</button>
        <button className="btn btn-warning">Editar</button>
        <button className="btn btn-danger">Borrar</button>
      </td>
    </tr>
  );
};

export default ItemTarea;
