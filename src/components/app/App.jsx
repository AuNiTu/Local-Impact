import React from 'react';
import Header from '../constants/Header';
import Footer from '../constants/Footer';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../home/Home';
import MapView from '../arcGIS/MapView';
import About from '../home/About';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/map" exact component={MapView} />
        <Route path="/about" exact component={About} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}
