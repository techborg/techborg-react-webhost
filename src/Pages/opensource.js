import React from 'react';

import Header from '../Components/Header/Header';
import Bannerwhite from '../Components/Bannerwhite/Bannerwhite';
import opensource from '../Components/opensource/opensource';
import Footer from '../Components/Footer/Footer';

function opens(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Bannerwhite />
      <opensource />
      <Footer />
    </div>
  );
}

export default opens;