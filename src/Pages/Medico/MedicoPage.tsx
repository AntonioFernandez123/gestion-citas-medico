import React, { useEffect, useState } from "react";
import MainHeader from "../../Components/mainHeader/MainHeader";
import { MedicoDTO } from "../../Models/MedicoDTO";
import { MedicoRequestDTO } from "../../Models/MedicoRequestDTO";
import * as medicoService from "../../Service/MedicoService";
import { Link } from "react-router-dom";
import { CrearMedico } from "./CrearMedico";

const MedicoPage = () => {
    interface medicoState {
        med: Array<MedicoDTO> | Array<MedicoRequestDTO>
    }

    const [medico, setMedico] = useState<medicoState["med"]>([]);

    useEffect(() => {
        getListaMedicos()
    }, []);

    const getListaMedicos = async () => {
        const res = await medicoService.getAllMedicos();
        console.log(res.data);
        setMedico(res.data)
    }

    const handleBorrarMedico = async (id: number | undefined) => {
        const confirmacion = window.confirm("¿Estás seguro de que deseas borrar este medico?");
        if (confirmacion) {
            await medicoService.deleteMedico(id);
            const updateMedicos = medico.filter(p => p.id !== id);
            setMedico(updateMedicos)
        }
    }


    return (
        <div>
            <MainHeader />
            <div className="divPaciente">
                <div className="tablaPaciente">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Usuario</th>
                                <th>Numero Colegiado</th>
                                <th>Ver</th>
                                <th>Modificar</th>
                                <th>Borrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {medico.map(m => (
                                <tr key={m.id}>
                                    <td>{m.id}</td>
                                    <td>{m.nombre}</td>
                                    <td>{m.apellidos}</td>
                                    <td>{m.usuario}</td>
                                    <td>{m.numColegiado}</td>
                                    <td><Link to={"/medico/" + m.id}>Ver</Link></td>
                                    <td><Link to={"/medico/actualiza/" + m.id}>Modificar</Link></td>
                                    <td><button className="borrarPaciente" onClick={() => handleBorrarMedico(m.id)}>Borrar</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <br />
                    <Link to={"/"}>Volver a Inicio</Link>
                </div>
                <div className="formPaciente">
                    <CrearMedico returnNewMedico={() =>
                        getListaMedicos()
                    } />
                </div>
            </div>
        </div>
    )
}

export default MedicoPage;

