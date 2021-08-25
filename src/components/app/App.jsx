import React from 'react';
import Header from '../constants/Header';
import Footer from '../constants/Footer';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../home/Home';
import MapView from '../arcGIS/MapView';

// eslint-disable-next-line no-unused-vars
import styles from './app.css';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/map" exact component={MapView} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}
