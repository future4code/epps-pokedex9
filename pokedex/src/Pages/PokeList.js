import React, { useContext, useEffect, useState } from 'react'
import GlobalStateContext from '../Context/GlobalStateContext';
import CardPokes from '../Componentes/CardPokes'

function PokeList(props) {
  const { states, setters } = useContext(GlobalStateContext);




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


  const Pokelist = states.PersonalList && states.PersonalList.map((item) => {
    return (
      <CardPokes
        key={item.url}
        name={item.name}
        url={item.url}
        removePoke={() => removePoke(item)}
      />
    );
  });


  return (

    <div>
      {Pokelist}
    </div>

  )
}

export default PokeList
