
import axios from 'axios';
import './App.css';
import ContextoPokedex from './Context/Context';
import Router from './Routes/Router';
import React, { useState, useEffect } from 'react'

function App() {
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        setPokemon(res.data.results)
      })
      .catch((err) => {
        console.log(err)
        window.alert("Erro get")
      })
  }, [])

  return (
    <ContextoPokedex.Provider value={pokemon}>
      <Router />
    </ContextoPokedex.Provider>
  );
}

export default App;
