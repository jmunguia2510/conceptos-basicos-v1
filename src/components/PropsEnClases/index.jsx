import React, { Component } from 'react';
import Persona from './Persona'

class Principal extends Component {
    render() {
        return (
            <div>
                <h1>Props en componentes tipo clases</h1>
                <Persona nombre="Jhonatan" edad={33}/>
                <Persona nombre="Malu" edad={28}/>
            </div>
        );
    }
}

export default Principal;