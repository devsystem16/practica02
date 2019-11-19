import React, { Component , Fragment} from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <Fragment>
                     <header className="text-center">Agenda de citas</header> 
        </Fragment>
        
     );
    }
}
 
export default Header;