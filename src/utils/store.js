import { configureStore } from '@reduxjs/toolkit';
import cocktailReducer from './slice';

export default configureStore({
    reducer: {
        cocktails: cocktailReducer
    }
})