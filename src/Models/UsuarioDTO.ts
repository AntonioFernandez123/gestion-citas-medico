export class UsuarioDTO{
    id : number | undefined
    nombre : string
    apellidos : string
    usuario : string
    clave : string

    constructor( nombre: string,apellidos:string,usuario:string,clave:string, id?: number){
        this.id = id || undefined;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.usuario = usuario;
        this.clave = clave;
    }
}