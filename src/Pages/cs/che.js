import React from 'react';

import Header from '../../Components/Header/Header';
import CHE from '../../Components/CHE/CHE';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';

function che(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <CHE />
      <Footer />
    </div>
  );
}

export default che;