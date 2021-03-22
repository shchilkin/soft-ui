import Logo from '../Logo/logo';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

const TextHeader = styled.h1`
  margin: 0;
`;

const SubHeader = styled.h2`
  margin: 0;
  font-size: 11pt;
  padding: 0;
  font-weight: 400;
`;

const Header = (): ReactElement => {
  return (
    <div className={'header'} style={{ display: 'flex', alignItems: 'center' }}>
      <Logo />
      <div style={{ alignSelf: 'center' }}>
        <TextHeader>
          <span className={'bold'}>Soft UI</span>
        </TextHeader>
        <SubHeader>An open-source design tool</SubHeader>
      </div>
    </div>
  );
};

export default Header;