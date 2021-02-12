import React, { useContext, useEffect } from 'react'
import CardPokes from '../Componentes/CardPokes';
import GlobalStateContext from '../Context/GlobalStateContext';
import { HomeStyle} from '../Styled/Styled'


function Home(props) {
  const { states, requests } = useContext(GlobalStateContext);

  useEffect(() => {
    requests.getPokemon()
   }, [])

   const Pokelist =
   states.pokemon &&
   states.pokemon.map((item) => {
     return (
       <CardPokes
       key={item.url}
       name={item.name}
       url={item.url}
       addPoke={() => requests.addPoke(item)}
       />
       )
     })
   return (
    <div>
       <HomeStyle>
        {Pokelist}
      </HomeStyle>
        <div style={{backgroundColor:'#d4d4d3', height:'20px'}}></div>
    </div>    
  )
}

export default Home
