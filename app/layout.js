import { Inter } from 'next/font/google';
import Header from './Header';
import Footer from './Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bla Bla Blog',
  description:
    'A Blog about a self-taught developer, his struggles and his dick',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
