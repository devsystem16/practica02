import React, { Component } from 'react';
import Error from './Error'

const initialState = {
    nombreCliente: '',
    hora: '',
    fecha: '',
    temas: '',
    error: false
}

class AgendarCita extends Component {
    constructor(props) {
        super(props);
        this.state = { ...initialState }
    }


    guardarInfo = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }


    guardarFormulario = (e) => {
        e.preventDefault();
        // Validar Formulario
        const { nombreCliente , fecha , hora , temas} = this.state
        if (nombreCliente  === ''||   fecha === '' ||  hora === '' ||  temas === '' ){
                this.setState({
                 ...this, error: true
                })
        }


        // Enviar al componente padre.
        this.props.guardarCita(this.state)

    }

    render() {

        return (
            // Etiquetas vacias es igual a colocar Fragment
            <>
                <form className="form-group" onSubmit={this.guardarFormulario}>

                    {this.state.error ?  <Error mensaje="Todos los campos son  requeridos"></Error>:null}

                    <div className="form-group">
                        <label htmlFor="nombreCliente"> Nombre Cliente : </label>
                        <input type="text" className="form-control" placeholder="Ingreso nombre" name="nombreCliente" onChange={this.guardarInfo} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="hora"> Hora : </label>
                        <input type="time" className="form-control" placeholder="Ingreso nombre" name="hora" onChange={this.guardarInfo} />
                    </div>


                    <div className="form-group">
                        <label htmlFor="fecha"> Fecha : </label>
                        <input type="date" className="form-control" name="fecha" onChange={this.guardarInfo} />
                    </div>


                    <div className="form-group">
                        <label htmlFor="temas"> Temas a discutir : </label>
                        <textarea type="text" className="form-control" placeholder="temas" name="temas" onChange={this.guardarInfo} />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary" type="submit" >Guardar Cita</button>
                    </div>

                </form>
            </>
        );
    }
}
export default AgendarCita;