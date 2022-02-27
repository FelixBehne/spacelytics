import Link from 'next/link';
import styles from './FrontPageContent.module.css';
import { useUser } from '@auth0/nextjs-auth0';

export const FrontPageContent = ({ heading, subheading }) => {
  const { user, error, isLoading } = useUser();

  return (
    <div id={styles.content}>
      <h1 id={styles.heading}>{heading}</h1>
      <h3 id={styles.subheading}>{subheading}</h3>
      <Link href="/analytics">
        <a className={styles.primAction} href="">
          {user ? 'Explore' : 'Sign In'}
        </a>
      </Link>
    </div>
  );
};
export default FrontPageContent;
