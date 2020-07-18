import React from 'react';
import Soldado from './Soldado'
import SoldadoClase from './SoladoClase'

const Principal = () => {
    return (
        <div>
            <h1>Props por defecto</h1>
            <Soldado 
            fullName = {{nombre: "Jhonatan", apellido:"Munguia"}}
            mayorDeEdad={true}
            edad={33}
            />
            <SoldadoClase
            fullName={{nombre: "Jesus", apellido:"Centeno"}}
            mayorDeEdad={true}
            edad={20}
            />
        </div>
    );
};

export default Principal;