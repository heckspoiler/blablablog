import React from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
