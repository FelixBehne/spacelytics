import React from 'react';
import classNames from 'classnames/bind';
import Menu from 'react-burger-menu/lib/menus/reveal';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import swal from 'sweetalert';
import styles from './HamburgerMenu.module.css';
import useWindowSize from '../../utils/customHooks';

const cx = classNames.bind(styles);
function HamburgerMenu() {
  const { user } = useUser();
  const size = useWindowSize();

  const status = user ? 'active' : 'inactive';

  return (
    <Menu
      pageWrapId="page-wrap"
      outerContainerId="outer-container"
      width={size.width < 600 ? size.width : 300}
      disableOverlayClick={size.width < 600}
      disableAutoFocus={size.width < 600}
      noTransition={size.width < 600}
    >
      <Link href="/">
        <a className={styles.btn}>
          <i className="fa fa-home" /> Home
        </a>
      </Link>
      <Link href={user ? '/analytics' : '/'}>
        <a
          id={cx({ [`restricted-content--${status}`]: true })}
          className={styles.btn}
          onClick={
            !user ? () => swal('Oops!', 'Please sign in first!') : undefined
          }
        >
          <i className="fa fa-bar-chart" /> Analytics
        </a>
      </Link>
      <Link href="/about">
        <a className={styles.btn}>
          <i className="fa fa-info-circle" /> About
        </a>
      </Link>
      <div id={styles.separator} />
      <div id={styles.divider} />
      <a
        id={styles.signin}
        className={styles.btn}
        href={!user ? 'api/auth/login' : 'api/auth/logout'}
      >
        <i className="fa fa-github" />{' '}
        <span style={{ wordSpacing: '2px' }}>
          {!user ? 'Sign In' : 'Sign Out'}
        </span>
      </a>
    </Menu>
  );
}

export default HamburgerMenu;
