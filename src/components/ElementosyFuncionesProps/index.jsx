import React from 'react';
import Estudiante from './Estudiante'

const Principal = () => {
    const sumaNotas = (notasAlumno) => notasAlumno.reduce((a,i) => a + i);
    return (
        <div>
            <h1>Elementos y funciones como props</h1>
            <Estudiante 
                titulo={<h2>Soy el componente Estudiante</h2>}
                nombre="Jhonatan"
                notas={[10,16,11]}
                suma={sumaNotas}
            />
        </div>
    );
};

export default Principal;