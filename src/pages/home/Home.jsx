import React from 'react'
import Hero from '../../components/hero/Hero'
import Services from '../../components/services/Services'
import Info from '../../components/info/Info'
import infoImage1 from '../../assets/info.png'
import infoImage2 from '../../assets/info2.png'
import infoImage3 from '../../assets/info3.png'
import WinterCollection from '../../components/winterCollection/WinterCollection'

const Home = () => {
  return (
    <section>
      <Hero />
      <Services />
      <Info image={infoImage1} />
      <WinterCollection />
      <Info image={infoImage2} bgColor='#7F54B3'/>
      <Info image={infoImage3} bgColor='#236F48'/>
    </section>
  )
}

export default Home