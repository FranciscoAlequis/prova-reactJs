import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navegation extends Component{
    render() {
        return(
            <div className='container'>
                <Link to='/'><h3>API DEPUTADOS</h3></Link>
                <ul>
                    <Link to='/deputados'><li>Deputados</li></Link>
                </ul>
            </div>
        );
    }
}
export default Navegation;
