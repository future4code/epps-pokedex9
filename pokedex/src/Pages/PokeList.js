import React, { useContext, useEffect, useState } from 'react'
import GlobalStateContext from '../Context/GlobalStateContext';
import CardPokes from '../Componentes/CardPokes'
import { ListStyle } from '../Styled/Styled';

function PokeList() {
  const { states, setters,requests } = useContext(GlobalStateContext);



  const Pokelist = states.PersonalList && states.PersonalList.map((item) => {
        return (
      <CardPokes
        key={item.url}
        name={item.name}
        url={item.url}
        removePoke={() => requests.removePoke(item)}
      />
    );
  });


  return (

    <ListStyle>
      {Pokelist}
    </ListStyle>

  )
}

export default PokeList
