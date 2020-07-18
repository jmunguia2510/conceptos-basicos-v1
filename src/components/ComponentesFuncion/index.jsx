import React from 'react';
import FuncionTradicional from './FuncionTradicional'
import FuncionModerna from './FuncionModerna'

const ComponentesFuncion = () => {
    return (
        <>
            <h1>Componentes de tipo funcion en carpeta</h1>
            <p>Soy un parrafo del componente funcion</p>
            <FuncionTradicional/>
            <FuncionModerna/>
        </>
    );
}

export default ComponentesFuncion;