import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CitaDTO } from "../../Models/CitaDTO";
import { DiagnosticoDTO } from "../../Models/DiagnosticoDTO";
import * as citaService from "../../Service/CitaService";
import { formatDateTime } from "../../Components/FormatDateTime";
import { MedicoCita } from "./MedicoCita";
import { PacienteCita } from "./PacienteCita";
import { Link } from "react-router-dom";

const ActualizaCita = () => {

    const initDiagnostico: DiagnosticoDTO = {
        id: 0, valoracionEspecialista: "", enfermedad: ""
    }

    const initCita: CitaDTO = {
        fechaHora: new Date(), motivoCita: "", idMedico: 0, idPaciente: 0, diagnostico: initDiagnostico, id: 0
    }

    const { id } = useParams();
    const [cita, setCita] = useState<CitaDTO>(initCita)

    useEffect(() => {
        getCita(parseInt(id!))
    }, [id])

    const getCita = async (idCita: number) => {
        const res = await citaService.getCitaById(idCita);
        setCita(res.data)
    }

    const [updateCita, setUpdateCita] = useState<CitaDTO>(initCita)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdateCita({ ...updateCita, [e.target.name]: e.target.value })

        const { name, value } = e.target;
        setUpdateCita(prevState => ({
            ...prevState,
            diagnostico: {
                ...prevState.diagnostico,
                [name]: value
            }
        }))
    }

    const onUpdate = async () => {
        await citaService.updateCita(cita.id!, updateCita)
    }

    // Saca el id del Medico del Select
    const handleMedicoChange = (idMedico: number) => {
        setUpdateCita(prevState => ({
            ...prevState,
            idMedico: idMedico
        }));
    }

    // Saca el id del Paciente del Select
    const handlePacienteChange = (idPaciente: number) => {
        setUpdateCita(prevState => ({
            ...prevState,
            idPaciente: idPaciente
        }));
    }

    return <>
        <h1 className="labelCita">Modifica Cita</h1>
        <div>
            <label className="labelUpdateCita">Id: </label><br />
            <input value={cita?.id!} onChange={onChange} type="number" name="id" id="id" readOnly className="inputCita" />
        </div>
        <div>
            <label className="labelUpdateCita">Fecha y Hora: </label><br />
            <input value={formatDateTime(new Date(cita.fechaHora))} onChange={onChange} type="text" name="fechaHora" id="fechaHora" readOnly className="inputCita" />
        </div>
        <div>
            <label className="labelUpdateCita">Motivo de la Cita: </label><br />
            <input value={updateCita.motivoCita} onChange={onChange} type="text" name="motivoCita" id="motivoCita" placeholder={cita.motivoCita} className="inputCita" />
        </div>
        <MedicoCita onMedicoChange={handleMedicoChange} />
        <PacienteCita onPacienteChange={handlePacienteChange} />
        <div>
            <label className="labelUpdateCita">Valoracion del Especialista: </label><br />
            <input value={updateCita.diagnostico.valoracionEspecialista} onChange={onChange} type="text" name="valoracionEspecialista" id="valoracionEspecialista" placeholder={cita.diagnostico.valoracionEspecialista} className="inputCita" />
        </div>
        <div>
            <label className="labelUpdateCita">Enfermedad: </label><br />
            <input value={updateCita.diagnostico.enfermedad} onChange={onChange} type="text" name="enfermedad" id="enfermedad" placeholder={cita.diagnostico.enfermedad} className="inputCita" />
        </div>
        <Link to={"/cita/"+cita.id}>
            <button className="botonActualizaCita" onClick={() => onUpdate()}>Actualizar</button>
            <button className="botonActualizaCita">Cancelar</button>
        </Link>

    </>
}

export default ActualizaCita