import React, { Component } from 'react';

class Personap extends Component {
    render() {
        const {nombre, edad} = this.props
        return (
            <div>
                <p>Mi nombre es: <strong>{nombre}</strong></p>
                <p>Mi edad es: <strong>{edad}</strong></p>
            </div>
        );
    }
}

export default Personap;