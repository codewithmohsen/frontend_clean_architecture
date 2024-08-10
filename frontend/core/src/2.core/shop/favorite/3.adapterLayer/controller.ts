import { CONFIG, IEntity } from '../1.entityLayer';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// ------------------------------------------------------------------- INITIAL STATE
const initialState: IEntity = {
	ids: [],
};

// ------------------------------------------------------------------- CONTROLLER
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
