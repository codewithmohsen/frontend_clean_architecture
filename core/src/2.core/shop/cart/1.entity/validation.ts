import { array, bool, Schema, number, object } from 'yup';

interface CartSchema extends Array<{ id: number; among: number }> {}

const Validation: Schema<CartSchema> = array()
	.of(
		object({
			id: number().required(),
			among: number().min(0).required(),
		})
	)
	.required();

export { Validation };
