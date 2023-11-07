import { Roboto_Mono } from 'next/font/google';

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['variable'],
  fallback: ['Helvetica Neue', 'sans-serif'],
});

export const metadata = {
  title: 'About | Bla Bla Blog',
  description: 'About page of Bla Bla Blog',
};

export const AboutLayout = ({ children }) => {
  return (
    <section className={roboto_mono.className}>
      <h2>This is the about page</h2>
      {children}
    </section>
  );
};

export default AboutLayout;
