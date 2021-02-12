import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalStateContext from '../Context/GlobalStateContext';
import { PokeDetailsGrid, PokeAttack, PokeImgFront, PokePowers, PokeType, PokeImgBack, LetterP, StatusInfo, PokeCardName, PokeShiny, Titles } from '../Styled/Styled'


function PokeDetails() {
  const { states, requests, setters } = useContext(GlobalStateContext);
  const [pokeInfo, setPokeInfo] = useState([])
  const [pokeImgs, setPokeImgs] = useState([])
  const [pokeName, setPokeName] = useState('')

  useEffect(() => {
    axios.get(`${states.url}`)
      .then((res) => {
        setPokeInfo(res.data)
        setPokeImgs(res.data.sprites)
        setPokeName(res.data.species.name)
        console.log('res.data', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  return (
    <PokeDetailsGrid>
      <PokeAttack>
        <StatusInfo>

          <Titles>Principais Ataques</Titles>
          {
            pokeInfo.moves &&
            pokeInfo.moves.slice(0, 5).map((item) => {
              return (
                <LetterP key={item.move.name}>{item.move.name}</LetterP>
              )
            })
          }
        </StatusInfo>
      </PokeAttack>
      <PokeCardName>
        <Titles>{pokeName}</Titles>
        <PokeImgFront src={pokeImgs.front_default} />
      </PokeCardName>
      <PokeImgBack src={pokeImgs.back_default} />
      <PokeShiny src={pokeImgs.front_shiny} />
      <PokePowers>
        <StatusInfo>
          <Titles>Status</Titles>
          {
            pokeInfo.stats &&
            pokeInfo.stats.map((item) => {
              return (
                <LetterP key={item.stat.name}>{item.stat.name}:{item.base_stat}</LetterP>
              )
            })
          }
        </StatusInfo>
      </PokePowers>
      <PokeType>
        <Titles>Tipo</Titles>
        {
          pokeInfo.types &&
          pokeInfo.types.map((item) => {
            return (
              <LetterP key={item.type.name}>{item.type.name}</LetterP>
            )
          })
        }
      </PokeType>
    </PokeDetailsGrid>
  )
}

export default PokeDetails
