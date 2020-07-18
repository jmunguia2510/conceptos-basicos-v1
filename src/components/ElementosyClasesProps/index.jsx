import React, { Component } from 'react';
import Estudiante from './Estudiante';

class Principal extends Component {
    render() {
        const sumaNotas = (notasAlumno) => notasAlumno.reduce((a,i) => a + i)

        return (
            <div>
                <Estudiante
                    titulo={<h2>Elementos y clases en props</h2>}
                    nombre={"Jesús"}
                    edad={35}
                    notas={[12,15,14]}
                    sumaNotas={sumaNotas}
                />
            </div>
        );
    }
}

export default Principal;