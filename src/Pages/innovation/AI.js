import React from 'react';

import Header from '../../Components/Header/Header';
import AI from '../../Components/AI/AI';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';

function ai(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <AI />
      <Footer />
    </div>
  );
}

export default ai;