import React from 'react';
import Image from 'next/image';

export async function generateStaticParams() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
    next: { revalidate: 60 },
  });
  const data = await res.json();

  return data.map((post) => ({
    post: toString(post),
  }));
}

const BlogPost = async ({ params }) => {
  const { post } = params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post}`,
    { next: { revalidate: 60 } }
  );
  const imageres = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${post}`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const image = await imageres.json();
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <Image src={image.url} width={600} height={600} alt={image.title} />
    </div>
  );
};

export default BlogPost;
