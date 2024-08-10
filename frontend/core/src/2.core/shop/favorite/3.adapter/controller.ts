import { CONFIG, IEntity } from '../1.entity';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const initialState: IEntity = {
	ids: [],
};

const Controller = createSlice({
	name: CONFIG.REDUCER_NAME,
	reducerPath: CONFIG.REDUCER_NAME,
	initialState,
	reducers: {
		toggleFavorite: (state: IEntity, action: PayloadAction<number>) => {
			return !state.ids?.includes(action.payload)
				? {
						...state,
						ids: state.ids?.concat(action.payload),
				  }
				: {
						...state,
						ids: state.ids?.filter((id) => id != action.payload),
				  };
		},
	},
});

export { Controller };
