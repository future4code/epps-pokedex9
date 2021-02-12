import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from '../Componentes/Header';
import Home from '../Pages/Home';
import PokeDetails from '../Pages/PokeDetails';
import PokeList from '../Pages/PokeList';
import {MainContainer}  from '../Styled/Styled'

function router() {
  return (
    < MainContainer>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/poke/list">
            <PokeList />
          </Route>
          <Route exact path='/poke/details/'>
            <PokeDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </ MainContainer>
  );
}
export default router;