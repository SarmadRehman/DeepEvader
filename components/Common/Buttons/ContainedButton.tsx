import React from 'react';

interface props {
  bg: string;
  Text: string;
  type?: string;
  event?: any;
}

const ContainedButton: React.FC<props> = ({ bg, Text, type, event }: props) => {
  return (
    <button
      onClick={event}
      className={`w-[158px] md:h-[55px] h-[46px] ${bg} rounded-[10px] font-Outfit font-bold text-[16px] leading-[20.16px] text-white hover:drop-shadow-xl transition-all duration-300 hover:scale-105`}
    >
      {Text}
    </button>
  );
};

export default ContainedButton;
