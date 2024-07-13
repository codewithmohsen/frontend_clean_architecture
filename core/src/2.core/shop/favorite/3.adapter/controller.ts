import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';
import { Services } from './services';
import { Gateway } from './gateway';
import { CORE_CONFIG } from '../../../../1.domain';
import { Usecase } from '../2.usecase';
import { CONFIG, IEntity } from '../1.entity';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// const gateway = new Gateway(new Services(), new Usecase());

const initialState: IEntity = {
	ids: [],
	filteredIds: [],
	filteredId: false,
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
