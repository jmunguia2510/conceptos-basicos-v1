import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SoldadoClase extends Component {
    render() {
        const {fullName, edad, mayorDeEdad} = this.props
        return (
            <div>
                <p>Nombre Completo: {fullName.nombre} {fullName.edad}</p>
                <p>Edad: {edad}</p>
                <p>Usted {""}
                {mayorDeEdad? "esta listo para servir" : "no esta listo para servir"}</p>
            </div>
        );
    }
}

export default SoldadoClase;