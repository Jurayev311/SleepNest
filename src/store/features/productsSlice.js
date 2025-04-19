import { createSlice } from '@reduxjs/toolkit';

const getInitialWishlist = () => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
};

const initialState = {
    items: getInitialWishlist(),
};

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        toggleWishlist: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index >= 0) {
                state.items.splice(index, 1); 
            } else {
                state.items.push(action.payload); 
            }

            localStorage.setItem('wishlist', JSON.stringify(state.items));
        },
        removeWishlist: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            localStorage.setItem('wishlist', JSON.stringify(state.items));
        },
    },
});

export const { toggleWishlist, removeWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
