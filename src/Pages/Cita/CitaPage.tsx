import { useEffect, useState } from "react";
import MainHeader from "../../Components/mainHeader/MainHeader";
import { CitaDTO } from "../../Models/CitaDTO";
import * as citaService from "../../Service/CitaService";
import "./CitaPage.css"
import { Link } from "react-router-dom";
import { formatDateTime } from "../../Components/FormatDateTime";

const CitaPage = () => {

    const [cita, setCita] = useState<CitaDTO[]>([]);
    const [datos, setDatos] = useState(false);

    useEffect(() => {
        getAllCitas()
    },[datos])

    const getAllCitas = async () => {
        const res = await citaService.getAllCitas();
        console.log(res.data)
        setCita(res.data);
    }

    const actualizaDatos = () => {
        setDatos(!datos)
    }

    return <>
        <MainHeader />
        <div className="headerCita">
            <Link to={"/cita/crear"}>
                <button className="crearCita" >Crear Cita Nueva</button>
            </Link>
            <button onClick={actualizaDatos} className="crearCita">Actualizar el Listado</button>
            <Link className="volverInicioCita" to={"/"}>Volver al Inicio</Link>
        </div>

        <hr />
        <div className="bodyCita">
            {cita.map(c => (
                <div className="divCita" key={c.id}>
                    Fecha y Hora: {formatDateTime(new Date(c.fechaHora))}
                    <br />
                    Motivo: {c.motivoCita}
                    <br />
                    <Link to={"/cita/" + c.id}>
                        <button className="masDetallesCita">Ver mas detalles</button>
                    </Link>
                </div>

            ))}
        </div>
    </>
}

export default CitaPage;