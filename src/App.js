import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Time from './Componentes/Time';

function App() {
  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8fbff',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#a6d157',
      corSecundaria: '#F0f8e2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8',
    },
    {
      nome: 'Ux e Design',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf',
    },
  ]

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
      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/> )}
    </div>
  );
}

export default App
