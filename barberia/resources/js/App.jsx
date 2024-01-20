import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//Componentes de la app
import NavbarComponent from './components/Components/NavbarComponent.jsx';
import HomeComponent from './components/Home/HomeComponent.jsx';
import TurnosComponent from './components/Turnos/TurnosComponent.jsx';
import ServiciosComponent from './components/Servicios/ServiciosComponent.jsx';

const App = () => {
    return (
        <Router>
            <div>
                <NavbarComponent />
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/turnos/solicitar" element={<TurnosComponent />} />
                    <Route path="/servicios" element={<ServiciosComponent />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App

if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}