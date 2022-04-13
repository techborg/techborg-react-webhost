import React from 'react';

import Header from '../../Components/Header/Header';
import Bannerwhite from '../../Components/Bannerwhite/Bannerwhite';
import Footer from '../../Components/Footer/Footer';
import Careers from '../../Components/Careers/Careers';

function careers(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Bannerwhite />
      <Careers />
      <Footer />
    </div>
  );
}

export default careers;