import React from 'react';
import PlantRoom from '../Components/PlantRoom';
import Service from '../Components/Service';
import WhyMregg from '../Components/WhyMregg';
import Articles from '../Components/Articles';
import Hero from '../Components/Hero';

const Home = () => {
  return (
    <div>
      <Hero />
      <PlantRoom />
      <Service />
      <WhyMregg />
      <Articles />
    </div>
  );
};

export default Home;
