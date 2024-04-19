import React from 'react';
import Card from './Card';
import { Data } from '../../../Data/Data';
import { Slide, Zoom } from 'react-awesome-reveal';
import Image from 'next/image';
import KeyPoints from '../KeyPoints/KeyPoints';

const Features: React.FC = () => {
  return (
    <>
      <div className={`w-full bg-OffWhite`}>
        <div
          className={`w-full max-w-[1320px] m-auto flex justify-center items-center flex-col md:px-6 px-4 py-10`}
        >
          {/* Cards */}
          <div className='w-full grid md:grid-cols-3 grid-cols-1 md:grid-rows-1 grid-rows-1 gap-8 '>
            {Data.FeaturesCard.map((item: any, index: number) => {
              return (
                <Zoom key={index}>
                  <Card
                    bg={item.bg}
                    Des={item.Des}
                    Title={item.Title}
                    color={item.color}
                    Icon={item.Icon}
                  />
                </Zoom>
              );
            })}
          </div>

          {/* Heading */}
          <Zoom cascade>
            <h1
              id='Features'
              className='md:text-[60px] md:leading-[61px] text-3xl text-blue-main font-Outfit font-semibold mt-16'
            >
              Features
            </h1>
            <h2 className='md:text-[30px] md:leading-[61px] text-lg text-black-main font-Outfit font-semibold text-center'>
              Unveil Vulnerabilities in Deepfake Detection
            </h2>
          </Zoom>

          <div
            className={`w-full flex justify-center items-center md:flex-row flex-col-reverse`}
          >
            <div className='relative md:w-[50%] w-full md:h-[467px] h-[200px] '>
              <Zoom className='w-full h-full'>
                <Image
                  src={'/features.svg'}
                  alt='Logo'
                  fill
                  className='object-fit'
                />
              </Zoom>
            </div>
            <div className='md:w-[50%] w-full flex justify-center md:items-start items-center flex-col md:pl-12 md:py-0 py-8 '>
              <Zoom>
                <h3 className='md:text-[50px] md:leading-[90px] text-[30px] text-blue-main font-Outfit font-semibold md:text-start text-center'>
                  Vulnerability Assessment
                </h3>
                <p className='text-[20px] leading-[28px] text-black-main font-Outfit font-regular md:text-start text-center'>
                  Conduct comprehensive vulnerability assessments for deepfake
                  detection systems to identify weaknesses and fortify defenses.
                </p>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
