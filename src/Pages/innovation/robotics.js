import React from 'react';

import Header from '../../Components/Header/Header';
import Robotics from '../../Components/Robotics/Robotics';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';

function robotics(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Robotics />
      <Footer />
    </div>
  );
}

export default robotics;