import React from 'react';

import Header from '../../Components/Header/Header';

import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import IT from '../../Components/IT/IT';

function it(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <IT />
      <Footer />
    </div>
  );
}

export default it;