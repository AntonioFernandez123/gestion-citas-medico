import React from "react";
import { useState, useEffect } from 'react';

import MainHeader from "../../Components/mainHeader/MainHeader";
import "./PacientePage.css"
import { PacienteDTO } from "../../Models/PacienteDTO";


const PacientePage = () => {
  interface pacienteState {
    pac: Array<PacienteDTO>;
  }
  const [paciente, setPaciente] = useState<pacienteState["pac"]>([]);
  useEffect(() => {
    const fecthPaciente = (): Promise<PacienteDTO[]> => {
      return fetch('http://localhost:5294/api/paciente').then(response => response.json())
    }
    fecthPaciente()
      .then(paciente => {
        console.log(paciente);
        setPaciente(paciente);
      })
  }, []);

  return (
    <div>
      <MainHeader />
      <div className="divPaciente">
        <div className="tablaPaciente">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>NSS</th>
                <th>Telefono</th>
                <th>Direccion</th>
                <th>Modificar</th>
                <th>Borrar</th>
              </tr>
            </thead>
            <tbody>
              {paciente.map(p => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.nombre}</td>
                  <td>{p.apellidos}</td>
                  <td>{p.nss}</td>
                  <td>{p.telefono}</td>
                  <td>{p.direccion}</td>
                  {/* <td><button></button></td>
                  <td><button></button></td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>hola mundo</div>
      </div>

    </div>
  )
}

export default PacientePage;

/*
<th>ID</th>
<th>Nombre</th>
<th>Apellidos</th>
<th>Usuario</th>
<th>Clave</th>
<th>NSS</th>
<th>NumTarjeta</th>
<th>Telefono</th>
<th>Direccion</th>
<th>Medicos</th>
*/
