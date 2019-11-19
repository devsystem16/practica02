import React, { Component, Fragment } from 'react'
import Header from './components/Header'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (

      <Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-6"><h4 className="text-center">Agendar Cita</h4>  </div>
            <div className="col-md-6"> <h4 className="text-center"> Lista de citas</h4></div>
          </div>
        </div>
      </Fragment>

    );
  }
}

export default App;