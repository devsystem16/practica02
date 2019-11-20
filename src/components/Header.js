import React, { Component , Fragment} from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <Fragment>
                     <header className="text-center"><h2>Agenda de citas</h2> </header> 
        </Fragment>
        
     );
    }
}
 
export default Header;