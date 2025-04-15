import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addWishlist: (state, action) => {
            const exists = state.items.find(item => item.id === action.payload.id);
            if (!exists) {
                state.items.push(action.payload);
            }
        },
        removeWishlist: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    },
});

export const { addWishlist, removeWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
