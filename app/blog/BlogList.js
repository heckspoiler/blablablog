import React from 'react';
import Link from 'next/link';
import styles from './Blog.module.css';

function BlogList({ posts }) {
  return (
    <ul className={styles.blogList}>
      {posts &&
        posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              {post.id}.......
              <span className={styles.blogLink}>{post.title}</span>
            </Link>
          </li>
        ))}
    </ul>
  );
}

export default BlogList;
