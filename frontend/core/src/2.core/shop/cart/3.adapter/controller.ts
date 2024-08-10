import { number } from 'yup';
import { CONFIG, IEntity } from '../1.entity';
import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { decreaseItem } from './presentor';
const initialState: IEntity = { items: [] };

const Controller = createSlice({
	name: CONFIG.REDUCER_NAME,
	reducerPath: CONFIG.REDUCER_NAME,
	initialState,
	reducers: {
		increaseItem: (state: IEntity, action: PayloadAction<number>) => {
			const tempItem = {
				id: action.payload,
				among: 0,
			};
			const existedItem = state.items.find((item) => item.id === action.payload);
			const otherItems = state.items.filter((item) => item.id !== action.payload);
			if (existedItem) {
				tempItem.among = existedItem.among + 1;
			} else {
				tempItem.among = 1;
			}
			return {
				...state,
				items: [...otherItems, tempItem],
			};
		},
		decreaseItem: (state: IEntity, action: PayloadAction<number>) => {
			const tempItem = {
				id: action.payload,
				among: 0,
			};
			const existedItem = state.items.find((item) => item.id === action.payload);
			const otherItems = state.items.filter((item) => item.id !== action.payload);
			if (existedItem) {
				if (existedItem.among > 1) {
					tempItem.among = existedItem.among - 1;
					return {
						...state,
						items: [...otherItems, tempItem],
					};
				}
			}
			return {
				...state,
				items: [...otherItems],
			};
		},
		resetItem: (state: IEntity, action: PayloadAction<number>) => {
			//done
			const items = state.items.filter((item) => item.id !== action.payload);
			return { ...state, items: items };
		},
	},
});

export { Controller };
