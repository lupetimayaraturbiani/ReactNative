import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Cinema from '../assets/images/cinema.png';
import './style.css';


export default function TabTwoScreen() {
  const [idFilme, setIdFilme] = useState(0);
  const [filme, setFilme] = useState('');
  const [filmes, setFilmes] = useState([]);

  const [idGenero, setIdGenero] = useState(0);
  const [genero, setGenero] = useState('');
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    listar();
  }, []);

  const listar = () => {
    fetch('http://localhost:5000/api/Filmes', {
      method: 'GET',
      headers: {

        authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(dados => {
        setFilmes(dados);
        console.log('oq' + filmes)
      })
      .catch(err => console.error(err));
  }

  const salvar = () => {
    const form = {
      titulo: filme,
      genero: genero
    };

    const method = (idFilme === 0 ? 'POST' : 'PUT');
    const urlRequest = (idFilme === 0 ? 'http://localhost:5000/api/Filmes' : 'http://localhost:5000/api/Filmes/' + idFilme);

    fetch(urlRequest, {
      method: method,
      body: JSON.stringify(form),
      headers: {
        'content-type': 'application/json',
        authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(() => {
        alert('Filme cadastrado');
        setIdFilme(0);
        setFilme('');
        listar();
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    listargenero();
  }, []);

  const listargenero = () => {
    fetch('http://localhost:5000/api/Generos', {
      method: 'GET',
      headers: {
        //Bearer authentication é o token authentication, um Schema para autenticação HTTP 
        //O Bearer identifica recursos protegidos por um OAuth2.
        authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(dados => {
        setGeneros(dados);
        console.log('oq' + generos)
      })
      .catch(err => console.error(err));
  }

  return (
    <div className="listaFilmes">
      <div className="body">
        <div className="Titulo">
        <h1>Filmes</h1>
          <img className="cinema" src={Cinema}  width="100px" alt="" />
        </div>

        <div className='tabela'>
          <h2>Lista de Filmes</h2>
          <table className='table'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Filme</th>
                <th>Genero</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {
                filmes.map((item: any) => {
                  return (
                    <tr key={item.idFilme}>
                      <td>{item.idFilme}</td>
                      <td>{item.titulo}</td>
                      {/* <td>{item.genero.nome}</td> */}
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>

        <form className='form' onSubmit={event => {
          event.preventDefault();
          salvar();
        }}>
          <div className='input1'>
            <input name="filme" value={filme} onChange={e => setFilme(e.target.value)} />
          </div>

          <div className='input1'>
            <select name="genero" onChange={e => setGenero(e.target.value)} value={genero}>
              <option value="0">Selecione um Gênero</option>
              {
                generos.map((item: any) => {
                  return <option value={item.idGenero}>{item.nome}</option>
                })
              }
            </select> 
          </div>

          <div className="btn">
            <button value="Salvar" name='Salvar' />
          </div>
        </form>
      </div>
    </div>
  );
}

