import { Inter } from 'next/font/google';
import Header from './Header';
import Footer from './Footer';
import './styles/globals.css';
import styles from './styles/layout.module.css';
import { Roboto_Mono } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  fallback: ['Helvetica Neue', 'sans-serif'],
});

export const metadata = {
  title: 'Bla Bla Blog',
  description: 'A Blog about a self-taught developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
