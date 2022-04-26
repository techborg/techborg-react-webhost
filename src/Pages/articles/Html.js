import React from 'react';

import Header from '../Components/Header/Header';
import Bannerwhite from '../Components/Bannerwhite/Bannerwhite';

import Footer from '../Components/Footer/Footer';

function html(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Bannerwhite />
    
      <Footer />
    </div>
  );
}

export default html;