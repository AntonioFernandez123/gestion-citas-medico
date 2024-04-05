import axios from "axios"
import { MedicoDTO } from "../Models/MedicoDTO"
import { MedicoRequestDTO } from "../Models/MedicoRequestDTO"

export const getAllMedicos = async () =>{
    return axios.get<MedicoDTO[]>('http://localhost:5294/api/medico')
}

export const getMedicoById = async (idMedico:number) =>{
    return axios.get<MedicoDTO>('http://localhost:5294/api/medico/'+idMedico)
}

export const createMedico = async (newMedico:MedicoRequestDTO) => {
    return axios.post<MedicoRequestDTO>('http://localhost:5294/api/medico',newMedico)
}

export const deleteMedico = async (idMedico:number|undefined) => {
    return axios.delete<MedicoDTO>('http://localhost:5294/api/medico/'+idMedico)
}

export const updateMedico = async (idMedico:number, medico:MedicoRequestDTO) => {
    return axios.put<MedicoDTO>('http://localhost:5294/api/medico/'+idMedico, medico)
}

