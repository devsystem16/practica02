import React, { Component } from 'react';
import Cita from './Cita'


class ListaCitas extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        const { citas } = this.props

        // if (citas.length === 0) return ;

        return (
            <>
                <div className="row">
                    <div className="col-md-6  ">
                        {citas.map((cita, index) => (
                            <Cita key={cita.id} eliminarCita={this.props.eliminarCita} cita={cita} />
                            //  <p> {index+1}.-  {cita.nombreCliente}!</p>
                        ))}
                    </div>
                </div>

            </>

        );
    }
}

export default ListaCitas;