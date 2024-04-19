import type { NextPage } from 'next';
import LandingPage from '../components/Landing_Page/index';
import Metadata from '../Helmet/Metdata';
import { Data } from '../Data/Data';

const Home: NextPage = () => {
  return (
    <>
      <Metadata title={Data.Titles.Home} />
      <LandingPage />
    </>
  );
};

export default Home;
