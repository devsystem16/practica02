import React, { Component } from 'react'
import Header from './components/Header'
import AgendarCita from './components/AgendarCita'
import ListaCitas from './components/ListaCitas'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citas: []
    }
  }



  componentDidMount() {
    const citasDB = localStorage.getItem("cita")  ;
    if (citasDB){
      this.setState({
        citas: JSON.parse(citasDB)
      })
    }
  }

   
  componentDidUpdate() {
    localStorage.setItem("cita" , JSON.stringify(this.state.citas))
    console.log("componentDidUpdate ")
  }





  guardarCita = (cita) => {
    console.log(cita)
    this.setState({
      citas: [...this.state.citas, cita]
    })
  }


  eliminarCita = (id) => {
    let citasActual = this.state.citas.filter(arrayCitas => {
      return arrayCitas.id !== id
    })
    this.setState({
      citas: citasActual
    })
  }


  render() {
    return (
      // Etiquetas vacias equivalen a un Fragment
      <>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6"><h4 className="text-center">Agendar Cita</h4>
              <AgendarCita guardarCita={this.guardarCita} />
            </div>

            <div className="col-md-6"> <h4 className="text-center"> Lista de citas</h4>
              <ListaCitas citas={this.state.citas} eliminarCita={this.eliminarCita} />
            </div>
          </div>
        </div>
      </>

    );
  }
}

export default App;