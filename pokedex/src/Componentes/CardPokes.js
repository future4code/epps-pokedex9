import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ButtonSmall, LetterP, PokeCall, PokeCard, PokePhoto } from '../Styled/Styled';


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
      <PokeCall>
      <LetterP>{props.name}</LetterP>
      <PokePhoto src={pokeImg}></PokePhoto>
        {changePage ?
          <ButtonSmall theme={{ main: "#319795" }} onClick={props.addPoke || setchangePage(!changePage)}> Adicionar </ButtonSmall>
          :
          <ButtonSmall onClick={props.removePoke || setchangePage(!changePage)}> Remover </ButtonSmall>}
          <ButtonSmall> Detalhes </ButtonSmall>
      </PokeCall>
    </PokeCard>
  )
}

export default CardPokes
