import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Time from './Componentes/Time';

function App() {

  const [colaboradores, setColaboradores] = useState('')
  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores)
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Time nome ="Programação"/>
      <Time nome ="Front-End"/>
      <Time nome ="Data Science"/>
      <Time nome ="Programação"/>
    </div>
  );
}

export default App;
