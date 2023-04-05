import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { menusApi } from '../features/restaurant/api/menusApi';

export const store = configureStore({
  reducer: {
    [menusApi.reducerPath]:menusApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(menusApi.middleware),
});

setupListeners(store.dispatch);
