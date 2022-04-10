import React from 'react';

import Header from '../../Components/Header/Header';
import Bannerwhite from '../../Components/Bannerwhite/Bannerwhite';
import Privacypolicy from '../../Components/Privacypolicy/Privacypolicy'
import Footer from '../../Components/Footer/Footer';

function privacypolicy(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Bannerwhite />
      <Privacypolicy />
      <Footer />
    </div>
  );
}

export default privacypolicy;