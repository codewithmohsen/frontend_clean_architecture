import { object, number, string, date } from 'yup';

const Validation = object().shape({
	id: number().integer().positive().nullable(),
	title: string(),
	price: number().integer().positive(),
	description: string(),
	category: string(),
	image: string().url(),
	website: string().url(),
	rating: object()
		.shape({
			rate: number().integer().positive().min(0.0).max(5.0),
			count: number().integer().positive().min(0),
		})
		.nullable(),
	createdOn: date().nullable(),
	upadetOn: date().nullable(),
});
export { Validation };
