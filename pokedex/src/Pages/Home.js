import React, { useContext, useEffect, useState } from 'react'
import CardPokes from '../Componentes/CardPokes';
import Header from '../Componentes/Header';
import ContextoPokedex from '../Context/Context';
import { HomeStyle, PokeCard } from '../Styled/Styled'

function Home() {
  const pokemon = useContext(ContextoPokedex);

  const personalList = []

  function AddPoke(url) {
    const novaLista = ({ ...personalList.push(url) })
    console.log('personalList', personalList)
  }



  return (
    <div>
      <Header personalList={personalList} ></Header>
      <HomeStyle>
        {pokemon && pokemon.map((pokeitem) => {
          return (
            <div>
              <p>{pokeitem.name}</p>
              <CardPokes url={pokeitem.url}> </CardPokes>
              <button onClick={() => AddPoke(pokeitem.url)}> adicionar </button>
              <button>detalhes</button>
            </div>
          )
        })}
      </HomeStyle>
    </div>
  )
}

export default Home
