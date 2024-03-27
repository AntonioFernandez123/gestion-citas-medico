import React, { LazyExoticComponent, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, createBrowserRouter } from 'react-router-dom';
import HomePage from "../Pages/Home/HomePage";
import MedicoPage from "../Pages/Medico/MedicoPage";
import PacientePage from "../Pages/Paciente/PacientePage";
import CitaPage from "../Pages/Cita/CitaPage";

// const LazyHomePage = lazy(() => import('../Pages/Home/HomePage'))
// const LazyMedicoPage = React.lazy(() => import('../Pages/Medico/MedicoPage'))
// const LazyPacientePage = React.lazy(() => import('../Pages/Paciente/PacientePage'))
// const LazyCitaPage = React.lazy(() => import('../Pages/Cita/CitaPage'))


// type JSXComponent = () => JSX.Element;

// interface Route {
//   to: string;
//   path: string;
//   name: string;
//   Component: LazyExoticComponent<JSXComponent> | JSXComponent;
// }
// export const router: Route[] = [
//     { to: '/', path: '/', Component: LazyHomePage, name: "HomePage" },
// ]


export const router = createBrowserRouter([
    { path: "", element: <HomePage />, errorElement: "404 Not Found" },
    { path: "medico", element: <MedicoPage /> },
    { path: "paciente", element: <PacientePage /> },
    { path: "cita", element: <CitaPage /> },
]);


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