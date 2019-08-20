import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navegation.css';

class Navegation extends Component{
    render() {
        return(
            <div className='container'>
                <Link to='/'><h3>PROVA  DEPUTADOS</h3></Link>
                <ul>
                    <Link to='/deputados'><li>DEPUTADOS</li></Link>
                </ul>
            </div>
        );
    }
}
export default Navegation;
