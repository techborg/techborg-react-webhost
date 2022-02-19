import React from 'react';
import Header2 from '../Components/Header2/Header2';
import Footer2 from '../Components/Footer2/Footer2';
import Login from '../Components/Login/Login';


function LoginPage() {
  return (
    <div className="homeParentDiv">
      <Header2 />
      <Login />
      <Footer2 />
    </div>
  );
}

export default LoginPage;
