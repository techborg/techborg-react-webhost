import React from 'react';

import Header from '../../Components/Header/Header';

import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import Software from '../../Components/Software/Software';

function software(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Software />
      <Footer />
    </div>
  );
}

export default software;