import React, { useState } from "react";
import axios from "axios";
import GlobalStateContext from "../Context/GlobalStateContext";
import CardPokes from "../Componentes/CardPokes";

const GlobalState = (props) => {
  const [pokemon, setPokemon] = useState([])
  const [PersonalList, setPersonalList] = useState([])
  const [url, setUrl] = useState('')
 
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
 
  const removePoke = (itemToRemove) => {
    const index = states.PersonalList.findIndex((i) => i.name === itemToRemove.name);
    let newList = [...states.PersonalList];
    if (newList[index].amount === 1) {
      newList.splice(index, 1);
    } else {
      newList[index].amount -= 1;
    }
    setters.setPersonalList(newList);
  };

  
  const addPoke = (newItem) => {
    const index = states.PersonalList.findIndex((i) => i.name === newItem.name);
    let newList = [...states.PersonalList];
    
    if (index === -1) {
      newList.push({ ...newItem, amount: 1 });
      alert(`${newItem.name} foi adicionado ao seu time!`);
    }
    else {
      alert(`${newItem.name} Já Faz parte do seu time`);
    }
    setters.setPersonalList(newList)
  }
  

    const states = {pokemon,PersonalList,url };
    const setters = { setPokemon,setPersonalList,setUrl };
    const requests = { getPokemon,removePoke,addPoke };
    const data = { states, setters, requests };
    
    return (
      <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
