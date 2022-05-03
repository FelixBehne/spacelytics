import React from 'react';
import styles from './HamburgerMenu.module.css';
import classNames from 'classnames/bind';
import Menu from 'react-burger-menu/lib/menus/reveal';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import useWindowSize from '../../utils/customHooks';

const cx = classNames.bind(styles);
const HamburgerMenu = () => {
  const { user } = useUser();
  const size = useWindowSize();

  const status = user ? 'active' : 'inactive';

  return (
    <Menu
      pageWrapId={'page-wrap'}
      outerContainerId={'outer-container'}
      width={size.width < 600 ? size.width : 300}
      noOverlay={size.width < 600 ? true : false}
      disableOverlayClick={size.width < 600 ? true : false}
      disableAutoFocus={size.width < 600 ? true : false}
    >
      <Link href="/">
        <a className={styles.btn}>
          <i className="fa fa-home"></i> Home
        </a>
      </Link>
      <Link href={user ? '/analytics' : '/'}>
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
      <div id={styles.separator} />
      <div id={styles.divider} />
      <a
        id={styles.signin}
        className={styles.btn}
        href={!user ? 'api/auth/login' : 'api/auth/logout'}
      >
        <i className="fa fa-github"></i>{' '}
        <span style={{ wordSpacing: '2px' }}>
          {!user ? 'Sign In' : 'Sign Out'}
        </span>
      </a>
    </Menu>
  );
};

export default HamburgerMenu;
