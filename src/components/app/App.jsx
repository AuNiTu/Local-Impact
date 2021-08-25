import React from 'react';
import Header from '../constants/Header';
import Footer from '../constants/Footer';
import {
  Route,
  Switch,
  // Redirect
} from 'react-router-dom';
// import styles from './app.css';
import Home from '../Home';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route 
          path="/" 
          exact
          component={Home}
        />
        {/* <MapView /> */}
      </Switch>
      <Footer />
    </>
  );
}
