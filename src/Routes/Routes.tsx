import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, createBrowserRouter } from 'react-router-dom';
import HomePage from "../Pages/Home/HomePage";
import { VerPaciente } from "../Pages/Paciente/VerPaciente";
import { ActualizaPaciente } from "../Pages/Paciente/ActualizaPaciente";
import "../Pages/Paciente/PacientePage.css"
import { VerMedico } from "../Pages/Medico/VerMedico";
import { ActualizaMedico } from "../Pages/Medico/ActualizaMedico";
import CrearCita from "../Pages/Cita/CrearCita";
import VerCita from "../Pages/Cita/VerCita";
import ActualizaCita from "../Pages/Cita/ActualizaCita";

// Para la carga lazy en el routing 
const LazyMedicoPage = lazy(() => import('../Pages/Medico/MedicoPage'))
const LazyPacientePage = lazy(() => import('../Pages/Paciente/PacientePage'))
const LazyCitaPage = lazy(() => import('../Pages/Cita/CitaPage'))

export const router = createBrowserRouter([
    // Ruta Home
    { path: "", element: <HomePage /> },

    // Ruta Medico
    { path: "medico", element: (
        <Suspense fallback={<div>Loading...</div>}>
            <LazyMedicoPage />
        </Suspense>
    ) },
    { path: "medico/:id", element: <VerMedico />},
    { path: "medico/actualiza/:id", element: <ActualizaMedico />},

    // Ruta Paciente
    { path: "paciente", element: (
        <Suspense fallback={<div>Loading...</div>}>
            <LazyPacientePage />
        </Suspense>
    ) },
    { path: "paciente/:id", element: <VerPaciente />},
    { path: "paciente/actualiza/:id", element: <ActualizaPaciente />},

    // Ruta Cita
    { path: "cita", element:(
        <Suspense fallback={<div>Loading...</div>}>
            <LazyCitaPage />
        </Suspense>
    ) },
    { path: "cita/:id", element: <VerCita />},
    { path: "cita/crear", element: <CrearCita />},
    { path: "cita/actualiza/:id", element: <ActualizaCita />},
]);


// export const router = createBrowserRouter([
//     { path: "", element: <HomePage /> },
//     { path: "medico", element: <MedicoPage /> },
//     { path: "paciente", element: <PacientePage /> },
//     { path: "paciente/:id", element: <VerPaciente />},
//     { path: "paciente/actualiza/:id", element: <ActualizaPaciente />},
//     { path: "cita", element: <CitaPage /> },
// ]);