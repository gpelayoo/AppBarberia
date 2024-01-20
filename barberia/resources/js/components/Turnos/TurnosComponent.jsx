import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import TurnosModal from './Components/TurnosModal.jsx';

const TurnosComponent = () => {
    const [turnos, setTurnos] = useState({
        document_type: '',
        document_number: '',
        name: '',
        lastname: '',
        cellphone: '',
        email: '',
        date: '',
        time: '',
        barber_name: ''
    });

    const [asignedTurnos, setAsignedTurnos] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [myModal, setMyModal] = useState(null);
    const myModalRef = useRef('#turnos-modal');

    useEffect(() => {
        setMyModal(new bootstrap.Modal(myModalRef.current, { keyboard: false }));
    }, []);

    const save = () => {
        axios.post(`/api/Turnos/save`, turnos)
            .then(res => {
                if (res.data.saved) {
                    alert('Turno asignado correctamente');
                } else {
                    alert('Ha ocurrido un error, intente de nuevo');
                }
            })
            .catch(err => {
                console.error(err);
            });
    };

    const getTurnos = async () => {
        try {
            const response = await axios.get(`/api/Turnos/getTurnos/${turnos.document_type}/${turnos.document_number}`);
            const data = response.data;

            setAsignedTurnos(data.turnos);

            if (data.turnos.some((turno) => turno.state === 'asignado')) {
                setShowForm(false);
                alert('Ya hay un turno asignado. No se puede asignar otro turno.');
            } else {
                setShowForm(true);
            }

            myModal.show();
        } catch (error) {
            console.error(error);
        }
    };

    const editTurno = (turno) => {
        setShowForm(true);
        setTurnos({
            document_type: turno.document_type,
            document_number: turno.document_number,
            name: turno.name,
            lastname: turno.lastname,
            cellphone: turno.cellphone,
            email: turno.email,
            date: turno.date,
            time: turno.time,
            barber_name: turno.barber_name
        });

        axios.post(`/api/Turnos/update/${turno.id}`)
            .then(res => {
                if (res.data.saved) {
                    alert('Turno actualizado correctamente');
                }
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <div className="card text-bg-dark m-2">
            <h5 className="card-header text-center">Solicitar turno</h5>
            <div className="card-body">
                <div style={{ display: !showForm ? 'block' : 'none' }}>
                    <div className="mb-3">
                        <label htmlFor="document_type" className="form-label">Tipo de documento</label>
                        <select className="form-select" aria-label="Default select example" id="document_type" value={turnos.document_type} onChange={(e) => setTurnos({ ...turnos, document_type: e.target.value })}>
                            <option value="1">Cédula de ciudadanía</option>
                            <option value="2">Cédula de extranjería</option>
                            <option value="3">Tarjeta de identidad</option>
                            <option value="3">Otros</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="document_number" className="form-label">Número de documento</label>
                        <input type="number" className="form-control" id="document_number" value={turnos.document_number} onChange={(e) => setTurnos({ ...turnos, document_number: e.target.value })} placeholder="Ingresa el número de identificación del cliente" />
                    </div>

                    <div className="mb-3 text-center">
                        <button type="button" className="btn btn-warning" onClick={getTurnos}>Consultar</button>
                    </div>
                </div>

                {showForm && (
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="name" value={turnos.name} onChange={(e) => setTurnos({ ...turnos, name: e.target.value })} placeholder="Ingresa el nombre del cliente" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="lastname" className="form-label">Apellido</label>
                                <input type="text" className="form-control" id="lastname" value={turnos.lastname} onChange={(e) => setTurnos({ ...turnos, lastname: e.target.value })} placeholder="Ingresa el apellido del cliente" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="cellphone" className="form-label">Celular</label>
                                <input type="text" className="form-control" id="cellphone" value={turnos.cellphone} onChange={(e) => setTurnos({ ...turnos, cellphone: e.target.value })} placeholder="Ingresa el número de celular del cliente" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Correo</label>
                                <input type="email" className="form-control" id="email" value={turnos.email} onChange={(e) => setTurnos({ ...turnos, email: e.target.value })} placeholder="Ingresa el correo del cliente" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="date" className="form-label">Fecha del turno</label>
                                <input type="date" className="form-control" id="date" value={turnos.date} onChange={(e) => setTurnos({ ...turnos, date: e.target.value })} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="time" className="form-label">Hora del turno</label>
                                <select className="form-select" aria-label="Default select example" id="time" value={turnos.time} onChange={(e) => setTurnos({ ...turnos, time: e.target.value })}>
                                    <option value="17:00 PM">17:00 PM</option>
                                    <option value="14:25 PM">14:25 PM</option>
                                    <option value="08:30 AM">08:30 AM</option>
                                    <option value="10:40 AM">10:40 AM</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="barber_name" className="form-label">Barbero</label>
                                <select className="form-select" aria-label="Default select example" id="barber_name" value={turnos.barber_name} onChange={(e) => setTurnos({ ...turnos, barber_name: e.target.value })}>
                                    <option selected>Selecciona el barbero que deseas que te atienda</option>
                                    <option value="1">Barbero 1</option>
                                    <option value="2">Barbero 2</option>
                                    <option value="3">Barbero 3</option>
                                    <option value="4">Barbero 4</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-3 text-center">
                            <button type="button" className="btn btn-warning" onClick={save}>Guardar</button>
                        </div>
                    </div>
                )}
                <TurnosModal asignedTurnos={asignedTurnos} editTurno={editTurno} myModalRef={myModalRef}></TurnosModal>
            </div>
        </div>
    );
};

export default TurnosComponent;
