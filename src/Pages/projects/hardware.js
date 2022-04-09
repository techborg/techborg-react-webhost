import React from 'react';

import Header from '../../Components/Header/Header';
import Hardware from '../../Components/Hardware/Hardware';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';

function hardware(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Hardware />
      <Footer />
    </div>
  );
}

export default hardware;