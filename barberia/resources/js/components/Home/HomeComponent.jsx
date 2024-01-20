import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const HomeComponent = () => {
    return (
        <div id="slider-home" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                    <img src="/images/2.jpg" className="d-block w-100" alt="barber_image" />
                    <div className="carousel-caption d-none d-md-block text-dark bg-white">
                        <h5>Sobre nosotros</h5>
                        <p>
                        ¡Bienvenidos a nuestra barbería! Somos un equipo de barberos apasionados y comprometidos en ofrecerte un servicio de primera calidad.
                        <br />
                        Nuestro objetivo es que te sientas renovado y con un estilo impecable cada vez que nos visites.
                        <br />
                        Utilizamos las últimas tendencias y técnicas de barbería para asegurarnos de que salgas luciendo y sintiéndote confiado.
                        </p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src="/images/1.jpg" className="d-block w-100" alt="barber_image" />
                    <div className="carousel-caption d-none d-md-block text-dark bg-white">
                        <h5>Sobre nosotros</h5>
                        <p>
                        ¡Bienvenidos a nuestra barbería! Somos un equipo de barberos apasionados y comprometidos en ofrecerte un servicio de primera calidad.
                        <br />
                        Nuestro objetivo es que te sientas renovado y con un estilo impecable cada vez que nos visites.
                        <br />
                        Utilizamos las últimas tendencias y técnicas de barbería para asegurarnos de que salgas luciendo y sintiéndote confiado.
                        </p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src="/images/3.jpg" className="d-block w-100" alt="barber_image" />
                    <div className="carousel-caption d-none d-md-block text-dark bg-white">
                        <h5>Sobre nosotros</h5>
                        <p>
                        ¡Bienvenidos a nuestra barbería! Somos un equipo de barberos apasionados y comprometidos en ofrecerte un servicio de primera calidad.
                        <br />
                        Nuestro objetivo es que te sientas renovado y con un estilo impecable cada vez que nos visites.
                        <br />
                        Utilizamos las últimas tendencias y técnicas de barbería para asegurarnos de que salgas luciendo y sintiéndote confiado.
                        </p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src="/images/4.png" className="d-block w-100" alt="barber_image" />
                    <div className="carousel-caption d-none d-md-block text-dark bg-white">
                        <h5>Sobre nosotros</h5>
                        <p>
                        ¡Bienvenidos a nuestra barbería! Somos un equipo de barberos apasionados y comprometidos en ofrecerte un servicio de primera calidad.
                        <br />
                        Nuestro objetivo es que te sientas renovado y con un estilo impecable cada vez que nos visites.
                        <br />
                        Utilizamos las últimas tendencias y técnicas de barbería para asegurarnos de que salgas luciendo y sintiéndote confiado.
                        </p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src="/images/5.jpg" className="d-block w-100" alt="barber_image" />
                    <div className="carousel-caption d-none d-md-block text-dark bg-white">
                        <h5>Sobre nosotros</h5>
                        <p>
                        ¡Bienvenidos a nuestra barbería! Somos un equipo de barberos apasionados y comprometidos en ofrecerte un servicio de primera calidad.
                        <br />
                        Nuestro objetivo es que te sientas renovado y con un estilo impecable cada vez que nos visites.
                        <br />
                        Utilizamos las últimas tendencias y técnicas de barbería para asegurarnos de que salgas luciendo y sintiéndote confiado.
                        </p>
                    </div>
                </div>
                
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default HomeComponent
