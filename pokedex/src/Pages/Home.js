import React, { useContext, useEffect } from 'react'
import CardPokes from '../Componentes/CardPokes';
import GlobalStateContext from '../Context/GlobalStateContext';
import Header from '../Componentes/Header';
import ContextoPokedex from '../Context/Context';
import { HomeStyle, PokeCard, PokeCall, ButtonSmall, PokePhoto, LetterP } from '../Styled/Styled'


function Home(props) {
  const { states, requests, setters } = useContext(GlobalStateContext);

  useEffect(() => {
    requests.getPokemon()
   }, [])

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

  const Pokelist =
    states.pokemon &&
    states.pokemon.map((item) => {
      return (
        <CardPokes
          key={item.url}
          name={item.name}
          url={item.url}
          addPoke={() => addPoke(item)}
        />
      )
    })

  return (
    <div>
       <HomeStyle>
        {Pokelist}
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
