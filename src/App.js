import React from 'react';
import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {

  const nombre = "Emma Bostian";
  const pais = "Suecia";
  const imagen = 'emma';
  const cargo = "Ingeniera de Software en Spotify";
  const empresa = "Spotify";
  const testimonio = "Siempre me ha costado trabajo aprender Javascript";


  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freecodecamp:</h1>
        <Testimonio 
        nombre={nombre} 
        pais={pais} 
        imagen={'shawn'}
        cargo={cargo}
        empresa={empresa}
        testimonio={testimonio}
        />
         <Testimonio 
        nombre={nombre} 
        pais={pais} 
        imagen={'emma'}
        cargo={cargo}
        empresa={empresa}
        testimonio={testimonio}
        />
         <Testimonio 
        nombre={nombre} 
        pais={pais} 
        imagen={'sarah'}
        cargo={cargo}
        empresa={empresa}
        testimonio={testimonio}
        />
      </div>
    </div>
  );
}

export default App;
