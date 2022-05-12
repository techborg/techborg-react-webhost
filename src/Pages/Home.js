import React from 'react';
import useWindowSize from "../useWindowSize";

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';

import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';

function Home(props) {

  const { width } = useWindowSize();
  
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      {/* <Posts /> */}
      <Footer />
    </div>
  );
}

export default Home;
 
