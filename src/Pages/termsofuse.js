import React from 'react';

import Header from '../Components/Header/Header';
import Bannerwhite from '../Components/Bannerwhite/Bannerwhite';
import Termsofuse from '../Components/Termsofuse/Termsofuse';
import Footer from '../Components/Footer/Footer';

function termsofuse(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Bannerwhite />
      <Termsofuse />
      <Footer />
    </div>
  );
}

export default termsofuse;