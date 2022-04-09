import React from 'react';

import Header from '../../Components/Header/Header';

import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import Articles from '../../Components/Articles/Articles';

function articles(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Articles />
      <Footer />
    </div>
  );
}

export default articles;