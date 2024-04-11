import { DiagnosticoDTO } from "./DiagnosticoDTO"

export class CitaDTO{
    id : number | undefined
    fechaHora : Date
    motivoCita : string
    idMedico : number
    idPaciente : number
    diagnostico :DiagnosticoDTO

    constructor(fechaHora:Date,motivoCita:string,idMedico:number,idPaciente:number,diagnostico:DiagnosticoDTO,id?:number){
        this.id = id || undefined
        this.fechaHora = fechaHora
        this.motivoCita = motivoCita
        this.idMedico = idMedico
        this.idPaciente = idPaciente
        this.diagnostico = diagnostico
    }
}