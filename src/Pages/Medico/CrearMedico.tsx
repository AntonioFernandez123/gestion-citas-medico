import React, { useState } from "react";
import { MedicoRequestDTO } from "../../Models/MedicoRequestDTO";
import * as medicoService from "../../Service/MedicoService";


interface crearMedicoProps{
    returnNewMedico : (med:MedicoRequestDTO) => void;
}

export const CrearMedico : React.FC<crearMedicoProps> = ({returnNewMedico}:crearMedicoProps) => {
    const initMedico : MedicoRequestDTO = {
        nombre: "", apellidos: "", usuario: "", clave: "",numColegiado:"" ,id: undefined}

    const [newMedico, setNewMedico] =useState<MedicoRequestDTO>(initMedico)

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewMedico ({...newMedico, [e.target.name]: e.target.value})
    }

    const onSave = async () => {
        const res = await medicoService.createMedico(newMedico)
        returnNewMedico(res.data)
        setNewMedico(initMedico)
    }

    return <>
    <h1>Insertar Medico</h1>
            <div>
                <input value={newMedico.nombre!} onChange={onChange} type="text" name="nombre" id="nombre" placeholder="Nombre" className="inputPaciente"/>
            </div>
            <div>
                <input value={newMedico.apellidos} onChange={onChange} type="text" name="apellidos" id="apellidos" placeholder="Apellidos" className="inputPaciente"/>
            </div>
            <div>
                <input value={newMedico.usuario} onChange={onChange} type="text" name="usuario" id="usuario" placeholder="Usuario" className="inputPaciente"/>
            </div>
            <div>
                <input value={newMedico.clave} onChange={onChange} type="text" name="clave" id="clave" placeholder="Clave" className="inputPaciente"/>
            </div>
            <div>
                <input value={newMedico.numColegiado} onChange={onChange} type="text" name="numColegiado" id="numColegiado" placeholder="Numero de Colegiado" className="inputPaciente"/>
            </div>
        <button onClick={() => onSave()} className="guardaPaciente">Guardar</button>
    </>
}
