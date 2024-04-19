import { NextPage } from 'next';
import React from 'react';
import SignUp from '../components/SignUp/index';
import Metadata from '../Helmet/Metdata';
import { Data } from '../Data/Data';

const login: NextPage = () => {
  return (
    <>
      <Metadata title={Data.Titles.Signup} />
      <SignUp />
    </>
  );
};

export default login;
