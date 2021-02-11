import React, { useContext, useEffect, useState } from 'react'
import CardPokes from '../Componentes/CardPokes';
import Header from '../Componentes/Header';
import ContextoPokedex from '../Context/Context';
import { HomeStyle, PokeCard, PokeCall, ButtonSmall, PokePhoto, LetterP } from '../Styled/Styled'

function Home() {
  const pokemon = useContext(ContextoPokedex);

  const personalList = []

  function AddPoke(url) {
    const novaLista = ({ ...personalList.push(url) })
    console.log('personalList', personalList)
  }



  return (
    <div>
      <HomeStyle>
        {pokemon && pokemon.map((pokeitem) => {
          return (
            <div>
              <LetterP>{pokeitem.name}</LetterP>
              <PokeCard >
                <PokePhoto url={pokeitem.url}></PokePhoto>
                <PokeCall>
                  <ButtonSmall theme={{ main: "#319795" }} onClick={() => AddPoke(pokeitem.url)}> adicionar </ButtonSmall>
                  <ButtonSmall> detalhes</ButtonSmall>
                </PokeCall> 
              
              </PokeCard>
            </div>
          )
        })}
      </HomeStyle>
    </div>
  )
}

export default Home
