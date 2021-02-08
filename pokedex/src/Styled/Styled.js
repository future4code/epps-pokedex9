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
background-color:red;
width:100%;
height:100%;
`

export const HomeStyle = styled.div`
display:grid;
grid-template-columns: repeat(4,1fr);
grid-row:2;
margin:auto;
background-color:blueviolet;
width:100%;
height:100%;
gap:10px;
justify-items:center;

`

export const PokeCard = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-around;
background-color:chocolate;
width:150px;
height:150px;
border:dashed;

`


export const PokeDetailsGrid = styled.div`
display:grid;
grid-template-columns: repeat(3,1fr);
grid-template-rows: repeat(3,1fr);
width:95%;
height:95%;
border:dashed;
`
export const PokeImgFront = styled.div`
display:grid;
grid-column:1;
grid-row:1;
width:95%;
height:95%;
border:dashed;
`
export const PokeImgBack = styled.div`
display:grid;
grid-column:1;
grid-row:2;
width:95%;
height:95%;
border:dashed;
`
export const PokeAttack = styled.div`
display:grid;
grid-column:2;
grid-row:1/4;
width:95%;
height:95%;
border:dashed;
`
export const PokePowers = styled.div`
display:grid;
width:95%;
height:95%;
grid-column:3;
grid-row:2/4;
border:dashed;
`

export const PokeType = styled.div`
display:grid;
width:95%;
height:95%;
grid-column:3;
grid-row:1;
border:dashed;
`
