import React from 'react'
import { HeaderStyle } from '../Styled/Styled'
import { useHistory } from "react-router-dom"
import goToPokeList from '../Routes/Cordinator'

function Header(props) {
  const history = useHistory()



  const goToPokeList = (history,props) => {
    history.push(`/poke/list/${props}`)
  }



  return (
    <HeaderStyle>
      <button onClick={() => goToPokeList(history,props.personalList)}> ir pokeList</button>
      <button> ir para pokedex</button>
    </HeaderStyle>
  )
}

export default Header
