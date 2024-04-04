import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./PacientePage.css"
import * as pacienteService from "../../Service/PacienteService";
import { PacienteRequestDTO } from "../../Models/PacienteRequestDTO";
import { Link } from "react-router-dom";

interface ActualizaPacienteProps {

}
export const ActualizaPaciente: React.FC<ActualizaPacienteProps> = () => {

    const initPaciente: PacienteRequestDTO = {
        nombre: "", apellidos: "", usuario: "", clave: "", nss: "", numTarjeta: "", telefono: "", direccion: "", id: 0
    }

    const { id } = useParams();
    const [paciente, setPaciente] = useState<PacienteRequestDTO>(initPaciente)

    useEffect(() => {
        getPaciente(parseInt(id!))
    }, [id])

    const getPaciente = async (idPaciente: number) => {
        const res = await pacienteService.getPacienteById(idPaciente);
        setPaciente(res.data)
    }

    const [updatePaciente, setUpdatePaciente] = useState<PacienteRequestDTO>(initPaciente)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdatePaciente({ ...updatePaciente, [e.target.name]: e.target.value })
    }

    const onUpdate = async () => {
        const confirmacion = window.confirm("¿Estás seguro de que deseas aztualizar este paciente?");
        if (confirmacion) {
            await pacienteService.updatePaciente(paciente.id!, updatePaciente)
        }
    }

    return <>
        <h1 className="tituloUpdatePaciente">Modifica Paciente</h1>
        <div>
            <label className="labelUpdatePaciente">Id: </label><br />
            <input value={paciente?.id!} onChange={onChange} type="number" name="id" id="id" readOnly className="updatePaciente" />
        </div>
        <div>
            <label className="labelUpdatePaciente">Nombre: </label><br />
            <input value={updatePaciente.nombre!} onChange={onChange} type="text" name="nombre" id="nombre" placeholder={paciente.nombre} className="updatePaciente" />
        </div>
        <div>
            <label className="labelUpdatePaciente">Apellidos: </label><br />
            <input value={updatePaciente.apellidos} onChange={onChange} type="text" name="apellidos" id="apellidos" placeholder={paciente.apellidos} className="updatePaciente" />
        </div>
        <div>
            <label className="labelUpdatePaciente">Usuario: </label><br />
            <input value={updatePaciente.usuario} onChange={onChange} type="text" name="usuario" id="usuario" placeholder={paciente.usuario} className="updatePaciente" />
        </div>
        <div>
            <label className="labelUpdatePaciente">Clave: </label><br />
            <input value={updatePaciente.clave} onChange={onChange} type="text" name="clave" id="clave" placeholder={paciente.clave} className="updatePaciente" />
        </div>
        <div>
            <label className="labelUpdatePaciente">Numero Seguridad Social (nss): </label><br />
            <input value={updatePaciente.nss} onChange={onChange} type="text" name="nss" id="nss" placeholder={paciente.nss} className="updatePaciente" />
        </div>
        <div>
            <label className="labelUpdatePaciente">Numero de la Tarjeta: </label><br />
            <input value={updatePaciente.numTarjeta} onChange={onChange} type="text" name="numTarjeta" id="numTarjeta" placeholder={paciente.numTarjeta} className="updatePaciente" />
        </div>
        <div>
            <label className="labelUpdatePaciente">Telefono: </label><br />
            <input value={updatePaciente.telefono} onChange={onChange} type="text" name="telefono" id="telefono" placeholder={paciente.telefono} className="updatePaciente" />
        </div>
        <div>
            <label className="labelUpdatePaciente">Direccion: </label><br />
            <input value={updatePaciente.direccion} onChange={onChange} type="text" name="direccion" id="direccion" placeholder={paciente.direccion} className="updatePaciente" />
        </div>
        <Link to={"/paciente"}>
            <button onClick={() => onUpdate()} className="actualizaPaciente">Actualiza</button>
        </Link>
    </>
}