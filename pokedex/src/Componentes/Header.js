import React, { useState } from 'react'
import { HeaderStyle } from '../Styled/Styled'
import { useHistory } from "react-router-dom"
import { goToPokeList, goToHome } from '../Routes/Cordinator'

function Header(props) {
  const history = useHistory()
  const [changePage, setchangePage] = useState(false);

  return (
    <HeaderStyle>
      {changePage ? <button onClick={() => goToHome(history) || setchangePage(!changePage)}> Home </button> : <button onClick={() => goToPokeList(history) || setchangePage(!changePage)}> ir pokeList</button>}
    </HeaderStyle>
  )
}

export default Header
