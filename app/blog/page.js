import React from 'react';
import { Roboto_Mono } from 'next/font/google';
import BlogList from './BlogList';

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['variable'],
  fallback: ['Helvetica Neue', 'sans-serif'],
});

const Blog = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
  return (
    <div className={roboto_mono.className}>
      <h1>Blog</h1>
      <BlogList posts={data} />
    </div>
  );
};

export default Blog;
