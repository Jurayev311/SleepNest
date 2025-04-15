import React from 'react'
import { useTranslation } from 'react-i18next'
import rasm1 from '../../assets/rasm1.png'
import rasm2 from '../../assets/rasm2.png'
import rasm3 from '../../assets/rasm3.png'

const News = () => {
    const { t } = useTranslation();

    const newsData = [
        {
            img: rasm1,
            date: '10/05/2024',
            author: t('news_author'),
            title: t('news_item_1_title'),
            desc: t('news_item_1_desc')
        },
        {
            img: rasm2,
            date: '10/05/2024',
            author: t('news_author'),
            title: t('news_item_2_title'),
            desc: t('news_item_2_desc')
        },
        {
            img: rasm3,
            date: '10/05/2024',
            author: t('news_author'),
            title: t('news_item_3_title'),
            desc: t('news_item_3_desc')
        }
    ]

    return (
        <section className='mt-[120px]'>
            <div className='container mx-auto px-4'>
                <div className='text-center'>
                    <h2 className='text-[35px] font-bold mb-[30px]'>{t('news_title')}</h2>
                    <p className='text-[16px] font-normal mb-[80px] text-gray-400'>{t('news_desc')}</p>
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
