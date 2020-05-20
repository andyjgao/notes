import React from 'react';
import NavBar from '../gatsby-theme-andy/components/NavBar';
import '../style.css';

export default () => (
  <div className="text-gray-900 flex flex-col min-h-screen h-screen">
    <div className="font-bold border-b px-4">
      <NavBar />
    </div>
    <div className="self-center align-middle">
      <h1 className="my-4">Whoops, looks like this page doesn't exist</h1>
      <img src="https://placedog.net/500?random" />
    </div>
  </div>
);
