import { useParams } from "react-router";
import { MedicoRequestDTO } from "../../Models/MedicoRequestDTO"
import { useEffect, useState } from "react";
import * as medicoService from "../../Service/MedicoService";
import { Link } from "react-router-dom";


interface ActualizaMedicoProps {

}
export const ActualizaMedico: React.FC<ActualizaMedicoProps> = () => {

    const initMedico: MedicoRequestDTO = {
        nombre: "", apellidos: "", usuario: "", clave: "", numColegiado: "", id: 0
    }

    const { id } = useParams();
    const [medico, setMedico] = useState<MedicoRequestDTO>(initMedico)

    useEffect(() => {
        getMedico(parseInt(id!))
    }, [id])

    const getMedico = async (idMedico: number) => {
        const res = await medicoService.getMedicoById(idMedico);
        setMedico(res.data)
    }

    const [updateMedico, setUpdateMedico] = useState<MedicoRequestDTO>(initMedico)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdateMedico({ ...updateMedico, [e.target.name]: e.target.value })
    }

    const onUpdate = async () => {
        await medicoService.updateMedico(medico.id!, updateMedico)
    }

    return <>
        <h1 className="tituloUpdatePaciente">Modifica Medico</h1>
        <div>
            <label className="labelUpdatePaciente">Id: </label><br />
            <input value={medico?.id!} onChange={onChange} type="number" name="id" id="id" readOnly className="inputUpdatePaciente" />
        </div>
        <div>
            <label className="labelUpdatePaciente">Nombre: </label><br />
            <input value={updateMedico.nombre!} onChange={onChange} type="text" name="nombre" id="nombre" placeholder={medico.nombre} className="inputUpdatePaciente" />
        </div>
        <div>
            <label className="labelUpdatePaciente">Apellidos: </label><br />
            <input value={updateMedico.apellidos} onChange={onChange} type="text" name="apellidos" id="apellidos" placeholder={medico.apellidos} className="inputUpdatePaciente" />
        </div>
        <div>
            <label className="labelUpdatePaciente">Usuario: </label><br />
            <input value={updateMedico.usuario} onChange={onChange} type="text" name="usuario" id="usuario" placeholder={medico.usuario} className="inputUpdatePaciente" />
        </div>
        <div>
            <label className="labelUpdatePaciente">Clave: </label><br />
            <input value={updateMedico.clave} onChange={onChange} type="text" name="clave" id="clave" placeholder={medico.clave} className="inputUpdatePaciente" />
        </div>
        <div>
            <label className="labelUpdatePaciente">Numero de Colegiado: </label><br />
            <input value={updateMedico.numColegiado} onChange={onChange} type="text" name="numColegiado" id="numColegiado" placeholder={medico.numColegiado} className="inputUpdatePaciente" />
        </div>
        <Link to={"/medico"}>
            <button onClick={() => onUpdate()} className="botonUpdatePaciente">Actualiza</button>
            <button className="botonUpdatePaciente">Cancelar</button>
        </Link>
    </>
}