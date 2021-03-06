import React from 'react';
import Footer from './Footer';
import '../styles/Home.css';

const Home = () => (
  <div>
    <div className="Home">
      <div className="Home-left">
        <h2>Welcome The Magic Master!</h2>
        <img src="magician-img.jpg" alt="Math magician with smiling face" />
      </div>
      <div className="Home-right">
        <p>
          A mathemagician is a mathematician who is also a magician. The term &quot;mathemagic&quot;
          is believed to have been
          introduced by Royal Vale Heath with his 1933 book &quot;Mathemagic&quot;.
          The name &quot;Mathemagic&quot; was probably first applied to Martin Gardner,
          but has since been used to describe
          many mathematician/magicians, including Arthur T. Benjamin, Persi Diaconis,
          and Colm Mulcahy. Diaconis has suggested that the reason so many mathematicians
          are magicians is that
          &quot;inventing a magic trick and inventing a theorem are very similar activities.&quot;
          Mathemagician is a neologism, specifically a portmanteau, that combines
          mathematician and magician.
          A great number of self-working mentalism tricks rely on mathematical principles.
          Max Maven often utilizes this type of magic in his performance.
          The Mathemagician is the name of a character in the 1961 children&apos;s
          book The Phantom Tollbooth.
          He is the ruler of Digitopolis, the kingdom of mathematics.
        </p>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
