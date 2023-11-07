import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

export default function Home() {
  return (
    <main>
      <h1 className={styles.title}>Bla Bla Blog</h1>
      <p>
        Dis is a blog, hello there! Support me on patreon! Please take a look at
        my{' '}
        <Link href="/blog" className={styles.link}>
          Blog Page
        </Link>
      </p>
    </main>
  );
}
