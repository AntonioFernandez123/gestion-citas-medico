
import React from "react";
import { Link } from "react-router-dom";
import paciente from "../../assets/paciente.png"
import medico from "../../assets/medico.png"
import cita from "../../assets/cita.png"
import "./HomePage.css"
import MainHeader from "../../Components/mainHeader/MainHeader";



const HomePage = () => {
    return (
        <div>
            <MainHeader />
            <div className="home">
                <Link to="/paciente">
                    <button className="botonHome">
                        <img src={paciente} alt="paciente" />
                        <h1>Paciente</h1>
                    </button>
                </Link>
                <Link to="/medico">
                    <button className="botonHome">
                        <img src={medico} alt="paciente" />
                        <h1>Médico</h1>
                    </button>
                </Link>
                <Link to="/cita">
                    <button className="botonHome">
                        <img src={cita} alt="paciente" />
                        <h1>Cita</h1>
                    </button>
                </Link>
            </div>
        </div>



    )
}

export default HomePage;