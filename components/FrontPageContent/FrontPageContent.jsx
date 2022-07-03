import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import styles from './FrontPageContent.module.css';

export function FrontPageContent({ heading, subheading }) {
  const { user } = useUser();

  return (
    <div className={styles.content}>
      <h1>{heading}</h1>
      <p>{subheading}</p>
      {!user ? (
        <a className={styles.primAction} href="api/auth/login">
          Sign In
        </a>
      ) : (
        <Link href="/analytics">
          <a className={styles.primAction}>Explore</a>
        </Link>
      )}
    </div>
  );
}
export default FrontPageContent;
