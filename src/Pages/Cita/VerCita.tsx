import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as citaService from "../../Service/CitaService";
import { CitaDTO } from "../../Models/CitaDTO";
import { DiagnosticoDTO } from "../../Models/DiagnosticoDTO";
import { Link } from "react-router-dom";
import { formatDateTime } from "../../Components/FormatDateTime";


const VerCita = () => {

    // Establecemos los campos de los objetos con un valor predeterminado
    const initDiagnostico: DiagnosticoDTO = {
        valoracionEspecialista: "", enfermedad: "", id: undefined
    }
    const initCita: CitaDTO = {
        fechaHora: new Date(), motivoCita: "", idMedico: 0, idPaciente: 0, diagnostico: initDiagnostico, id: undefined
    }

    const { id } = useParams();
    const [cita, setCita] = useState<CitaDTO>(initCita)

    useEffect(() => {
        getPaciente(parseInt(id!))
    }, [id])

    const getPaciente = async (idCita: number) => {
        const res = await citaService.getCitaById(idCita);
        setCita(res.data)
    }

    const handleBorrarCita = async (id: number | undefined) => {
        const confirmacion = window.confirm("¿Estás seguro de que deseas borrar esta cita?");
        if (confirmacion) {
            await citaService.deleteCita(id);
        }
    }

    return <>
        <div className="verDetallesCita">
            <h1 className="tituloVerCita">Datos Cita</h1>
            <strong>ID Cita:</strong> {cita.id}
            <br />
            <strong>Fecha y Hora:</strong> {formatDateTime(new Date(cita.fechaHora))}
            <br />
            <strong>Motivo de la Cita: </strong>{cita.motivoCita}
            <br />
            <strong>Paciente:</strong> <Link to={"/paciente/" + cita.idPaciente}>Ver Paciente</Link>
            <br />
            <strong>Medico:</strong> <Link to={"/medico/" + cita.idMedico}>Ver Medico</Link>
            <hr />
            <h1 className="tituloVerCita">Datos Diagnostico</h1>
            <strong>Valoracion del Especialista:</strong> {cita.diagnostico.valoracionEspecialista}
            <br />
            <strong>Enfermedad: </strong> {cita.diagnostico.enfermedad}
            <hr />
            <div>
                <Link to={"/cita/actualiza/" + cita.id}>
                    <button className="botonesVerCita">Modificar Cita</button>
                </Link>
                <Link to={"/cita"}>
                    <button className="botonesVerCita" onClick={() => handleBorrarCita(cita.id)}>Borrar Cita</button>
                    <button className="botonesVerCita">Volver al Listado</button>
                </Link>
            </div>
        </div>

    </>
}

export default VerCita