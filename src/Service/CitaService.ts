import axios from "axios"
import { CitaDTO } from "../Models/CitaDTO"


export const getAllCitas = async () =>{
    return axios.get<CitaDTO[]>('http://localhost:5294/api/cita')
}

export const getCitaById = async (idCita:number) =>{
    return axios.get<CitaDTO>('http://localhost:5294/api/cita/'+idCita)
}

export const createCita = async (newCita:CitaDTO) => {
    return axios.post<CitaDTO>('http://localhost:5294/api/cita',newCita)
}

export const deleteCita = async (idCita:number|undefined) => {
    return axios.delete<CitaDTO>('http://localhost:5294/api/cita/'+idCita)
}

export const updateCita = async (idCita:number, cita:CitaDTO) => {
    return axios.put<CitaDTO>('http://localhost:5294/api/cita/'+idCita, cita)
}