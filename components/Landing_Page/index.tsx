import React from 'react';
import Hero from './Hero/Hero';
import Features from './Features/Features';
import KeyPoints from './KeyPoints/KeyPoints';
import OurPlans from './OurPlans/OurPlans';

import { Data } from '../../Data/Data';

const Index: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <KeyPoints
        background={'bg-black-main'}
        points={Data.Points.Keypoints}
        img={Data.Points.img}
        dir='md:flex-row flex-col'
        color='text-white'
      />
      <KeyPoints
        background={'bg-white'}
        points={Data.HistoricData.Keypoints}
        img={Data.HistoricData.img}
        dir='md:flex-row-reverse flex-col'
        color='text-black-main'
      />
      {/* <OurPlans /> */}
    </>
  );
};

export default Index;
