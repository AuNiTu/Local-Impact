import React from 'react';

import Header from '../constants/Header';
import Footer from '../constants/Footer';
import Map from '../arcGIS/Map';

export default function App() {
  return (
    <>
      <Header />
      <Map />
      <Footer />
    </>
  );
}
