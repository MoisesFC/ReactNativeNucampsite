import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/parnersSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';

export const store = configureStore({
    reducer: {
        campsites: campsitesReducer,
        comments: commentsReducer,
        partners: partnersReducer,
        promotions: promotionsReducer
    }
});