import { UsuarioDTO } from "./UsuarioDTO"


export class PacienteRequestDTO extends UsuarioDTO{
    nss : string
    numTarjeta : string
    telefono : string
    direccion : string


    constructor( nombre: string,apellidos:string,usuario:string,clave:string,nss:string,numTarjeta:string,telefono:string,direccion:string,id?: number){
        super(nombre, apellidos, usuario, clave,id!)
        this.nss = nss;
        this.numTarjeta = numTarjeta;
        this.telefono = telefono;
        this.direccion = direccion;
        }
}