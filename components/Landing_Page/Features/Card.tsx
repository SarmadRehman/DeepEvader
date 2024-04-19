import React from 'react';
import Image from 'next/image';

interface props {
  Icon: string;
  Title: string;
  color: string;
  Des: string;
  bg: string;
}

const Card: React.FC<props> = ({ Icon, Title, color, Des, bg }: props) => {
  return (
    <div
      className={`w-full h-[366px] bg-${bg} border-[1px] border-[black]/30 rounded-[10px] card-shadow flex justify-center items-center flex-col p-6`}
    >
      <Image
        src={Icon}
        alt='Logo'
        width={84}
        height={84}
        className='object-fit'
      />
      <h1
        className={`text-[30px] leading-[61px] text-${color} font-Outfit font-semibold py-2`}
      >
        {Title}
      </h1>
      <p
        className={`text-[18px] leading-[24px] text-${color} font-Outfit font-regular text-center`}
      >
        {Des}
      </p>
    </div>
  );
};

export default Card;
