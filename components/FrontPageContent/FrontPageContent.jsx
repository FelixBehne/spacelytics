import Link from 'next/link';
import styles from './FrontPageContent.module.css';
import { useUser } from '@auth0/nextjs-auth0';

export const FrontPageContent = ({ heading, subheading }) => {
  const { user, error, isLoading } = useUser();

  return (
    <div className={styles.content}>
      <h1>{heading}</h1>
      <p>{subheading}</p>
      <Link href="/analytics">
        <a className={styles.primAction} href="">
          {user ? 'Explore' : 'Sign In'}
        </a>
      </Link>
    </div>
  );
};
export default FrontPageContent;
