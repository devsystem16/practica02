import React, { Component } from 'react'
import Header from './components/Header'
import AgendarCita from './components/AgendarCita'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  guardarCita = (cita) => {
    console.log(cita)
  }

  render() {
    return (
      // Etiquetas vacias equivalen a un Fragment
      <>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-6"><h4 className="text-center">Agendar Cita</h4>
              <AgendarCita guardarCita={this.guardarCita} />
            </div>

            <div className="col-md-6"> <h4 className="text-center"> Lista de citas</h4></div>
          </div>
        </div>
      </>

    );
  }
}

export default App;