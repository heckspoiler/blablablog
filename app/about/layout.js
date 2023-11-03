export const metadata = {
  title: 'About | Bla Bla Blog',
  description: 'About page of Bla Bla Blog',
};

export const AboutLayout = ({ children }) => {
  return (
    <section>
      <h2>This is the about page</h2>
      {children}
    </section>
  );
};

export default AboutLayout;
