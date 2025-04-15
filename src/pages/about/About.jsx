import React from 'react';
import { useTranslation } from 'react-i18next';
import about from '../../assets/about.png';
import ScrollToTop from '../../components/scroll/ScrollTop';

const About = () => {
  const { t } = useTranslation();

  return (
    <>
    <ScrollToTop />
    <section className="py-10 pt-[130px]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black">{t('about_title')}</h2>
          <p className="mb-3.5 text-sm text-gray-700">{t('about_paragraph_1')}</p>
          <p className="mb-3.5 text-sm text-gray-700">{t('about_paragraph_2')}</p>
          <p className="mb-3.5 text-sm text-gray-700">{t('about_paragraph_3')}</p>
          <p className="mb-3.5 text-sm text-gray-700">{t('about_paragraph_4')}</p>
          <p className="mb-3.5 text-sm text-gray-700">{t('about_paragraph_5')}</p>
          <p className="mb-3.5 text-sm text-gray-700">{t('about_paragraph_6')}</p>
          <p className="mb-3.5 text-sm text-gray-700">{t('about_paragraph_7')}</p>
          <p className="mb-3.5 text-sm text-gray-700">{t('about_paragraph_8')}</p>
          <p className="mb-3.5 text-sm text-gray-700">{t('about_paragraph_9')}</p>
          <p className="mb-3.5 text-sm text-gray-700">{t('about_paragraph_10')}</p>
          <p className="text-sm text-gray-700">{t('about_paragraph_11')}</p>
        </div>

        <div className="md:w-1/mb-3.5">
          <img src={about} alt="About" className="rounded-xl shadow-lg w-full object-cover" />
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
