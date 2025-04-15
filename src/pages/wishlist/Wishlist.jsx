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
    <section className='pt-[120px] min-h-screen'>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Wishlist</h2>
        <div className="grid grid-cols-4 gap-6">
          {wishlist.map(item => (
            <div key={item.id} className="p-4 rounded">
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover mb-2 rounded" />
              <h3 className="mb-2">{item.title}</h3>
              <button
                onClick={() => dispatch(removeWishlist(item.id))}
                className="bg-red-500 text-white px-4 py-1 rounded"
              >
                O'chirish
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default WishlistPage;
