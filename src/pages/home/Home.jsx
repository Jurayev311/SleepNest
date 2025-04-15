import React from 'react';
import Hero from '../../components/hero/Hero';
import Services from '../../components/services/Services';
import Info from '../../components/info/Info';
import infoImage1 from '../../assets/info.png';
import infoImage2 from '../../assets/info2.png';
import infoImage3 from '../../assets/info3.png';
import WinterCollection from '../../components/winterCollection/WinterCollection';
import News from '../../components/news/News';

const Home = () => {
  return (
    <section>
      <Hero />
      <Services />
      <Info image={infoImage1} />
      <WinterCollection title="winter_collection_title" />
      <Info image={infoImage2} bgColor='#7F54B3' />
      <WinterCollection title="autumn_collection_title" />
      <Info image={infoImage3} bgColor='#236F48' />
      <WinterCollection title="summer_collection_title" />
      <News />
    </section>
  )
}

export default Home;
