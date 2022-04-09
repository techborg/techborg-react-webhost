import React from 'react';

import Header from '../../Components/Header/Header';

import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';

function it(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Footer />
    </div>
  );
}

export default it;