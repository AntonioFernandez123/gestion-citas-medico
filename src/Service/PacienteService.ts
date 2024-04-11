import { PacienteDTO } from "../Models/PacienteDTO"
import axios from "axios"
import { PacienteRequestDTO } from "../Models/PacienteRequestDTO"

export const getAllPacientes = async () =>{
    return axios.get<PacienteDTO[]>('http://localhost:5294/api/paciente')
}

export const getPacienteById = async (idPaciente:number) =>{
    return axios.get<PacienteDTO>('http://localhost:5294/api/paciente/'+idPaciente)
}

export const createPaciente = async (newPaciente:PacienteRequestDTO) => {
    return axios.post<PacienteRequestDTO>('http://localhost:5294/api/paciente',newPaciente)
}

export const deletePaciente = async (idPaciente:number|undefined) => {
    return axios.delete<PacienteDTO>('http://localhost:5294/api/paciente/'+idPaciente)
}

export const updatePaciente = async (idPaciente:number, paciente:PacienteRequestDTO) => {
    return axios.put<PacienteDTO>('http://localhost:5294/api/paciente/'+idPaciente, paciente)
}