export class DiagnosticoDTO{
    id : number | undefined
    valoracionEspecialista :string
    enfermedad : string

    constructor(valoracionEspecialista:string,enfermedad:string,id?:number){
        this.id = id || undefined
        this.valoracionEspecialista = valoracionEspecialista
        this.enfermedad = enfermedad
    }
}