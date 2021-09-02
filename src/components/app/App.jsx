import React from 'react';
import Header from '../constants/Header';
import Footer from '../constants/Footer';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../home/Home';
import Content from '../content/Content';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/map" exact component={Content} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}
