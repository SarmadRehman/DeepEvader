import React, { ReactNode, useEffect, useState, createContext } from 'react';
import Navbar from '../Global/Navigations/Navbar';
import Footer from '../Global/Footer/Footer';
import StatsNavbar from '../Global/Navigations/StatsNavbar';
import { useRouter } from 'next/router';

interface Props {
  children?: ReactNode;
}

interface context {
  IsUserLoggedIn: boolean;
  SetUserLogged: (state: boolean) => void;
}

export const AuthContext = React.createContext<context | null>(null);

export default function Layout({ children }: Props) {
  // Auth State
  const [IsUserLoggedIn, SetUserLogged] = useState<boolean>(true);

  const Router = useRouter();
  const [IsHomepage, Set_Homepage] = useState<boolean>(true);

  const CheckAuthAndRenderNavigation = () => {
    if (IsHomepage) return <Navbar />;
    else if (!IsHomepage && IsUserLoggedIn) return <StatsNavbar />;
    else Router.push('/');
  };

  useEffect(() => {
    if (!Router.isReady) return;
    else {
      if (Router.pathname === '/') Set_Homepage(true);
      else Set_Homepage(false);
    }
  }, [Router.pathname, Router.isReady]);

  return (
    <AuthContext.Provider
      value={{
        IsUserLoggedIn,
        SetUserLogged,
      }}
    >
      {CheckAuthAndRenderNavigation()}
      <main>{children}</main>
      {IsHomepage && <Footer />}
    </AuthContext.Provider>
  );
}
