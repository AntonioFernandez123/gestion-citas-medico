import React, { useEffect, useState } from "react";
import { MedicoDTO } from "../../Models/MedicoDTO";
import { MedicoRequestDTO } from "../../Models/MedicoRequestDTO";
import * as medicoService from "../../Service/MedicoService";
import { Link } from "react-router-dom";

interface MedicoCitaProps {
    onMedicoChange: (idMedico: number) => void;
}

export const MedicoCita: React.FC<MedicoCitaProps> = ({ onMedicoChange }) => {

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

    const handleMedicoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const idMedico = parseInt(e.target.value, 10)
        onMedicoChange(idMedico)
    }

    return <>
        <div>
            <label className="labelCita">Nombre Del Medico</label>
            <br />
            <select className="selectCita" name="medicoCita" id="medicoCita" onChange={handleMedicoChange}>
                <option value="">Seleccionar médico</option>
                {medico.map(m => (
                    <option value={m.id} key={m.id}>{m.nombre} {m.apellidos} - {m.id}</option>
                ))}
            </select>
            <Link to={"/medico"}>Añadir Medico</Link>
        </div>
    </>
}