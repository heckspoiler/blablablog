import React from 'react';
import Link from 'next/link';

function BlogList({ posts }) {
  return (
    <ul>
      {posts &&
        posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
    </ul>
  );
}

export default BlogList;
