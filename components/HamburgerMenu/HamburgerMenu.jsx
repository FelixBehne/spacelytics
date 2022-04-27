import React, { useState } from 'react';
import styles from './HamburgerMenu.module.css';
import classNames from 'classnames/bind';
import { reveal as Menu } from 'react-burger-menu';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';

const cx = classNames.bind(styles);
const HamburgerMenu = ({ notify }) => {
  const { user } = useUser();
  const status = user ? 'active' : 'inactive';

  return (
    <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
      <Link href="/">
        <a className={styles.btn}>
          <i className="fa fa-home"></i> Home
        </a>
      </Link>
      <Link href={user ? '/analytics' : ''}>
        <a
          id={cx({ [`restricted-content--${status}`]: true })}
          className={styles.btn}
          onClick={!user ? () => alert('Please sign in first !') : undefined}
        >
          <i className="fa fa-bar-chart"></i> Analytics
        </a>
      </Link>
      <Link href="/about">
        <a className={styles.btn}>
          <i className="fa fa-info-circle"></i> About
        </a>
      </Link>
      <a
        id={styles.signin}
        className={styles.btn}
        href={!user ? 'api/auth/login' : 'api/auth/logout'}
      >
        <i className="fa fa-github"></i>{' '}
        <span style={{ 'word-spacing': '2px' }}>
          {!user ? 'Sign In' : 'Sign Out'}
        </span>
      </a>
    </Menu>
  );
};

export default HamburgerMenu;
