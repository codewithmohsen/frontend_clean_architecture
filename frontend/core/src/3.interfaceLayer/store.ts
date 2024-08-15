import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { Controller as productController } from '../2.core/shop/product/3.adapterLayer/4.controller';
import { Controller as categoryController } from '../2.core/shop/category/3.adapterLayer/controller';
import { Controller as favoriteController } from '../2.core/shop/favorite/3.adapterLayer/controller';
import { Controller as cartController } from '../2.core/shop/cart/3.adapterLayer/controller';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineSlices(productController, categoryController, {
	[productController.reducerPath]: productController.reducer,
	[categoryController.reducerPath]: categoryController.reducer,
	[favoriteController.reducerPath]: favoriteController.reducer,
	[cartController.reducerPath]: cartController.reducer,
});
const persistConfig = {
	key: 'root',
	version: 1,
	whitelist: [favoriteController.reducerPath, cartController.reducerPath],
	storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		})
			.concat(productController.middleware)
			.concat(categoryController.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor: any = persistStore(store);
