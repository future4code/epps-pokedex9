import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { PokeCard } from '../Styled/Styled';

function CardPokes(props) {
  const [pokeDetail, setPokeDetail] = useState();
  const [pokeImg, setpokeImg] = useState('')
  
  

  useEffect(() => {
    axios.get(`${props.url}`)
      .then((res) => {
        setPokeDetail(res.data)
        setpokeImg(res.data.sprites.front_default)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])



  
  
  return (
    <PokeCard>
      <img src={pokeImg}></img>
    </PokeCard>
  )
}

export default CardPokes
