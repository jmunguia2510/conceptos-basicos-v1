import React, { Component } from 'react';

class Estudiante extends Component {
    render() {
        const promedio = this.props.sumaNotas(this.props.notas)/this.props.notas.length
        return (
            <div>
                {this.props.titulo}
                <p>Mi nombre es: {this.props.nombre}</p>
                <p>Mi edad es: {this.props.edad}</p>
                <p>Mis notas son: {this.props.notas.join(", ")}</p>
                <p>Mi suma de notas es: {this.props.sumaNotas(this.props.notas)}</p>
                <p>Mi promedio es: {promedio}</p>
            </div>
        );
    }
}

export default Estudiante;