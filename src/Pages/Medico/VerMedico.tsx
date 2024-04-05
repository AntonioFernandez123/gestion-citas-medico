import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MedicoDTO } from "../../Models/MedicoDTO";
import * as medicoService from "../../Service/MedicoService";
import { Link } from "react-router-dom";


interface VerMedicoProps {

}
export const VerMedico: React.FC<VerMedicoProps> = () => {

    const { id } = useParams();
    const [medico, setMedico] = useState<MedicoDTO>({ nombre: "", apellidos: "", usuario: "", clave: "", numColegiado: "", id: 0, pacientes: [] })

    useEffect(() => {
        getMedico(parseInt(id!))
    }, [id])

    const getMedico = async (idMedico: number) => {
        const res = await medicoService.getMedicoById(idMedico);
        setMedico(res.data)
    }

    return <>
        <div className="verPaciente">
            <div className="datosPaciente">
                <div className="datosPersonales">
                    <fieldset>
                        <legend>Datos Personales</legend>
                        Nombre: {medico.nombre}
                        <br />
                        Apellidos: {medico.apellidos}                     
                    </fieldset>
                </div>
                <div className="datosTarjeta">
                    <fieldset>
                        <legend>Datos Tarjeta</legend>
                        Usuario: {medico.usuario}
                        <br />
                        Clave: {medico.clave}
                        <br />
                        Numero de Colegiado: {medico.numColegiado}
                    </fieldset>
                </div>
            </div>
            <div className="medicosPaciente">
                <fieldset>
                    <legend>Paciente</legend>
                    <div className="mostrarMedicoPaciente">
                        {medico.pacientes.map(p => (
                            <ul key={p.id}>ID: {p.id}
                                <li>Nombre Completo: {p.apellidos}, {p.nombre}</li>
                                <li>Telefono: {p.telefono}</li>
                                <li>Numero de la Seguridad Social (nss) : {p.nss}</li>
                            </ul>
                        ))}
                    </div>
                </fieldset>
            </div>
            <div>

            </div>
            <Link to={"/medico"}>Volver al Listado</Link>
        </div>
    </>
}