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
import { useApiData } from '../../../Hooks/useDataProvider';

const Navbar: React.FC = () => {
  const { CurrentStock, setCurrentStock } = useApiData();
  const Router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const SetDropParentColor = () => {
    if (
      Router.pathname === '/finance/balance' ||
      Router.pathname === '/finance/statement' ||
      Router.pathname === '/finance/cashflow'
    ) {
      return true;
    } else {
      false;
    }
  };

  const MenuItems = [
    {
      Name: 'Dashboard',
      Route: `/quotes/overview/${CurrentStock}`,
    },
    {
      Name: 'History',
      Route: `/quotes/history/${CurrentStock}`,
    },
    {
      Name: 'Watchlist',
      Route: '/watchlist',
    },
    {
      Name: 'Insiders',
      Route: '/insiders',
    },
    {
      Name: 'Scanner',
      Route: '/scanner',
    },
    {
      Name: 'Filling',
      Route: '/scanner/filling',
    },
    {
      Name: 'Finance',
      Route: '/finance',
    },
  ];

  return (
    <>
      <div className={`w-full bg-black-cool`}>
        <div
          className={`w-full md:h-[80px] h-[70px] m-auto flex justify-between items-center md:px-8 px-4`}
        >
          {/* Logo */}
          <Link href={'/'}>
            <div className={`w-[60px] h-[60px] relative `}>
              <Image
                src={'/logo.png'}
                alt='Logo'
                fill
                className='object-contain'
              />
            </div>
          </Link>

          {/* Menu Items */}
          <div className={`md:flex hidden justify-center items-center gap-x-8`}>
            {MenuItems?.map((item: any, index: number) => {
              return (
                <Link
                  key={index}
                  className={`font-Outfit font-medium text-[16px] leading-[20.16px] ${
                    Router.pathname === item.Route
                      ? 'text-blue-main'
                      : 'text-white'
                  } cursor-pointer hover:text-blue-main `}
                  href={item.Route}
                >
                  {item.Name}
                </Link>
              );
            })}
          </div>

          {/* Hamburger */}
          <div className='md:hidden block'>
            <Hamburger
              direction='right'
              rounded
              color='white'
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
        <div className='w-full h-full p-6 bg-black-cool'>
          {/* Menu Items */}
          <div className={`flex justify-center items-center flex-col gap-y-8`}>
            {MenuItems?.map((item: any, index: number) => {
              return (
                <Link
                  onClick={toggleDrawer}
                  key={index}
                  className={`font-Outfit font-medium text-[16px] leading-[20.16px] ${
                    Router.pathname === item.Route
                      ? 'text-blue-main'
                      : 'text-white'
                  } cursor-pointer hover:text-blue-main `}
                  href={item.Route}
                >
                  {item.Name}
                </Link>
              );
            })}
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
