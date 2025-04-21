import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { data } from '../../static/index';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist } from '../../store/features/productsSlice';
import ProductModal from '../modal/ProductModal'; // Modalni import qilamiz

export const WinterCollection = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlist.items);

    const [selectedProduct, setSelectedProduct] = useState(null); // modal uchun state

    const handleToggle = (item) => {
        dispatch(toggleWishlist(item));
    };

    const isInWishlist = (item) => {
        return wishlist.some(w => w.id === item.id);
    };

    return (
        <section className='mt-[120px]'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h2 className='text-[35px] font-bold mb-[30px]'>{t('winter_collection_title')}</h2>
                    <p className='text-[16px] font-normal mb-[80px]'>{t('winter_collection_desc')}</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-9'>
                    {data?.map((item) => (
                        <div
                            key={item.id}
                            className='col-span-1 relative cursor-pointer'
                            onClick={() => setSelectedProduct(item)} // mahsulotga bosilganda ochiladi
                        >
                            <img src={item.image} alt={item.title} className='w-full rounded-2xl' />

                            <span
                                onClick={(e) => {
                                    e.stopPropagation(); // wishlist bosilganda modal ochilmasin
                                    handleToggle(item);
                                }}
                                className='absolute top-2 right-2 text-xl text-red-500 p-2 bg-[#D4D4D4] rounded-full'
                            >
                                {isInWishlist(item) ? <FaHeart /> : <FaRegHeart />}
                            </span>

                            <h3 className='text-start mt-2'>{t(item.title)}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal chiqishi */}
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </section>
    );
};

export default WinterCollection;
