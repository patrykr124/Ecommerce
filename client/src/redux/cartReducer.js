import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload);
            }
        },
        increaseQuantity: (state, action) => {
            const product = state.products.find((item) => item.id === action.payload);
            if (product) {
                product.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const product = state.products.find((item) => item.id === action.payload);
            if (product) {
                product.quantity -= 1;
            }
            if (product.quantity <= 0){
                state.products = state.products.filter(
                    (item) => item.id !== action.payload
                );
            }
        },
        remove: (state, action) => {
            state.products = state.products.filter(
                (item) => item.id !== action.payload
            );
        },
        reset: (state) => {
            state.products = [];
        },
    },
});

export const {addToCart, remove, reset, increaseQuantity, decreaseQuantity} = cartSlice.actions;

export default cartSlice.reducer;
