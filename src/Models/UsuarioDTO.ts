export class UsuarioDTO{
    id : number
    nombre : string
    apellidos : string
    usuario : string
    clave : string

    constructor(id: number, nombre: string,apellidos:string,usuario:string,clave:string){
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.usuario = usuario;
        this.clave = clave;
    }
}