import React from 'react';
import Nav from './Nav';
import Image from 'next/image';
import styles from './styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <Image
        src="/large-star.png"
        alt="Blog Logo"
        width="50"
        height="50"
        quality="100"
        priority
        className={styles.image}
      />
      <Nav />
    </header>
  );
};

export default Header;
