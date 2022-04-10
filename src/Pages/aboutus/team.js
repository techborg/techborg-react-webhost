import React from 'react';

import Header from '../../Components/Header/Header';
import Bannerwhite from '../../Components/Bannerwhite/Bannerwhite';
import Team from '../../Components/Team/Team';
import Footer from '../../Components/Footer/Footer';

function team(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Bannerwhite />
      <Team />
      <Footer />
    </div>
  );
}

export default team;