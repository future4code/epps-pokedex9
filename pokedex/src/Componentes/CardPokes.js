import axios from 'axios';
import { useHistory } from "react-router-dom"
import { goToPokeDetails } from '../Routes/Cordinator'
import React, { useContext, useEffect, useState } from 'react'
import { ButtonSmall, LetterP, PokeCall, PokeCard, PokePhoto } from '../Styled/Styled';
import GlobalStateContext from '../Context/GlobalStateContext';

function CardPokes(props) {
  const { states, requests, setters } = useContext(GlobalStateContext);
  const history = useHistory()
  const [pokeImg, setpokeImg] = useState('')
  const [changePage, setchangePage] = useState(true);
  const id = props.url
  
  useEffect(() => {
    axios.get(`${id}`)
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
        <ButtonSmall onClick={() => goToPokeDetails(history, id)|| setters.setUrl(id)}> Detalhes </ButtonSmall>
    </PokeCall>
    </PokeCard>
  )
}

export default CardPokes
