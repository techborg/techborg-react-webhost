import React from 'react';

import Header from '../../Components/Header/Header';
import Bannerwhite from '../../Components/Bannerwhite/Bannerwhite';
import About from '../../Components/About/About'
import Footer from '../../Components/Footer/Footer';

function about(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Bannerwhite />
      <About />
      <Footer />
    </div>
  );
}

export default about;