import { InferType, ValidationError } from 'yup';
import { array, number, object } from 'yup';

// ------------------------------------------------------------------- OBJECT
const Schema = object().shape({
	ids: array().of(number()),
});

// ------------------------------------------------------------------- INTERFACE of OBJECT
interface IEntity extends InferType<typeof Schema> {}

// ------------------------------------------------------------------- ENTITY
interface Entity extends IEntity {}
class Entity implements IEntity {
	constructor(props: IEntity) {
		try {
			const result = Schema.validateSync(props);
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

export { Entity, IEntity, Schema };
