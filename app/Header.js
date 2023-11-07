import React from 'react';
import Nav from './Nav';
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <Image
        src="/large-star.png"
        alt="Blog Logo"
        width="50"
        height="50"
        quality="100"
        priority
      />
      <Nav />
    </header>
  );
};

export default Header;
