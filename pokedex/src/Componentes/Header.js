import React from 'react'
import { HeaderStyle, Button } from '../Styled/Styled'
import { useHistory } from "react-router-dom"
import goToPokeList from '../Routes/Cordinator'

function Header(props) {
  const history = useHistory()



  const goToPokeList = (history,props) => {
    history.push(`/poke/list/${props}`)
  }



  return (
    <HeaderStyle>
      <Button onClick={() => goToPokeList(history,props.personalList)}> ir pokeList</Button>
      <Button theme={{ main: "#319795" }}> ir para pokedex</Button>
    </HeaderStyle>
  )
}

export default Header
