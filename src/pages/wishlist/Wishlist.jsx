import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeWishlist } from '../../store/features/productsSlice';
import ScrollToTop from '../../components/scroll/ScrollTop';

const WishlistPage = () => {
  const wishlist = useSelector(state => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <>
      <ScrollToTop />
      <section className='pt-[100px] pb-[40px] min-h-screen bg-[#f9f9f9]'>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Wishlist</h2>

          {wishlist.length === 0 ? (
            <p className="text-center text-gray-500">Hozircha wishlistda mahsulot yo‘q.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {wishlist.map(item => (
                <div key={item.id} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                  <h3 className="text-center font-medium mb-4">{item.title}</h3>
                  <button
                    onClick={() => dispatch(removeWishlist(item.id))}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full text-sm font-semibold transition"
                  >
                    O‘chirish
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default WishlistPage;
