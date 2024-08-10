import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';
import { Services } from './services';
import { Gateway } from './gateway';
import { CORE_CONFIG } from '../../../../1.domain';
import { Usecase } from '../2.usecaseLayer';
import { CONFIG, IEntity } from '../1.entityLayer';

const gateway = new Gateway(new Services(), new Usecase());

const Controller = createApi({
	reducerPath: CONFIG.REDUCER_NAME,
	baseQuery: fetchBaseQuery({
		baseUrl: CORE_CONFIG.BASE_URL,
	}),
	tagTypes: [CONFIG.REDUCER_STATE],
	endpoints: (build) => ({
		readProduct: build.query<IEntity, number>({
			queryFn: async (_id) => {
				return { data: await gateway.read(_id) };
			},
		}),
		readAllProducts: build.query<IEntity[], void>({
			queryFn: async () => {
				return { data: await gateway.readAll() };
			},
		}),
	}),
});
export { Controller };
