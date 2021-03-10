import Logo from '../Logo/logo';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

const SubHeader = styled.h2`
  margin: 0;
  font-size: 11pt;
  padding: 0;
  font-weight: 400;
`;

const Header = (): ReactElement => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100px', paddingTop: '10px' }}>
      <Logo />
      <div style={{ alignSelf: 'center' }}>
        <h1 className={'header'}>
          <span className={'bold'}>Soft UI</span>
        </h1>
        <SubHeader>An open-source design tool</SubHeader>
      </div>
    </div>
  );
};

export default Header;