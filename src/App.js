import React from 'react';
import './App.css';
//import ComponentesFuncion from './components/ComponentesFuncion'
//import ComponentesClase from './components/ComponentesClase';
import PropsEnFunciones from './components/PropsEnFunciones';
import PropsEnClases from './components/PropsEnClases';
import ElementosyFuncionesProps from './components/ElementosyFuncionesProps';
import ElementosyClasesProps from './components/ElementosyClasesProps';
import PropsPorDefecto from './components/PropsPorDefecto'

function App() {
  return (
    <div className="App">
      {/** <ComponentesFuncion/> 
       * <ComponentesClase/>
      */}
      <PropsEnFunciones/>
      <PropsEnClases/>
      <ElementosyFuncionesProps/>
      <ElementosyClasesProps/>
      <PropsPorDefecto/>
    </div>
  );
}

export default App;
