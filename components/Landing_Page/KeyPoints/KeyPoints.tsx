import React from 'react';
import { Data } from '../../../Data/Data';
import Image from 'next/image';
import { Zoom, Slide } from 'react-awesome-reveal';

interface props {
  img: string;
  points: Array<object>;
  background: string;
  dir: string;
  color: string;
}

const KeyPoints: React.FC<props> = ({
  img,
  points,
  background,
  dir,
  color,
}: props) => {
  return (
    <div className={`w-full ${background}`}>
      <div
        className={`w-full max-w-[1320px] m-auto flex justify-center items-center ${dir} md:px-6 px-4 py-10 gap-6`}
      >
        <div className='md:w-[50%] w-full flex justify-center md:items-start items-center flex-col gap-6'>
          <Zoom>
            {points?.map((item: any, index: number) => {
              return (
                <div
                  className='w-full flex justify-center md:items-start items-center flex-col'
                  key={index}
                >
                  <h3 className='md:text-[50px] md:leading-[90px] text-[30px] text-blue-main font-Outfit font-semibold md:text-start text-center'>
                    {item.Title}
                  </h3>
                  <p
                    className={`text-[20px] leading-[28px] ${color} font-Outfit font-regular md:text-start text-center`}
                  >
                    {item.Des}
                  </p>
                </div>
              );
            })}
          </Zoom>
        </div>
        <div className='relative md:w-[50%] w-full md:h-[452px] h-[200px] '>
          <Zoom className='w-full h-full'>
            <Image src={img} alt='Laptop' fill className='object-fit' />
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default KeyPoints;
