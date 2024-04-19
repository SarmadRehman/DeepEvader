import React from 'react';
import ContainedButton from '../../Common/Buttons/ContainedButton';
import Link from 'next/link';

interface props {
  pack: string;
  plan: string;
  price: string;
  features: Array<string>;
  link: string;
}

const PlanWidget: React.FC<props> = ({
  pack,
  plan,
  price,
  features,
  link,
}: props) => {
  return (
    <div className='w-full max-w-[1244px] min-h-[440px] m-auto bg-white rounded-[10px] overflow-hidden py-4 mt-10 flex justify-center items-center flex-col'>
      <h1 className='md:text-[40px] md:leading-[61px] text-2xl text-blue-main font-Outfit font-semibold'>
        {pack}
      </h1>
      <div className='w-full h-[50px] bg-black-main flex justify-center items-center mt-6 mb-10'>
        <h1 className='md:text-[40px] md:leading-[40px] text-2xl text-white font-Outfit font-semibold'>
          ${price} <span className='md:text-[26px]'>/{plan}</span>
        </h1>
      </div>
      <div className='w-full md:max-w-[90%] grid md:grid-cols-3 grid-cols-1 md:grid-rows-1 grid-rows-3 md:gap-4'>
        <div className='w-full flex justify-center items-center flex-col gap-2 '>
          {features.slice(0, 4).map((item: any, index: number) => {
            return (
              <h5
                key={index}
                className='font-Outfit font-semibold text-[20px] text-gray text-center'
              >
                {item}
              </h5>
            );
          })}
        </div>
        <div className='w-full flex justify-center items-center flex-col gap-2 md:border-0 border-b-[1px] border-t-[1px] border-gray md:my-0 my-2 md:py-0 py-4'>
          {features.slice(4, 8).map((item: any, index: number) => {
            return (
              <h5
                key={index}
                className='font-Outfit font-semibold text-[20px] text-gray text-center'
              >
                {item}
              </h5>
            );
          })}
        </div>
        <div className='w-full flex justify-center items-center flex-col gap-2 '>
          {features.slice(8, 12).map((item: any, index: number) => {
            return (
              <h5
                key={index}
                className='font-Outfit font-semibold text-[20px] text-gray text-center'
              >
                {item}
              </h5>
            );
          })}
        </div>
      </div>
      <Link className='mt-6' href={link}>
        <ContainedButton Text='Sign Up' bg='bg-blue-main' />
      </Link>
    </div>
  );
};

export default PlanWidget;
