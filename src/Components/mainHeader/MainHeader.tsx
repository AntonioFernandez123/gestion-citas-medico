import logo from "../../assets/logo.png"
import "./MainHeader.css"

const MainHeader = () => {
    return (
        <div className="header">
            <div className="divDerecha">
                <img className="imgHeader" src={logo} alt="Logo Aplicacion Web" />
                <span className="tituloHeader">Portal del Paciente</span>
            </div>
            <div className="divIzquierda">
                <button className="botonHeader">Iniciar Sesion</button>
                <button className="botonHeader">Registrarse</button>
            </div>
        </div>
    )
}

export default MainHeader;