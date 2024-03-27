import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes, createBrowserRouter } from 'react-router-dom';
import HomePage from "../Pages/Home/HomePage";
import MedicoPage from "../Pages/Medico/MedicoPage";
import PacientePage from "../Pages/Paciente/PacientePage";
import CitaPage from "../Pages/Cita/CitaPage";


//Para la carga lazy en el routing 
// const LazyMedicoPage = lazy(() => import('../Pages/Medico/MedicoPage'))
// const LazyPacientePage = lazy(() => import('../Pages/Paciente/PacientePage'))
// const LazyCitaPage = lazy(() => import('../Pages/Cita/CitaPage'))

// export const router = createBrowserRouter([
//     { path: "", element: <HomePage /> },
//     { path: "medico", element: <LazyMedicoPage /> },
//     { path: "paciente", element: <LazyPacientePage /> },
//     { path: "cita", element: <LazyCitaPage /> },
// ]);

export const router = createBrowserRouter([
    { path: "", element: <HomePage /> },
    { path: "medico", element: <MedicoPage /> },
    { path: "paciente", element: <PacientePage /> },
    { path: "cita", element: <CitaPage /> },
]);



// type JSXComponent = () => JSX.Element;

// interface Routea {
//   to: string;
//   path: string;
//   name: string;
//   Component: LazyExoticComponent<JSXComponent> | JSXComponent;
// }
// export const router:Routea[] =[
//     { to: '/', path: '/', Component: LazyHomePage, name: "HomePage" },
//     { to: '/', path: '/medico', Component: LazyMedicoPage, name: "MedicoPage" },
//     { to: '/', path: '/paciente', Component: LazyPacientePage, name: "PacientePage" },
//     { to: '/', path: '/cita', Component: LazyCitaPage, name: "CitaPage" },
// ]




// export const router: React.FC = () => {
//     return (
//         <Router>
//         <Suspense fallback={<div>Loading...</div>}>
//             <Routes>
//                 <Route path="/" element={<LazyHomePage />} />
//                 <Route path="medico" element={<LazyMedicoPage />} />
//                 <Route path="paciente" element={<LazyPacientePage />} />
//                 <Route path="cita" element={<LazyCitaPage />} />
//             </Routes>
//         </Suspense>
//     </Router>
//     )
// }