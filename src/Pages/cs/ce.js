import React from 'react';

import Header from '../../Components/Header/Header';
import CE from '../../Components/CE/CE';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';

function ce(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <CE />
      <Footer />
    </div>
  );
}

export default ce;