import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counterSlice';
import productReducer from './productSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        product: productReducer
    }
});

export default store;