import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';
import { Services } from './services';
import { Gateway } from './gateway';
import { CORE_CONFIG } from '../../../../1.domain';
import { Usecase } from '../2.usecase';
import { CONFIG, IEntity } from '../1.entity';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const gateway = new Gateway(new Services(), new Usecase());

const initialState: IEntity = {
	ids: [],
	filteredIds: [],
	filteredId: false,
};

const Controller = createSlice({
	name: CONFIG.REDUCER_NAME,
	initialState,
	reducers: {
		readAllFavorites: (state) => {
			return state;
		},
		readFavorite: (state, action: PayloadAction<number>) => {
			state.filteredId = state.ids?.includes(action.payload) ? true : false;
		},
		readSomeFavorites: (state, action: PayloadAction<number[]>) => {
			throw new Error('not implemented');
		},
		unsetFavorite: (state, action: PayloadAction<number>) => {
			state.ids = state.ids?.filter((id) => id != action.payload);
		},
		setFavorite: (state, action: PayloadAction<number>) => {
			state.ids?.includes(action.payload) && state.ids.concat(action.payload);
		},
	},
});

export { Controller };
