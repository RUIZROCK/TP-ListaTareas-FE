import { Link } from "react-router-dom";

const Encabezado = () => {
    return (
        <header className="bg-dark py-3 mb-3">
            <Link to={"/"}><h1 className="text-light mx-3">Pilatareas!</h1></Link>
        </header>
    );
};

export default Encabezado;