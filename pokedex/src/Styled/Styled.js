import styled from 'styled-components'
export const MainContainer = styled.div`
display:grid;
grid-template-rows:20% 78% 2%;
background-color:#f6f6f6;
width:100%;
height:100vh;
background-color:#d4d4d3;
`
export const HeaderStyle = styled.div`
display: grid;
grid-template-columns: 15% 70% 15%;
grid-template-rows:100%;
grid-row:1;
background-color:#6F6B6A;
width:100%;
height:100%;
z-index:1000;
box-shadow: rgb(0 0 0 / 54%) 2px 2px 30px 5px;
`
export const HomeButton = styled.img`
width:65%;
height:60%;
margin:auto;
border-radius:10px;
box-shadow: 1px 3px 3px 2px rgba(0, 0, 0, 0.24), 0 0 10px rgba(0, 0, 0, 0.12);
cursor: pointer;
font-weight: 600;
padding: 5px ;
&:hover {
    background: #93908F;
    transition: all .4s ease-in-out;
}
@media (min-width:500px) and (max-width: 800px) {
  width:100%;
height:60%;
margin-left:10%;
  };
@media (max-width: 499px) {
  width:100%;
height:50%;
margin-left:20%;
  };
`
export const HeaderBanner = styled.img`
width:50%;
height:90%;
margin:auto;
border-radius:10px;

`
export const HomeStyle = styled.div`
display:grid;
grid-template-columns: repeat(4,20%);
grid-row:2;
background-color:#d4d4d3;
width:100%;
height:77vh;
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

export const ListStyle = styled.div`
display:grid;
grid-template-columns: repeat(4,25%);
grid-row:2;
background-color:#d4d4d3;
width:100%;
height:77vh;
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
max-height:10%;
border-width: 1px;
color: black;
border-top-right-radius:10px;
border-top-left-radius:10px;
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
grid-template-columns: repeat(3,25%);
grid-template-rows: repeat(3,33%);
width:100%;
height:100%;
background-color:#D4D4D3;
justify-content:center;
grid-gap:2%;
@media (min-width:800px) and (max-width: 1920px) {
  grid-template-columns: repeat(3,20%);
  };
`
export const PokeCardName = styled.div`
display:flex;
flex-direction:column;
grid-column:1;
grid-row:1;
margin-top:1em;
width:95%;
height:90%;
align-items:center;
background-color:#f6f6f6;
box-shadow: 0px 0.5px 15px gray;
border-radius:10px;
`
export const PokeImgFront = styled.img`
width:95%;
height:80%;
`
export const PokeImgBack = styled.img`
display:grid;
grid-column:1;
grid-row:2;
width:95%;
height:88%;
background-color:#f6f6f6;
box-shadow: 0px 0.5px 15px gray;
border-radius:10px;
`
export const PokeShiny = styled.img`
display:grid;
grid-column:1;
grid-row:3;
width:95%;
height:88%;
background-color:#f6f6f6;
box-shadow: 0px 0.5px 15px gray;
border-radius:10px;
`
export const PokeAttack = styled.div`
display:flex;
flex-direction:row;
grid-column:2;
grid-row:1/4;
width:95%;
height:94%;
margin-top:1em;
background-color:#f6f6f6;
box-shadow: 0px 0.5px 15px gray;
border-radius:10px;
justify-content:center;
`
export const PokePowers = styled.div`
display:flex;
flex-direction:row;
width:95%;
height:94%;
grid-column:3;
grid-row:2/4;
background-color:#f6f6f6;
box-shadow: 0px 0.5px 15px gray;
border-radius:10px;
justify-content:center;
`
export const PokeType = styled.div`
display:grid;
width:95%;
height:90%;
margin-top:1em;
grid-column:3;
grid-row:1;
background-color:#f6f6f6;
box-shadow: 0px 0.5px 15px gray;
border-radius:10px;
`
export const PokeCall = styled.div`
display:flex;
flex-wrap:wrap;
background-color:#f6f6f6; 
color: black;
border-radius: 10px;
box-shadow: 0px 0.5px 15px gray;
padding-bottom:4%;
padding-top:4%;
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
  box-shadow: 0px 0px 5px 1px #999;
  :hover {
    cursor: pointer;
  left: 9px;   
  transform: scale(1.1);
}
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
font-size:1.4vw;
background-size: 14px;
line-height:50%;
font-size:1em;
@media (min-width:500px) and (max-width: 800px) {
  font-size:1em;
  };
@media (max-width: 499px) {
  font-size:0.5em;
  };
`;
export const Titles = styled.h2`
width:95%;
color:#000;
text-align:center;
font-weight:700;
text-transform:capitalize;
margin:auto;
font-size:1.4vw;
background-size: 14px;
font-size:1em;
`;

export const StatusInfo = styled.div`
display:grid;
width:100%;
`;