import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { Controller as productController } from '../2.core/shop/product/3.adapter/controller';
import { Controller as categoryController } from '../2.core/shop/category/3.adapter/controller';
import { Controller as favoriteController } from '../2.core/shop/favorite/3.adapter/controller';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineSlices(productController, categoryController, {
	[productController.reducerPath]: productController.reducer,
	[categoryController.reducerPath]: categoryController.reducer,
	[favoriteController.reducerPath]: favoriteController.reducer,
});
const persistConfig = {
	key: 'root',
	version: 1,
	whitelist: [favoriteController.reducerPath],
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
