import { MedicoDTO } from "./MedicoDTO"
import { UsuarioDTO } from "./UsuarioDTO"

export class PacienteDTO extends UsuarioDTO{
    nss : string
    numTarjeta : string
    telefono : string
    direccion : string
    medicos : Array<MedicoDTO>

    constructor(id: number, nombre: string,apellidos:string,usuario:string,clave:string,nss:string,numTarjeta:string,telefono:string,direccion:string,medicos:Array<MedicoDTO>){
        super( nombre, apellidos, usuario, clave,id!)
        this.nss = nss;
        this.numTarjeta = numTarjeta;
        this.telefono = telefono;
        this.direccion = direccion;
        this.medicos = medicos;
    }
}