import Logo from '../Logo/logo';
import React, { ReactElement } from 'react';

const Header = (): ReactElement => {
  return (
    <div style={{ display: 'flex', height: '100px', paddingTop: '10px' }}>
      <Logo />
      <div style={{ alignSelf: 'center' }}>
        <h1 className={'header'}>
          <span className={'bold'}>Soft UI {' '}</span>
        </h1>
        <h2 className={'header'}><span className={'regular'}>{' '} Open source design tool</span></h2>
      </div>
    </div>
  );
};

export default Header;