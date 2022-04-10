import React from 'react';

import Header from '../../Components/Header/Header';
import Bannerwhite from '../../Components/Bannerwhite/Bannerwhite';
import Company from '../../Components/Company/Company';
import Footer from '../../Components/Footer/Footer';

function company(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Bannerwhite />
      <Company />
      <Footer />
    </div>
  );
}

export default company;