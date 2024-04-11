import { useEffect, useState } from "react";
import { PacienteDTO } from "../../Models/PacienteDTO";
import { PacienteRequestDTO } from "../../Models/PacienteRequestDTO";
import * as pacienteService from "../../Service/PacienteService";
import { Link } from "react-router-dom";

interface PacienteCitaProps {
    onPacienteChange: (idPaciente: number) => void;
}
export const PacienteCita: React.FC<PacienteCitaProps> = ({ onPacienteChange }) => {

    interface pacienteState {
        pac: Array<PacienteDTO> | Array<PacienteRequestDTO>;
    }

    const [paciente, setPaciente] = useState<pacienteState["pac"]>([]);

    useEffect(() => {
        getListPacientes()
    }, []);

    const getListPacientes = async () => {
        const res = await pacienteService.getAllPacientes();
        console.log(res.data);
        setPaciente(res.data)
    }
    const handlePacienteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const idPaciente = parseInt(e.target.value, 10)
        onPacienteChange(idPaciente)
    }

    return <>
        <div>
            <label className="labelCita">Nombre Del Paciente</label>
            <br />
            <select className="selectCita" name="pacienteCita" id="pacienteCita" onChange={handlePacienteChange}>
                <option value="">Seleccionar Paciente</option>
                {paciente.map(p => (
                    <option value={p.id} key={p.id}>{p.nombre} {p.apellidos}</option>
                ))}
            </select>
            <Link to={"/paciente"}>Añadir Paciente</Link>
        </div>
    </>
}