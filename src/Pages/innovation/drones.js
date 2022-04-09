import React from 'react';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import Drones from '../../Components/Drones/Drones';

function drones(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Drones />
      <Footer />
    </div>
  );
}

export default drones;