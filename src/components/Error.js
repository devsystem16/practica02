import React, { Component } from 'react';
class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="alert alert-danger"> {this.props.mensaje}</div> );
    }
}
 
export default Error;