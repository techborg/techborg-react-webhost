import React from 'react';

import Header from '../../Components/Header/Header';
import Bannerwhite from '../../Components/Bannerwhite/Bannerwhite';
import Legalinformation from '../../Components/Legalinformation/Legalinformation'
import Footer from '../../Components/Footer/Footer';

function legalinformation(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Bannerwhite />
      <Legalinformation />
      <Footer />
    </div>
  );
}

export default legalinformation;