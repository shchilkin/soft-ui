import React, { ReactElement } from 'react';

const Footer = (): ReactElement => {
  return <div style={{display: 'flex', flexDirection:'row', justifyContent:'right', alignItems:'flex-end'}}>
    <div style={{ padding: '20px' }}>
      <a className='github-button' href='https://github.com/crazyredkitten/soft-ui' data-size='large'
         data-show-count='true' aria-label='Star crazyredkitten/soft-ui on GitHub'>Star on GitHub</a>
    </div>
  </div>;

};

export default Footer;