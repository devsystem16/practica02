import React, { Component } from 'react';
class Cita extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    
    render() {
        const { cita } = this.props;
        return (


            <div className="card m-3 p-3">
                <div className="card-body">
                     <p>Id : <span>{cita.id}</span> </p>
                    <p>Nombre Cliente: <span>{cita.nombreCliente}</span> </p>
                    <p>Fecha: <span>{cita.fecha}</span> </p>
                    <p>Hora: <span>{cita.hora}</span> </p>
                    <p>Temas: <span>{cita.temas}</span> </p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-danger" onClick={ () => this.props.eliminarCita(cita.id)}>Eliminar</button>
                </div>
            </div>

        );
    }
}

export default Cita;