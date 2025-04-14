import React from 'react'
import {data} from '../../static/index'
import { FaRegHeart } from "react-icons/fa";


export const WinterCollection = ({title}) => {
    return (
        <section className='mt-[120px]'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h2 className='text-[35px] font-bold mb-[30px]'>{title}</h2>
                    <p className='text-[16px] font-normal mb-[80px]'>Ekologik Toza Uyqu Mahsulotlari</p>
                </div>

                <div className='grid grid-cols-5 gap-9'>
                    {data.map((item, index) => (
                        <div key={index} className='col-span-1 relative'>
                            <img src={item.image} alt={item.title} className='w-full rounded-2xl' />
                            <span className='absolute top-2 right-2 text-xl text-red-500 p-2 bg-[#D4D4D4] rounded-full cursor-pointer'><FaRegHeart /></span>
                            <h3 className='text-start mt-2'>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WinterCollection