import { NextPage } from 'next';
import React from 'react';
import Login from '../components/Login/Index';
import Metadata from '../Helmet/Metdata';
import { Data } from '../Data/Data';

const login: NextPage = () => {
  return (
    <>
      <Metadata title={Data.Titles.Login} />
      <Login />
    </>
  );
};

export default login;
