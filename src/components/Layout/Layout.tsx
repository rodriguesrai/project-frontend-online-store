import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from '../header/header';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
