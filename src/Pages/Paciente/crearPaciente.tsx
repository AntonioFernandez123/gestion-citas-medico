import { useState } from "react"
import "./PacientePage.css"
import * as pacienteService from "../../Service/PacienteService";
import { PacienteRequestDTO } from "../../Models/PacienteRequestDTO"


interface crearPacienteProps{
    returnNewPaciente : (pac:PacienteRequestDTO) => void;
}
export const CrearPaciente : React.FC<crearPacienteProps> = ({returnNewPaciente}:crearPacienteProps) => {

    const initPaciente : PacienteRequestDTO = {
        nombre: "", apellidos: "", usuario: "", clave: "", nss: "", numTarjeta: "", telefono: "", direccion: "",id: undefined}

    const [newPaciente, setNewPaciente] =useState<PacienteRequestDTO>(initPaciente)

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewPaciente ({...newPaciente, [e.target.name]: e.target.value})
    }

    const onSave = async () => {
        const res = await pacienteService.createPaciente(newPaciente)
        returnNewPaciente(res.data)
        setNewPaciente(initPaciente)
    }

    return <>
        <h1>Insertar Paciente</h1>
            <div>
                <input value={newPaciente.nombre!} onChange={onChange} type="text" name="nombre" id="nombre" placeholder="Nombre" className="inputPaciente"/>
            </div>
            <div>
                <input value={newPaciente.apellidos} onChange={onChange} type="text" name="apellidos" id="apellidos" placeholder="Apellidos" className="inputPaciente"/>
            </div>
            <div>
                <input value={newPaciente.usuario} onChange={onChange} type="text" name="usuario" id="usuario" placeholder="Usuario" className="inputPaciente"/>
            </div>
            <div>
                <input value={newPaciente.clave} onChange={onChange} type="text" name="clave" id="clave" placeholder="Clave" className="inputPaciente"/>
            </div>
            <div>
                <input value={newPaciente.nss} onChange={onChange} type="text" name="nss" id="nss" placeholder="NSS" className="inputPaciente"/>
            </div>
            <div>
                <input value={newPaciente.numTarjeta} onChange={onChange} type="text" name="numTarjeta" id="numTarjeta" placeholder="Numero de la Tarjeta" className="inputPaciente"/>
            </div>
            <div>
                <input value={newPaciente.telefono} onChange={onChange} type="text" name="telefono" id="telefono" placeholder="Telefono" className="inputPaciente"/>
            </div>
            <div>
                <input value={newPaciente.direccion} onChange={onChange} type="text" name="direccion" id="direccion" placeholder="Direccion" className="inputPaciente"/>
            </div>
        <button onClick={() => onSave()} className="guardaPaciente">Guardar</button>
    </>
}