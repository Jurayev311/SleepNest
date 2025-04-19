import React from 'react';
import { useTranslation } from 'react-i18next';
import sleep from '../../assets/sleep.png';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-[80px] sm:pt-[100px] md:pt-[120px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#F5EFE6] rounded-[40px] h-auto md:h-[508px] p-6 md:p-0">
          <div className="text-[#A17F4A] text-center md:text-end z-10 order-1 md:order-2 md:translate-x-[-50px] md:translate-y-[-20px]">
            <span className="text-[#7A5C33] text-[18px] sm:text-[22px] md:text-[25px] font-bold mb-[10px] md:mb-[20px] block">
              {t('title')}
            </span>
            <span className="text-[28px] sm:text-[40px] md:text-[55px] font-normal leading-tight md:leading-none mb-[15px] md:mb-[35px] block">
              {t('subtitle')}
            </span>
            <span className="text-[32px] sm:text-[50px] md:text-[75px] font-normal leading-tight md:leading-none block">
              {t('description')}
            </span>
          </div>

          <div className="w-full md:w-[70%] flex justify-center md:justify-start order-2 md:order-1">
            <img
              src={sleep}
              alt="sleepnest image"
              className="w-full max-w-[300px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[100%] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;