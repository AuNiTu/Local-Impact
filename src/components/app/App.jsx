import React from 'react';

import Header from '../constants/Header';
import Footer from '../constants/Footer';
import Map from '../arcGIS/Map';

// eslint-disable-next-line no-unused-vars
import styles from './app.css';

export default function App() {
  return (
    <>
      <Header />
      <Map />
      <Footer />
    </>
  );
}
