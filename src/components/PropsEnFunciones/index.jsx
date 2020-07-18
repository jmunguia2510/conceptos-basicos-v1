import React from 'react';
import Persona from './Persona'

const Principal = () => {
    return (
        <div>
            <h1>Props en componentes funcionales</h1>
            <Persona nombre="Jhonatan" edad = {33} />
            <Persona nombre={"Malu"} edad = {29} />
        </div>
    );
};

export default Principal;