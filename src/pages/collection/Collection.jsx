import React from 'react'
import WinterCollection from '../../components/winterCollection/WinterCollection'
import ScrollToTop from '../../components/scroll/ScrollTop'

const Collection = () => {
  return (
    <>
    <ScrollToTop />
    <section className='pt-[10px] mb-[20px]'>
      <div className='container mx-auto'>
        <WinterCollection />
      </div>
    </section>
    </>
  )
}

export default Collection