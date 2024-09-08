import React from 'react';
import Banner from '../components/Banner';
import Cards from '../components/Cards';

const Home = () => {
  return (
    <div className="container-fluid" >
      <Banner />
      <div style={{ marginLeft: '50px' }}>

        <Cards />
      </div>
    </div>
  );
};

export default Home;
