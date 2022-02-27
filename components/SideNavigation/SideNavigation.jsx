import Link from 'next/link';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './SideNavigation.module.css';
import { useUser } from '@auth0/nextjs-auth0';

const cx = classNames.bind(styles);

const SideNavigation = () => {
  const { user, error, isLoading } = useUser();

  const status = user ? '' : 'inactive';
  const mapLink = user ? '' : 'mapLink';
  return (
    <div id={styles.container}>
      <div id={styles.head}>
        <span id={styles.heading}>Spacelytics</span>
      </div>
      <nav>
        <div className={styles.listItems}>
          <svg
            width="24"
            fill="white"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M22 11.414v12.586h-20v-12.586l-1.293 1.293-.707-.707 12-12 12 12-.707.707-1.293-1.293zm-6 11.586h5v-12.586l-9-9-9 9v12.586h5v-9h8v9zm-1-7.889h-6v7.778h6v-7.778z" />
          </svg>
          <Link href="/" passHref>
            <a title="Home" className={styles.links}>
              Home
            </a>
          </Link>
        </div>
        <div
          id={cx({ [`link--${status}`]: true })}
          className={styles.listItems}
          onClick={() => (user ? '' : alert('Please Sign In First  '))}
        >
          <svg
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-3.148 0-6 2.553-6 5.702 0 4.682 4.783 5.177 6 12.298 1.217-7.121 6-7.616 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm12 16l-6.707-2.427-5.293 2.427-5.581-2.427-6.419 2.427 4-9 3.96-1.584c.38.516.741 1.08 1.061 1.729l-3.523 1.41-1.725 3.88 2.672-1.01 1.506-2.687-.635 3.044 4.189 1.789.495-2.021.465 2.024 4.15-1.89-.618-3.033 1.572 2.896 2.732.989-1.739-3.978-3.581-1.415c.319-.65.681-1.215 1.062-1.731l4.021 1.588 3.936 9z" />
          </svg>
          <Link href={'/analytics'} passHref>
            <a className={styles.links} id={cx({ [`${mapLink}`]: true })}>
              Analytics
            </a>
          </Link>
        </div>
        <div id={styles.line}></div>
      </nav>
    </div>
  );
};

export default SideNavigation;
