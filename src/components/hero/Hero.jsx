import React from 'react'
import sleep from '../../assets/sleep.png'

const Hero = () => {
    return (
        <section className='mt-5'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between bg-[#F5EFE6] rounded-[40px] h-[508px]'>
                        <img src={sleep} alt="sleepnest image" className='w-[1100px] object-contain z-20 translate-x-[-120px] translate-y-[50px]' />

                    <div className='text-[#A17F4A] text-end z-0 translate-x-[-490px] translate-y-[-110px]'>
                        <span className='text-[#7A5C33] text-[25px] font-bold mb-[20px] block'>Ekologik</span>
                        <span className='text-[55px] font-normal leading-none mb-[35px] block'>Toza Uyqu</span>
                        <span className='text-[95px] font-normal leading-none block'>Mahsulotlari</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
