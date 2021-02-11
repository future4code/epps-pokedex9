import React from 'react'
import { PokeDetailsGrid, PokeAttack, PokeImgFront, PokePowers, PokeType,PokeImgBack, LetterP } from '../Styled/Styled'

function PokeDetails() {
  return (
    <PokeDetailsGrid>
      <PokeAttack><LetterP>Poke ataques</LetterP> </PokeAttack>
      <PokeImgFront><LetterP>IMG1</LetterP></PokeImgFront>
      <PokeImgBack><LetterP>IMG2</LetterP></PokeImgBack>
      <PokePowers>
        <LetterP>Poderes</LetterP>
        <LetterP> hp: 60</LetterP>
        <LetterP>attack: 62</LetterP>
        <LetterP>defense: 63</LetterP>
        <LetterP>special-attack: 80</LetterP>
        <LetterP>special-defense: 80</LetterP>
        <LetterP>speed: 60</LetterP>     
      </PokePowers>
      <PokeType><LetterP>poke type</LetterP> </PokeType>
    </PokeDetailsGrid>
  )
}

export default PokeDetails
