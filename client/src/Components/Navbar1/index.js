import React from 'react';
import Media from 'react-media';
import Navbar1PC from './Navbar1PC';
import Navbar1MB from './Navbar1MB';
const Navbar1 = () => {
  return (
    <div>
      <Media queries={{
        mobile: "(max-width:599px)"
      }}>
        {matches => matches.mobile ? <Navbar1MB/> : <Navbar1PC/>}
      </Media>
    </div>
  );
};

export default Navbar1;