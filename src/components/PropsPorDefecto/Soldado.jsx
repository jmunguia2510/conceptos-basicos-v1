import React from 'react';

const Soldado = (props) => {
    const {fullName, mayorDeEdad, edad}= props;
    return (
        <div>
            <p>Nombre Completo: {fullName.nombre} {fullName.edad}</p>
            <p>Edad: {edad}</p>
            <p>Usted {""}
            {mayorDeEdad? "esta listo para servir" : "no esta listo para servir"}</p>
        </div>
    );
};

Soldado.defaultProps = {
    fullName:{
        nombre: "Aqui va un nombre",
        apellido: "Aqui va un apellido"
    },
    edad: 20,
    mayorDeEdad: false
}

export default Soldado;