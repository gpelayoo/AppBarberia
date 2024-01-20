import React from "react";
import '../../../css/servicios.css';
import { Link } from "react-router-dom";

const ServiciosComponent = () => {
    return (
        <div className="s-container m-5">
            <div className="s-content">
                <div className="card-wrapper">
                    <div className="card-services">
                        <div className="image-content">
                            <span className="s-overlay"></span>
                            <div className="card-image">
                                <img src="/images/Corte" alt="Corte" className="card-img" />
                            </div>
                        </div>
                        <div className="card-content">
                            <h4 className="service-name">Corte</h4>
                            <p className="s-description">Corte de cabello por $15.000</p>
                        </div>
                        <button className="btn btn-warning">
                            <Link to="/turnos/solicitar" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Solicitar
                            </Link>
                        </button>
                    </div>
                    <div className="card-services">
                        <div className="image-content">
                            <span className="s-overlay"></span>
                                <div className="card-image">
                                    <img src="/images/barba.jpg" alt="Corte y barba" className="card-img" /> 
                                </div>
                        </div>
                        <div className="card-content">
                            <h4 className="service-name">Corte + Barba</h4>
                            <p className="s-description">Corte y barba por $20.000</p>
                        </div>
                        <button className="btn btn-warning">
                            <Link to="/turnos/solicitar" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Solicitar
                            </Link>
                        </button>
                    </div>
                    <div className="card-services">
                        <div className="image-content">
                            <span className="s-overlay"></span>
                            <div className="card-image">
                                <img src="/images/cejas" alt="Cejas" className="card-img" />
                            </div>
                        </div>
                        <div class="card-content">
                            <h4 className="service-name">Cejas + Barba</h4>
                            <p className="s-description">Cejas y barba por $20.000</p>
                        </div>
                        <button className="btn btn-warning">
                            <Link to="/turnos/solicitar" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Solicitar
                            </Link>
                        </button>
                    </div>
                    <div className="card-services">
                        <div className="image-content">
                            <span className="s-overlay"></span>
                            <div className="card-image">
                                <img src="/images/completo.jpg" alt="Completo" className="card-img" />
                            </div>
                        </div>
                        <div className="card-content">
                            <h4 className="service-name">Servicio completo</h4>
                            <p className="s-description">Servicio completo por $30.000</p>
                        </div>
                        <button className="btn btn-warning">
                            <Link to="/turnos/solicitar" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Solicitar
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default ServiciosComponent;

