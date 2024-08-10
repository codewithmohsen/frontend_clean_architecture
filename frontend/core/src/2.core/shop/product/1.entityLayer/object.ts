import { InferType, ValidationError } from 'yup';
import { object, number, string, date } from 'yup';

// ------------------------------------------------------------------- OBJECT
const Object = object().shape({
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

// ------------------------------------------------------------------- INTERFACE
interface IEntity extends InferType<typeof Object> {}

// ------------------------------------------------------------------- ENTITY
interface Entity extends IEntity {}
class Entity implements IEntity {
	constructor(props: IEntity) {
		try {
			const result = Object.validateSync(props);
			if (result) {
				for (let key in props) {
					(this as any)[key] = (props as any)[key];
				}
			}
		} catch (error: any) {
			if (error.name === 'ValidationError') throw new ValidationError(error);
			throw new Error(error);
		}
	}
}

export { Entity, IEntity, Object };
