export interface Paciente {
    id : number
    nombre : string
    apellidos : string
    usuario : string
    clave : string
    nss : string
    numTarjeta : string
    telefono : string
    direccion : string
    medicos : [
        id : number,
        nombre : string,
        apellidos : string,
        usuario : string,
        clave : string,
        numColegiado : string,
    ]
}