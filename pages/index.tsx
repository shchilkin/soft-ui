import React from 'react';
import Logo from '../components/logo/logo';

const Home = () => {
  import('../utils/rust/soft-ui-utils/pkg').then(module => {
    console.log(module);
    // module.greet(module.to_hex(10).toString());
 })
  //  https://css-tricks.com/snippets/css/complete-guide-grid/
  return (
    <div>
      <div style={{display:'flex',}}>
        <Logo />
        <div style={{alignSelf:'center'}}>
          <h1 className={'header'}>
            <span className='bold'>Soft UI</span>
              {" "}-{" "}
            <span className={'regular'}>Open source design tool</span>
          </h1>
        </div>
      </div>
     <div className='generator-grid'>
      <div className='softui-preview'/>
     </div>
    </div>
  )
}

export default Home;