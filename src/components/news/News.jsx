import React from 'react'
import rasm1 from '../../assets/rasm1.png'
import rasm2 from '../../assets/rasm2.png'
import rasm3 from '../../assets/rasm3.png'

const News = () => {
    const newsData = [
        {
            img: rasm1,
            date: '10/05/2024',
            author: 'admin tomonidan',
            title: 'Qanday qilib mukammal gadjetlarni tanlash mumkin',
            desc: "Go'zal vodiyning bug' bilan to'lganida va meridian quyoshi tepalikka urilganda..."
        },
        {
            img: rasm2,
            date: '10/05/2024',
            author: 'admin tomonidan',
            title: 'Zamonaviy texnologiyalardan qanday foydalanish kerak',
            desc: "Texnologiyalar hayotimizni qanday o'zgartirishi haqida qiziqarli hikoyalar..."
        },
        {
            img: rasm3,
            date: '10/05/2024',
            author: 'admin tomonidan',
            title: 'Kreativ g\'oyalarni amalga oshirish yo\'llari',
            desc: "Ko'plab yangi kashfiyotlar yaratish jarayonida qanday qiyinchiliklarga duch kelinadi..."
        }
    ]

    return (
        <section className='mt-[120px]'>
            <div className='container mx-auto px-4'>
                <div className='text-center'>
                    <h2 className='text-[35px] font-bold mb-[30px]'>Yangiliklar</h2>
                    <p className='text-[16px] font-normal mb-[80px] text-gray-400'>Ekologik Toza Uyqu Mahsulotlari</p>
                </div>

                <div className='grid md:grid-cols-3 gap-8'>
                    {newsData.map((item, index) => (
                        <div key={index}>
                            <img src={item.img} alt="news" className='rounded-xl w-full h-[200px] object-cover mb-4' />
                            <div className='text-[14px] text-gray-500 flex gap-4 mb-2'>
                                <span>{item.date}</span>
                                <span>{item.author}</span>
                            </div>
                            <h3 className='text-[18px] font-semibold mb-2'>{item.title}</h3>
                            <p className='text-[15px] text-gray-500'>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default News
