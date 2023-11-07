import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <h1>Error 404 - not found</h1>
      <h2>We're sorry, but the page you're looking for doesn't exist!</h2>
      <Link href="/">Head back to Home</Link>
    </>
  );
}
