import "./App.css";
import Cuerpo from "./components/pages/Cuerpo";
import Footer from "./components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import FormTarea from "./components/pages/tarea/FormTarea";
import VerTarea from "./components/pages/tarea/VerTarea";
import Encabezado from "./components/common/Encabezado";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Encabezado></Encabezado>
        <Container className="mainContainer">
          <Routes>
            <Route exact path="/" element={<Cuerpo></Cuerpo>}></Route>
            <Route
              exact
              path="/detalleTarea/:id"
              element={<VerTarea></VerTarea>}
            ></Route>
            <Route
              exact
              path="/crearTarea"
              element={<FormTarea></FormTarea>}
            ></Route>
            <Route
              exact
              path="/editarTarea/:id"
              element={<FormTarea editar={true}></FormTarea>}
            ></Route>
          </Routes>
        </Container>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
