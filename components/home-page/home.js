import Image from 'next/image';

import classes from './home.module.css';

function Home() {
  return (
    <section className={classes.header}>
      <div className={classes.image}>
        <Image
          src='/images/general/js.jpg'
          alt='Js'
          width={300}
          height={300}
        />
      </div>
      <p>
        Blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}

export default Home;
