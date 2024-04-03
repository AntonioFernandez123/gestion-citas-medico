import React from "react";
import { useState, useEffect } from 'react';
import MainHeader from "../../Components/mainHeader/MainHeader";
import "./PacientePage.css"
import { PacienteDTO } from "../../Models/PacienteDTO";
import * as pacienteService from "../../Service/PacienteService";
import { CrearPaciente } from "./crearPaciente";
import { PacienteRequestDTO } from "../../Models/PacienteRequestDTO";
import { Link } from "react-router-dom";

const PacientePage = () => {
  interface pacienteState {
    pac: Array<PacienteDTO> | Array<PacienteRequestDTO>;
  }

  const [paciente, setPaciente] = useState<pacienteState["pac"]>([]);

  useEffect(() => {
    getListPacientes()
  }, []);

  const getListPacientes = async () => {
    const res = await pacienteService.getAllPacientes();
    console.log(res.data);
    setPaciente(res.data)
  }

  const handleBorrarPaciente = async (id:number|undefined) => {
    const confirmacion = window.confirm("¿Estás seguro de que deseas borrar este paciente?");
    if (confirmacion){
      await pacienteService.deletePaciente(id);
      const updatePacientes = paciente.filter(p => p.id !== id);
      setPaciente(updatePacientes)
    }
  }

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
                <th>Ver</th>
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
                  <td><Link to={"/paciente/" + p.id}>Ver</Link></td>
                  <td></td>
                  <td><button className="borrarPaciente" onClick={() => handleBorrarPaciente(p.id)}>Borrar</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="formPaciente">
          <CrearPaciente returnNewPaciente={(newPaciente) =>
            getListPacientes()
          } />
        </div>
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
