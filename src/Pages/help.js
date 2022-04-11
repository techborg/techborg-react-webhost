import React from 'react';

import Header from '../Components/Header/Header';
import Bannerwhite from '../Components/Bannerwhite/Bannerwhite';
import Help from '../Components/Help/Help';
import Footer from '../Components/Footer/Footer';

function help(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Bannerwhite />
      <Help />
      <Footer />
    </div>
  );
}

export default help;