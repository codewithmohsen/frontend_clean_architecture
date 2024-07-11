import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { Controller as productController } from '../2.core/shop/product/3.adapter/controller';
import { Controller as categoryController } from '../2.core/shop/category/3.adapter/controller';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const rootReducer = combineSlices(productController, categoryController, {
	[productController.reducerPath]: productController.reducer,
	[categoryController.reducerPath]: categoryController.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (gDM) =>
		gDM({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		})
			.concat(productController.middleware)
			.concat(categoryController.middleware),
});

setupListeners(store.dispatch);
