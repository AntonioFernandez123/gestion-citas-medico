import React, { useEffect, useState } from "react"
import * as pacienteService from "../../Service/PacienteService";
import { PacienteDTO } from "../../Models/PacienteDTO";
import { useParams } from "react-router";
import "./PacientePage.css"
import { Link } from "react-router-dom";

interface VerPacienteProps {

}
export const VerPaciente: React.FC<VerPacienteProps> = () => {

    const { id } = useParams();
    const [paciente, setPaciente] = useState<PacienteDTO>({ nombre: "", apellidos: "", usuario: "", clave: "", nss: "", numTarjeta: "", telefono: "", direccion: "", id: 0, medicos: [] })

    useEffect(() => {
        getPaciente(parseInt(id!))
    }, [id])

    const getPaciente = async (idPaciente: number) => {
        const res = await pacienteService.getPacienteById(idPaciente);
        setPaciente(res.data)
    }

    return <>
        <div className="verPaciente">
            <div className="datosPaciente">
                <div className="datosPersonales">
                    <fieldset>
                        <legend>Datos Personales</legend>
                        Nombre: {paciente.nombre}
                        <br />
                        Apellidos: {paciente.apellidos}
                        <br />
                        Telefono: {paciente.telefono}
                        <br />
                        Direccion: {paciente.direccion}
                    </fieldset>
                </div>
                <div className="datosTarjeta">
                    <fieldset>
                        <legend>Datos Tarjeta</legend>
                        Usuario: {paciente.usuario}
                        <br />
                        Clave: {paciente.clave}
                        <br />
                        Numero Seguridad Social (NSS): {paciente.nss}
                        <br />
                        Numero de la Tarjeta: {paciente.numTarjeta}
                    </fieldset>
                </div>
            </div>
            <div className="medicosPaciente">
                <fieldset>
                    <legend>Medicos</legend>
                    <div className="mostrarMedicoPaciente">
                        {paciente.medicos.map(m => (
                            <ul key={m.id}>ID: {m.id}
                                <li>Nombre Completo: {m.apellidos}, {m.nombre}</li>
                                <li>Usuario: {m.usuario}</li>
                            </ul>
                        ))}
                    </div>
                </fieldset>
            </div>
            <div>

            </div>
            <Link to={"/paciente"}>Volver al Listado</Link>
        </div>
    </>
}