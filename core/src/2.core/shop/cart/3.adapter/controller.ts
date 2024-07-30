import { CONFIG, IEntity } from '../1.entity';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const initialState: IEntity = [];

const Controller = createSlice({
	name: CONFIG.REDUCER_NAME,
	reducerPath: CONFIG.REDUCER_NAME,
	initialState,
	reducers: {
		increaseItem: (state: IEntity, action: PayloadAction<number>) => {
			console.log(state, action);

			state.length > 0 &&
				state.map((item) => {
					if (item.id === action.payload) {
						item.among = item.among + 1;
						return {
							...state,
						};
					}
				});
			let item: { id: number; among: number } = { id: action.payload, among: 1 };
			return {
				...state.concat(item),
			};
		},
		decreaseItem: (state: IEntity, action: PayloadAction<number>) => {
			console.log(state, action);
			state &&
				state.map((item) => {
					if (item.id === action.payload) {
						item.among = item.among > 0 ? item.among - 1 : 0;
						if (item.among > 0)
							return {
								...state,
							};
						else {
							return {
								...state.filter((item) => item.id !== action.payload),
							};
						}
					}
				});
		},
		resetItem: (state: IEntity, action: PayloadAction<number>) => {
			console.log(state, action);
			state.map((item) => {
				if (item.id === action.payload) {
					return {
						...state.filter((item) => item.id !== action.payload),
					};
				}
			});
		},
	},
});

export { Controller };
