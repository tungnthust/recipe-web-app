import React from 'react';
import Media from 'react-media';
import Navbar1MB from './Navbar1MB';
import Navbar1PC from './Navbar1PC';
import SignedInNavbar1 from './SignedInNavbar1';
const Navbar1 = () => {
  return (
    <div>
      { localStorage.getItem("token") != null ? <SignedInNavbar1/> :
        <Media queries={{
          mobile: "(max-width:599px)"
        }}>
          {matches => matches.mobile ? <Navbar1MB/> : <Navbar1PC/>}
        </Media>
      }
    </div>
  );
};

export default Navbar1;