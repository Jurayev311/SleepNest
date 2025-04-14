import React from 'react'
import { FaShippingFast, FaHeadphonesAlt, FaWallet } from 'react-icons/fa'
import { BsPatchCheck } from 'react-icons/bs'

const services = [
  {
    icon: <FaShippingFast className="text-[40px] text-red-500" />,
    title: "Yetkazib berish bepul",
    desc: "Barcha buyurtmalar uchun bepul yetkazib berish"
  },
  {
    icon: <BsPatchCheck className="text-[40px] text-red-500" />,
    title: "Qaytish kafolati",
    desc: "30 kunlik pulni qaytarish"
  },
  {
    icon: <FaHeadphonesAlt className="text-[40px] text-red-500" />,
    title: "24/7 onlayn qo'llab-quvvatlash",
    desc: "24/7 texnik yordam"
  },
  {
    icon: <FaWallet className="text-[40px] text-red-500" />,
    title: "Xavfsiz to'lov",
    desc: "Barcha to'lov usullari qabul qilinadi"
  }
]

const Services = () => {
  return (
    <section className='mt-[132px]'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[40px] px-4'>
          {services.map((item, index) => (
            <div key={index} className='flex items-start justify-center gap-4'>
              <div>{item.icon}</div>
              <div>
                <h2 className='font-semibold text-[18px] text-black mb-1'>{item.title}</h2>
                <p className='text-gray-500 text-[14px]'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
