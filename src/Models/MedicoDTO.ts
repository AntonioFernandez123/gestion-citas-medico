import { PacienteDTO } from "./PacienteDTO";
import { UsuarioDTO } from "./UsuarioDTO";

export class MedicoDTO extends UsuarioDTO{
    numColegiado : string
    pacientes : Array<PacienteDTO>

    constructor(id: number, nombre: string,apellidos:string,usuario:string,clave:string,    numColegiado:string,pacientes:Array<PacienteDTO>){
        super(nombre, apellidos, usuario, clave, id!)
        this.numColegiado = numColegiado;
        this.pacientes = pacientes;
    }
}