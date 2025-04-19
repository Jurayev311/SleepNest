import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Info = ({ image, bgColor = '#464351' }) => {
    const { t } = useTranslation();

    return (
        <section className="mt-[120px]">
            <div className="container mx-auto">
                <div style={{ backgroundColor: bgColor }} className="relative bg-[#464351] p-7 text-white rounded-[30px] flex flex-col md:flex-row items-center justify-between px-[60px] h-[auto] transition-all duration-300 shadow-[0_0_0px_rgba(0,0,0,0)] hover:shadow-[0_0_50px_10px_#ff8a8a]">

                    <div className="z-10 text-center md:text-start mb-5 md:mb-0">
                        <h2 className="text-[75px] font-extrabold">100%</h2>
                        <p className="text-lg">{t('material_quality')}</p>
                    </div>

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 hidden md:block">
                        <img className="w-[800px]" src={image} alt="Info Image" />
                    </div>

                    <div className="z-10 max-w-md text-center md:text-start">
                        <h2 className="text-[30px] font-semibold mb-5 leading-10">
                            {t("eco_product_title")}
                        </h2>
                        <p className="text-[16px] font-normal mb-5">
                            {t("eco_product_desc")}
                        </p>
                        <Link to={"/collection"}>
                        <button className="cursor-pointer active:scale-95 py-2.5 px-8 bg-white text-black rounded-4xl mt-1.5">
                            {t("collection_button")}
                        </button>
                        </Link>
                    </div>

                    <div className="md:hidden w-full mt-5">
                        <img className="w-full" src={image} alt="Info Image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;
