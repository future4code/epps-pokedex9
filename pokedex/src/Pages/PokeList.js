import React from 'react'
import { useParams } from 'react-router-dom'
import { PokeCard } from '../Styled/Styled'

function PokeList() {
  const params = useParams

  console.log('params', params)
  return (
    <div>
      <PokeCard>
        <button> adicionar</button>
        <button> detalhes</button>
      </PokeCard>
    </div>
  )
}

export default PokeList
