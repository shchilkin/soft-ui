import Logo from '../Logo/logo';
import React, { ReactElement } from 'react';

const Header = (): ReactElement => {
  return (
    <div style={{ display: 'flex', paddingTop: '10px' }}>
      <Logo />
      <div style={{ alignSelf: 'center' }}>
        <h1 className={'header'}>
          <span className={'bold'}>Soft UI</span> - <span className={'regular'}>Open source design tool</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;