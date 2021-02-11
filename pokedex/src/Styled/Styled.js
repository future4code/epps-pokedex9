import styled from 'styled-components'

export const MainContainer = styled.div`
display:grid;
grid-template-rows:10% 90%;
background-color:#f6f6f6;
width:100vw;
height:100vh;
`

export const HeaderStyle = styled.div`
grid-row:1;
background-color:#555251;
width:99.5%;
height:100%;
`

export const HomeStyle = styled.div`
display:grid;
grid-template-columns: repeat(4,1fr);
grid-row:2;
margin:auto;
background-color:#d4d4d3;
width:99.5%;
height:330%;
gap:10px;
justify-items:center;

`

export const PokeCard = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-around;
margin-top:1em;
background-color:#f6f6f6;
width:200px;
height:230px;
border-width: 1px;
`

export const PokePhoto = styled.div`
display:flex;
flex-direction:row;
width: 200px;
height: 200px;
`
///POKEDETAILS///
export const PokeDetailsGrid = styled.div`
display:grid;
grid-template-columns: repeat(3,1fr);
grid-template-rows: repeat(3,1fr);
width:95%;
height:95%;
margin: auto;
background-color:#D4D4D3;
`
export const PokeImgFront = styled.div`
display:grid;
grid-column:1;
grid-row:1;
margin:auto;
margin-top:1em;
width:95%;
height:95%;
background-color:#f6f6f6;
`
export const PokeImgBack = styled.div`
display:grid;
grid-column:1;
grid-row:2;
width:95%;
height:95%;
margin:auto;
margin-top:1em;
background-color:#f6f6f6;
`
export const PokeAttack = styled.div`
display:grid;
grid-column:2;
grid-row:1/4;
width:95%;
height:95%;
margin-top:1em;
margin: auto;
background-color:#f6f6f6;
`
export const PokePowers = styled.div`
display:grid;
width:95%;
height:95%;
grid-column:3;
grid-row:2/4;
margin:auto;
background-color:#f6f6f6;
`

export const PokeType = styled.div`
display:grid;
width:95%;
height:85%;
margin-top:1em;
margin:auto;
grid-column:3;
grid-row:1;
background-color:#f6f6f6;
`
export const PokeCall = styled.div`
display: flex;
flex-direction:inline;
justify-content: space-around;
width: 200px;
height: 30px;
`;

export const Button = styled.button`
  font-size: 1em;
  margin: 0.7em 12em 1em 15em;
  padding: 0.20em 1em;
  border-radius: 3px;
  color:#fff;
  background-color: ${props => props.theme.main};
  border: 2.5px solid ${props => props.theme.main};
`;
  Button.defaultProps = {
    theme: {
      main: "tomato"
    }
}


export const ButtonSmall = styled.button`
  font-size: 1em;
  margin: 0.1em 0.1em;
  border-radius: 3px;
  color:#fff;
  background-color: ${props => props.theme.main};
  border: 2.5px solid ${props => props.theme.main};
`;
  ButtonSmall.defaultProps = {
    theme: {
      main: "tomato"
    }
}

export const LetterP = styled.p`
color:#000;
text-align:center;
font-weight:500;
text-transform:capitalize;
margin-bottom:-0.5em;
font-size:1.5vw;
background-size: 14px;
line-height:50%;
`;