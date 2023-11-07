import React from 'react';
import Link from 'next/link';
import styles from './Blog.module.css';

function BlogList({ posts }) {
  return (
    <ul className={styles.blogList}>
      {posts &&
        posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`} className={styles.blogLink}>
              {post.id}.......
              {post.title}
            </Link>
          </li>
        ))}
    </ul>
  );
}

export default BlogList;
