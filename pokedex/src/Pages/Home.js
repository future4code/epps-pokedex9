import React from 'react'
import { HomeStyle, PokeCard } from '../Styled/Styled'

function Home() {
  return (
    <HomeStyle>
      <PokeCard>
        Home
       <button> adicionar</button>
        <button> detalhes</button>
      </PokeCard>
    </HomeStyle>
  )
}

export default Home
