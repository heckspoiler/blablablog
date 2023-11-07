import { Inter } from 'next/font/google';
import Header from './Header';
import Footer from './Footer';
import './globals.css';
import { Roboto } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  fallback: ['Helvetica Neue', 'sans-serif'],
});

export const metadata = {
  title: 'Bla Bla Blog',
  description: 'A Blog about a self-taught developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
