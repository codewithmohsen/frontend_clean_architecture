import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';
import { Services } from './services';
import { Gateway } from './gateway';
import { CORE_CONFIG } from '../../../../1.domain';
import { Usecase } from '../2.usecase';
import { CONFIG, IEntity } from '../1.entity';
import { IEntity as IProduct } from '../../product/1.entity';

const gateway = new Gateway(new Services(), new Usecase());

const Controller = createApi({
	reducerPath: CONFIG.REDUCER_NAME,
	baseQuery: fetchBaseQuery({
		baseUrl: CORE_CONFIG.BASE_URL,
	}),
	tagTypes: [CONFIG.REDUCER_STATE],
	endpoints: (build) => ({
		readCategory: build.query<IProduct[], string>({
			queryFn: async (_name) => {
				return { data: await gateway.read(_name) };
			},
		}),
		readAllCategories: build.query<string[], void>({
			queryFn: async () => {
				return { data: await gateway.readAll() };
			},
		}),
	}),
});
export { Controller };
