import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { PokeCard } from '../Styled/Styled';


function CardPokes(props) {
  const [pokeImg, setpokeImg] = useState('')
  const [changePage, setchangePage] = useState(true);


  useEffect(() => {
    axios.get(`${props.url}`)
      .then((res) => {
        setpokeImg(res.data.sprites.front_default)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  
  return (
    <PokeCard>
      <img src={pokeImg}></img>
      <p>{props.name}</p>
      `{changePage ?
      <button onClick={props.addPoke || setchangePage(!changePage)}> adicionar </button>
      :
      <button onClick={props.removePoke || setchangePage(!changePage)}> remover </button>}`
    </PokeCard>
  )
}

export default CardPokes
