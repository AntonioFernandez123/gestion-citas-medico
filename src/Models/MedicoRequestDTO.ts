import { UsuarioDTO } from "./UsuarioDTO";

export class MedicoRequestDTO extends UsuarioDTO{
    numColegiado : string
    

    constructor(id: number, nombre: string,apellidos:string,usuario:string,clave:string,numColegiado:string,){
        super(nombre, apellidos, usuario, clave, id!)
        this.numColegiado = numColegiado;
        
    }
}