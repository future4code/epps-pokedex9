import React, { useState } from 'react'
import { HeaderStyle,HeaderBanner,HomeButton } from '../Styled/Styled'
import { useHistory } from "react-router-dom"
import { goToPokeList, goToHome } from '../Routes/Cordinator'

function Header(props) {
  const history = useHistory()
  const [changePage, setchangePage] = useState(false);

  return (
    <HeaderStyle>
      {changePage ? <HomeButton src='https://cdn.bulbagarden.net/upload/0/01/Pok%C3%A9mon_HOME_logo.png' onClick={() => goToHome(history) || setchangePage(!changePage)}/> : <HomeButton src='https://imgur.com/ZzBVedD.png' onClick={() => goToPokeList(history) || setchangePage(!changePage)}/>}
      
      <HeaderBanner src='https://i.imgur.com/rSf8855.png'/>
    </HeaderStyle>
  )
}

export default Header
