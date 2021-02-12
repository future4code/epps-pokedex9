import styled from 'styled-components'
export const MainContainer = styled.div`
display:grid;
grid-template-rows:10% 88% 2%;
background-color:#f6f6f6;
width:100%;
height:100vh;
background-color:#d4d4d3;
`
export const HeaderStyle = styled.div`
grid-row:1;
background-color:#555251;
width:100%;
height:100%;
`
export const HomeStyle = styled.div`
display:grid;
grid-template-columns: repeat(4,20%);
grid-row:2;
background-color:#d4d4d3;
width:100%;
height:87vh;
row-gap:4%;
justify-items:center;
justify-content:center;
overflow:scroll;
overflow-x:hidden;
@media (min-width:500px) and (max-width: 800px) {
  grid-template-columns: repeat(3,30%);
  };
@media (max-width: 499px) {
  grid-template-columns: repeat(2,50%);
  };
`
export const PokeCard = styled.div`
display:flex;
flex-wrap:wrap;
margin-top:2em;
width:85%;
height:100%;
border-width: 1px;
color: black;
border-top-right-radius:10px;
border-top-left-radius:10px;
opacity: 0.7;
`
export const PokePhoto = styled.img`
display:flex;
flex-direction:row;
margin:auto;
width: 90%;
height: 85%;
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
display:flex;
flex-wrap:wrap;
background-color:#f6f6f6; 
color: black;
border-radius: 10px;
box-shadow: 0px 0.5px 15px gray;
/* justify-content:space-around; */
padding-bottom:4%;
:hover{
  cursor: pointer;
  left: 9px;   
  transform: scale(1.1);
}
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
  font-size: 0.8em;
  margin: 0.1em 0.1em;
  border-radius: 3px;
  margin:auto;
  max-width:48%;
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
margin:auto;
margin-bottom:-1em;
font-size:1.4vw;
background-size: 14px;
line-height:50%;
font-size:1em;
`;