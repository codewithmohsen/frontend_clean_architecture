// import { array, bool, Schema, number, object } from 'yup';

// interface CartSchema extends Array<{ id: number; among: number }> {}

// const Validation: Schema<CartSchema> = array()
// 	.of(
// 		object({
// 			id: number().required(),
// 			among: number().min(0).required(),
// 		})
// 	)
// 	.required();

// export { Validation };

import { array, number, object } from 'yup';

const Validation = object().shape({
	items: array()
		.of(
			object()
				.shape({
					id: number().required(),
					among: number().required(),
				})
				.required()
		)
		.required(),
});

export { Validation };
