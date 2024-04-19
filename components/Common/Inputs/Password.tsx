import React, { useState } from 'react';
import Image from 'next/image';

interface props {
  Label: string;
  placeholder: string;
  iconShow: string;
  iconHide: string;
  name: string;
  value?: string;
  Event?: (e: any) => void;
}

const Password: React.FC<props> = ({
  Label,
  placeholder,
  iconShow,
  iconHide,
  name,
  value,
  Event,
}: props) => {
  const [Show, Hide] = useState<boolean>(false);
  return (
    <div className='w-full flex justify-center items-start flex-col '>
      <label
        className='text-[#D9DFFF] font-Outfit font-semibold md:text-[18px] text-sm md:leading-[22.68px] pl-4'
        htmlFor='Email'
      >
        {Label}
      </label>
      <div className='bg-GraySecondary w-full md:h-[64px] h-[46px] flex justify-center items-center mt-3'>
        <input
          type={Show ? 'text' : 'password'}
          name={name}
          value={value}
          onChange={Event}
          placeholder={placeholder}
          className='w-[85%] font-Outfit font-regular md:text-[15px] text-[12px] md:leading-[18.9px] text-[#D9DFFF] bg-GraySecondary outline-none pl-4 placeholder:text-[#D9DFFF]'
        />
        <div className='w-[15%] flex justify-center items-center'>
          <Image
            onClick={() => Hide(!Show)}
            src={Show ? iconHide : iconShow}
            className='cursor-pointer'
            alt='mail'
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default Password;
