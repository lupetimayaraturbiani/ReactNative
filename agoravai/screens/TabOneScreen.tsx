import * as React from 'react';
import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import logoCinema from '../assets/images/cinema.png';
import logoCategoria from '../assets/images/theater.png';
import './style.css';

export default function TabOneScreen() {
  return (
    <div className='principal'>
      <div className="title">
          <h1>Monte sua Coletânia de Filmes!</h1>
        </div>
      <div className='home'>
        

        <div className='paragraph-1'>
          <h2>Nossa Iniciativa</h2>

          <p>
            Incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit.
                    </p>
        </div>

        {/* <button onClick={() => setCount(count + 1)}>Clicar</button>
                <p>Você clicou {count}</p> */}

        <div className='container'>
          <div className='paragraph-2'>
            <img src={logoCinema} width="100px"/>

            <h2>Filmes</h2>
            <p>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut eiusmod tempor incididunt ut labore aliquip ex ea commodo consequat.
                        </p>
          </div>

          <div className='paragraph-3'>
            <img src={logoCategoria} width="100px" />

            <h2>Categoria</h2>
            <p>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut eiusmod tempor incididunt ut labore aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


