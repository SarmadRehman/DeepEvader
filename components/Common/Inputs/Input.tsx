import React from 'react';
import Image from 'next/image';

interface props {
  Label: string;
  placeholder: string;
  icon: string;
  type: string;
  name: string;
  value?: any;
  Event?: (e: any) => void;
}

const Input: React.FC<props> = ({
  Label,
  placeholder,
  icon,
  type,
  name,
  value,
  Event,
}: props) => {
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
          type={type}
          name={name}
          value={value}
          onChange={Event}
          required
          placeholder={placeholder}
          className='w-[85%] font-Outfit font-regular md:text-[15px] text-[12px] md:leading-[18.9px] text-[#D9DFFF] bg-GraySecondary outline-none pl-4 placeholder:text-[#D9DFFF]'
        />
        <div className='w-[15%] flex justify-center items-center'>
          <Image src={icon} alt='mail' width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

export default Input;
