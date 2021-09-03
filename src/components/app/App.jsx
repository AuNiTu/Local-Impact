import React from 'react';
import Header from '../constants/Header';
import Footer from '../constants/Footer';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../home/Home';
import Content from '../content/Content';
import About from '../home/About';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/map" exact component={Content} />
        <Route path="/about" exact component={About} />
        <Route path="/githubTucker" exact component={() => { window.location = 'https://github.com/Grahf0085'; return null;} }/>
        <Route path="/githubNick" exact component={() => { window.location = 'https://github.com/NickDayFSD'; return null;} }/>
        <Route path="/githubAusti" exact component={() => { window.location = 'https://github.com/austinxduong'; return null;} }/>
        <Route path="/linkedinTucker" exact component={() => { window.location = 'https://www.linkedin.com/in/tuckerhoog/'; return null;} }/>
        <Route path="/linkedinNick" exact component={() => { window.location = 'https://www.linkedin.com/in/nickdayfsd/'; return null;} }/>
        <Route path="/linkedinAusti" exact component={() => { window.location = 'https://www.linkedin.com/in/austinxduong/'; return null;} }/>


        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}
