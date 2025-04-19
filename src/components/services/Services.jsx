import React from 'react';
import { FaShippingFast, FaHeadphonesAlt, FaWallet } from 'react-icons/fa';
import { BsPatchCheck } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <FaShippingFast className="text-[40px] text-red-500" />,
      title: t('delivery_free'),
      desc: t('free_delivery_desc')
    },
    {
      icon: <BsPatchCheck className="text-[40px] text-red-500" />,
      title: t('return_guarantee'),
      desc: t('return_guarantee_desc')
    },
    {
      icon: <FaHeadphonesAlt className="text-[40px] text-red-500" />,
      title: t('online_support'),
      desc: t('online_support_desc')
    },
    {
      icon: <FaWallet className="text-[40px] text-red-500" />,
      title: t('secure_payment'),
      desc: t('secure_payment_desc')
    }
  ];

  return (
    <section className='mt-[132px]'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[40px]'>
          {services.map((item, index) => (
            <div
              key={index}
              className='
                flex 
                flex-col 
                sm:flex-row 
                items-center 
                sm:items-start 
                text-center 
                sm:text-left 
                gap-3 
              '
            >
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
  );
};

export default Services;
