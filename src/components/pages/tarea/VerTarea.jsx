const VerTarea = ({ tarea }) => {
  return (
    <section>
      <h2>{tarea.titulo}</h2>
      <h3>Importancia: {tarea.importancia}</h3>
      <hr />
      <p>{tarea.detalle}</p>
    </section>
  );
};

export default VerTarea;
