import React, { useState } from 'react';
import Image from 'next/image';
import ContainedButton from '../../Common/Buttons/ContainedButton';
import { Slide, Zoom } from 'react-awesome-reveal';
import ApiCom from '../ApiCom/ApiCom';

const Hero: React.FC = () => {
  const [showApi, setShowApi] = useState(false);

  return (
    <>
      <div className={`w-full bg-white`}>
        <div
          className={`w-full max-w-[1320px] min-h-[calc(100vh-130px)] m-auto flex justify-center items-center md:flex-row flex-col-reverse gap-6 md:px-6 px-4  `}
        >
          {showApi ? (
            <ApiCom />
          ) : (
            <div className='md:w-[50%] w-full flex justify-center items-start flex-col '>
              <Slide>
                <h1 className='md:text-[60px] md:leading-[61px] text-xl text-black-main font-Outfit font-semibold'>
                  <span className='text-blue-main'>DeepEvader:</span> Uncover
                  Vulnerabilities in Deepfake Detection
                </h1>
                <p className='text-[15px] leading-[24px]] text-[#333333] font-Outfit font-[400] mb-8 mt-3'>
                  Identify weaknesses in your deepfake defense with our advanced
                  testing suite. DeepEvader is your indispensable tool for
                  uncovering vulnerabilities within deepfake detectors With
                  cutting-edge algorithms and machine learning techniques,
                  DeepEvader evaluates the robustness of detection systems
                  against diverse manipulation strategies, providing
                  comprehensive insights into the accuracy of your deepfake
                  detectors pre and post-attack
                </p>
                <div className='flex justify-center items-center gap-3'>
                  <ContainedButton
                    event={() => setShowApi(true)}
                    Text='Start '
                    bg='bg-blue-main'
                  />
                  <button className='w-[158px] font-bold text-[16px] leading-[20.16px] md:h-[55px] h-[46px] rounded-md border-[2px] border-blue-main'>
                    Upload Model
                  </button>
                </div>
              </Slide>
            </div>
          )}

          <div className='relative md:w-[50%] w-full md:h-[467px] h-[200px] '>
            <Zoom className='w-full h-full'>
              <Image
                src={'/hero.webp'}
                alt='Logo'
                fill
                className='object-fit rounded-[20px]'
              />
            </Zoom>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
