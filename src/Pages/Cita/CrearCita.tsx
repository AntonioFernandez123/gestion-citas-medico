import React, { useState } from "react";
import { CitaDTO } from "../../Models/CitaDTO";
import { DiagnosticoDTO } from "../../Models/DiagnosticoDTO";
import * as citaService from "../../Service/CitaService";
import { Link, } from "react-router-dom";
import { PacienteCita } from "./PacienteCita";
import { MedicoCita } from "./MedicoCita";

const CrearCita = () => {

// Establecemos los campos de los objetos con un valor predeterminado
    const initDiagnostico: DiagnosticoDTO = {
        valoracionEspecialista: "", enfermedad: "", id: undefined
    }
    const initCita: CitaDTO = {
        fechaHora: new Date(), motivoCita: "", idMedico: 0, idPaciente: 0, diagnostico: initDiagnostico, id: undefined
    }

    const [newCita, setNewCita] = useState<CitaDTO>(initCita)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        // onChange para poder modificar los campos de Cita
        setNewCita({ ...newCita, [e.target.name]: e.target.value })

        // onChange para poder modificar los campos de Diagnostico
        const {name , value} = e.target;
        setNewCita(prevState => ({
            ...prevState,
            diagnostico:{
                ...prevState.diagnostico,
                [name]:value
            }
        }))
    }

    // Saca el id del Medico del Select
    const handleMedicoChange = (idMedico: number) => {
        setNewCita(prevState => ({
            ...prevState,
            idMedico: idMedico
        }));
    }

    // Saca el id del Paciente del Select
    const handlePacienteChange = (idPaciente: number) => {
        setNewCita(prevState => ({
            ...prevState,
            idPaciente: idPaciente
        }));
    }

    //Guarda la Cita en la base de Datos y volvemos a inicializar el objeto como predetermindado
    const onSave = async () => {
        const fechaHoraActual  = new Date()
        setNewCita({...newCita, fechaHora:fechaHoraActual })
        await citaService.createCita(newCita)
        setNewCita(initCita)
    }

    return <>
        <div>
            <h1 className="labelCita">Crear Cita</h1>
            <div>
                <input value={newCita.motivoCita!} onChange={onChange} type="text" name="motivoCita" id="motivoCita" placeholder="Motivo de la Cita" className="inputCita" />
            </div>

            <MedicoCita onMedicoChange={handleMedicoChange}/>

            <PacienteCita onPacienteChange={handlePacienteChange}/>

            <label className="labelCita">Diagnostico</label>
            <div>
                <input value={newCita.diagnostico.valoracionEspecialista!} onChange={onChange} type="text" name="valoracionEspecialista" id="valoracionEspecialista" placeholder="Valoracion del Espicialista" className="inputCita" />
            </div>
            <div>
                <input value={newCita.diagnostico.enfermedad!} onChange={onChange} type="text" name="enfermedad" id="enfermedad" placeholder="Enfermedad" className="inputCita" />
            </div>

            <Link to={"/cita"}>
                <button onClick={() => onSave()} className="guardaCita">Guardar</button>
                <button className="guardaCita">Cancelar</button>
            </Link>
        </div>
    </>
}

export default CrearCita;