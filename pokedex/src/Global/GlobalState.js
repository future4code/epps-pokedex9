import React, { useState } from "react";
import axios from "axios";
import GlobalStateContext from "../Context/GlobalStateContext";

const GlobalState = (props) => {
  const [pokemon, setPokemon] = useState([])
  const [PersonalList, setPersonalList] = useState([])

  const getPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/")
    .then((res) => {
      setPokemon(res.data.results)
    })
    .catch((err) => {
      console.log(err)
      window.alert("Erro get")
    })
  };

  const states = { pokemon,PersonalList };
  const setters = { setPokemon,setPersonalList };
  const requests = { getPokemon };

  const data = { states, setters, requests };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
