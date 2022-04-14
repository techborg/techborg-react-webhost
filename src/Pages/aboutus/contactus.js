import React from 'react';

import Header from '../../Components/Header/Header';
import Bannerwhite from '../../Components/Bannerwhite/Bannerwhite';
import Contactus from '../../Components/Contactus/Contactus';
import Footer from '../../Components/Footer/Footer';

function contactus(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Bannerwhite />
      <Contactus />
      <Footer />
    </div>
  );
}

export default contactus;