import React, { useState } from 'react';
import Image from 'next/image';
import { Link as SmoothScroll } from 'react-scroll';
import { useRouter } from 'next/router';
import { Data } from '../../../Data/Data';
import ContainedButton from '../../Common/Buttons/ContainedButton';
import { Turn as Hamburger } from 'hamburger-react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const Router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className={`w-full bg-white`}>
        <div
          className={`w-full max-w-[1320px] md:h-[130px] h-[90px] m-auto flex justify-between items-center md:px-6 px-4`}
        >
          {/* Logo */}
          {/* <div
            className={`w-full md:max-w-[150px] max-w-[80px] md:h-[130px] h-[80px] relative `}
          >
            <Image src={'/logo.svg'} alt='Logo' fill className='object-fit' />
          </div> */}
          <Link href='/' className='text-[38px] text-black-main font-semibold'>
            DeepEvader
          </Link>

          {/* Menu Items */}
          <div className={`md:flex hidden justify-center items-center gap-x-8`}>
            {Data?.NavItems.map((item: any, index: number) => {
              return item.Route ? (
                <Link
                  target={'_blank'}
                  href={item.Route}
                  className={`font-Outfit font-bold text-[16px] leading-[20.16px] text-black-main cursor-pointer hover:text-blue-main `}
                >
                  {item.Name}
                </Link>
              ) : (
                <SmoothScroll
                  key={index}
                  className={`font-Outfit font-bold text-[16px] leading-[20.16px] text-black-main cursor-pointer hover:text-blue-main `}
                  activeClass='active'
                  to={item.ScrollTo}
                  // spy={true}
                  smooth={true}
                  duration={700}
                >
                  {item.Name}
                </SmoothScroll>
              );
            })}
          </div>

          {/* Auth Button */}
          <div className={`md:flex hidden justify-center items-center gap-x-5`}>
            <Image
              src={'/Search-black-main.svg'}
              alt='Search'
              width={24}
              height={24}
              className={`cursor-pointer`}
            />
            <Link href={'/signup'}>
              <ContainedButton Text='Sign Up' bg='bg-black-tertiary' />
            </Link>
            <Link href={'/login'}>
              <ContainedButton Text='Login' bg='bg-blue-main' />
            </Link>
          </div>

          {/* Hamburger */}
          <div className='md:hidden block'>
            <Hamburger
              direction='right'
              rounded
              color='#0F1427'
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
        </div>
      </div>

      {/* Drawer */}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        style={{
          background: 'white',
        }}
      >
        <div className='w-full h-full p-6'>
          {/* Menu Items */}
          <div className={`flex justify-center items-center flex-col gap-y-8`}>
            {Data?.NavItems.map((item: any, index: number) => {
              return (
                <SmoothScroll
                  onClick={toggleDrawer}
                  key={index}
                  className={`font-Outfit font-bold text-[16px] leading-[20.16px] text-black-main cursor-pointer hover:text-blue-main `}
                  activeClass='active'
                  to={item.ScrollTo}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {item.Name}
                </SmoothScroll>
              );
            })}
          </div>
          <div className='flex justify-center items-center gap-2 flex-col mt-8'>
            <Link href={'/signup'}>
              <ContainedButton Text='Sign Up' bg='bg-black-tertiary' />
            </Link>
            <Link href={'/login'}>
              <ContainedButton Text='Login' bg='bg-blue-main' />
            </Link>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
