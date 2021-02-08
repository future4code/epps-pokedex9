import React from 'react'
import { PokeDetailsGrid, PokeAttack, PokeImgFront, PokePowers, PokeType,PokeImgBack } from '../Styled/Styled'

function PokeDetails() {
  return (
    <PokeDetailsGrid>
      <PokeAttack> Poke ataques</PokeAttack>
      <PokeImgFront>IMG1</PokeImgFront>
      <PokeImgBack>IMG2</PokeImgBack>
      <PokePowers>
        Poderes
        hp: 60
        attack: 62
        defense: 63
        special-attack: 80
        special-defense: 80
        speed: 60
      </PokePowers>
      <PokeType> poke type</PokeType>
    </PokeDetailsGrid>
  )
}

export default PokeDetails
