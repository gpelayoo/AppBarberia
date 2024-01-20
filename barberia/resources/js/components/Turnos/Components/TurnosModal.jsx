import React from 'react';

const TurnosModal = ({ asignedTurnos, editTurno }) => {
    return (
        <div className="modal" tabIndex="-1" id="turnos-modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header text-dark">
                        <h5 className="modal-title">Turnos del cliente</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-dark">
                        {asignedTurnos.length > 0 ? (
                            <ul>
                                {asignedTurnos.map(turno => (
                                    <li key={turno.id}>
                                        <p>Fecha del turno: {turno.date}</p>
                                        <br />
                                        <p>Hora del turno {turno.time}</p>
                                        <br />
                                        <p>Estado del turno {turno.state}</p>
                                        <button className="btn btn-primary" onClick={() => editTurno(turno)}>Editar Turno</button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div>
                                <p>No hay turnos asignados para este cliente.</p>
                            </div>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TurnosModal;
