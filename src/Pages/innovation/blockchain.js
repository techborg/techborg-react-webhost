import React from 'react';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import Blockchain from '../../Components/Blockchain/Blockchain';

function blockchain(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Blockchain />
      <Footer />
    </div>
  );
}

export default blockchain;