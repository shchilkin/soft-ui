import React from 'react';

const Logo = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 173 173"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-4"
  >
    <path
      d="M144.085 57.385C144.085 41.433 131.134 28.481 115.181 28.481H57.373C41.421 28.481 28.47 41.433 28.47 57.385V115.193C28.47 131.145 41.421 144.097 57.373 144.097H115.181C131.134 144.097 144.085 131.145 144.085 115.193V57.385Z"
      fill="currentColor"
    />
  </svg>
);

const Header = () => {
  return (
    <header className="flex items-center p-6 w-full max-w-7xl mx-auto">
      <Logo />
      <div>
        <h1 className="text-3xl font-bold m-0 leading-tight">Soft UI</h1>
        <h2 className="text-sm font-normal m-0 opacity-80">An open-source design tool</h2>
      </div>
    </header>
  );
};

export default Header;
